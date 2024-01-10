// import secret id file
require("dotenv").config();
// import discord.js intents, client, embed builder
const { Client, IntentsBitField, EmbedBuilder, } = require("discord.js");
// import the eventHandler
const eventHandler = require("./handlers/eventHandler");

// add intents and create client
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

eventHandler(client);

client.login(process.env.TOKEN);
