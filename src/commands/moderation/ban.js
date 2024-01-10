const { ApplicationCommandOptionType, PermissionFlagsBits } = require("discord.js");

module.exports = {
    deleted: true,
    name: "ban",
    description: "bans a member!!!",
    // devOnly: Boolean,
    // testOnly: Boolean,
    options: [
        {
            name: "target-user",
            description: "the user to ban.",
            require: true,
            type: ApplicationCommandOptionType.Mentionable,
        },
        {
            name: "reason",
            description: "the reason for banning.",
            type: ApplicationCommandOptionType.String,
        },
    ],
    permissionsRequired: [PermissionFlagsBits.Administrator],
    botPermissions: [PermissionFlagsBits.Administrator],

    callback: (client, interaction) => {
        interaction.reply("ban..");
    },
};