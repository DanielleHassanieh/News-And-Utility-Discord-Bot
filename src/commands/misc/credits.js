const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "credits",
    description: "sends an embed of author's website",

    callback: (client, interaction) => {
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
    },
}