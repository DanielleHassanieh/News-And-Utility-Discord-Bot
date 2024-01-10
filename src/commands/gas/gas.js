const {ApplicationCommandOptionType} = require("discord.js");

module.exports = {
    name: "gas",
    description: "Get the gas price averages in the US, a state in the US, or a metropolis in a state.",
    options: [
        {
            name: "place",
            description: "The US or a state.",
            type: ApplicationCommandOptionType.String,
            required: true,
        },
    ],
    callback: (client, interaction) => {
        // ? needed if option isn't required
        const state = interaction.options.get("state")?.value;
        const metro = interaction.options.get("metro")?.value;
        const list = interaction.options.get("list")?.value;

        // get date and check if file exists. if it doesn't, get today's file
        const date = new Date();
        const gasData = new File(`ap-news-${date.getFullYear()}-${date.getDay()}-${date.getDay()}.json`)
        if (!gasData.exists()) {

        }

        console.log(state, metro, list);
    },
}