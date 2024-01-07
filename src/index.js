// import secret id file
require("dotenv").config();
// import discord.js intents, client, embed builder
const { Client, IntentsBitField, EmbedBuilder } = require("discord.js");

// add intents and create client
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

// when client is ready
client.on("ready", (c) => {
    console.log(`${c.user.tag} is online!!`);
});

client.on("messageCreate", (msg) => {
    // disallow bot from replying to itself
    if (msg.author.bot) {
        return;
    }

    // when hello is said, say hello
    if (msg.content === "hello") {
        msg.reply("hello");
    }
});

// used for managing slash commands
client.on("interactionCreate", (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    // command 1
    if (interaction.commandName === "gas") {
        // ? needed if option isn't required
        const state = interaction.options.get("state")?.value;
        const metro = interaction.options.get("metro")?.value;
        const list = interaction.options.get("list")?.value;

        console.log(state, metro, list);
    }

    // command 2
    if (interaction.commandName === "arithmetic") {
        const num1 = interaction.options.get("num1").value;
        const operator = interaction.options.get("operator").value;
        const num2 = interaction.options.get("num2").value;
        let ans;
        switch (operator) {
            case "+":
                ans = num1 + num2;
                break;
            case "-":
                ans = num1 - num2;
                break;
            case "*":
                ans = num1 * num2;
                break;
            case "/":
                ans = num1 / num2;
                break;
            case "%":
                ans = num1 % num2;
                break;
            case "^":
                ans = num1 ** num2;
                break;
            default:
                ans = "Not a valid operator!";
        }

        interaction.reply(`${num1} ${operator} ${num2} = ${ans}`);
    }

    // command 3
    if (interaction.commandName === "credits") {
        const creditEmbed = new EmbedBuilder()
            .setTitle("News+Utility Discord Bot")
            .setDescription("My first discord bot!")
            .setColor("Random")
            .setURL("https://github.com/DaniHassanieh/News-And-Utility-Discord-Bot")
            .setThumbnail("https://i.imgur.com/C6Hj2lw.jpg")
            .addFields(
                {name: "Author", value: "daniberrydemon", },
                { name: "Website", value: "https://daniberrydemon.dev/", },
            )
            .setImage("https://i.imgur.com/saawaEp.jpg")
	        .setTimestamp()
            .setFooter({ text: "I wanted an image for this embed, so here is a random picture that I chose!", iconURL: 'https://i.imgur.com/C6Hj2lw.jpg' });

        // multiple embeds can be sent via the array
        interaction.reply({ embeds: [creditEmbed] });
    }
});

client.login(process.env.TOKEN);
