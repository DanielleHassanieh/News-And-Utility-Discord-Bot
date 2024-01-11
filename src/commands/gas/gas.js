const { ApplicationCommandOptionType } = require("discord.js");
const fs = require("fs")

module.exports = {
    name: "gas",
    description: "Get the gas price averages in the US, a state in the US, or a metropolis in a state.",
    options: [
        {
            name: "place",
            description: "A state in the US. (Leave blank for US)",
            type: ApplicationCommandOptionType.String,
            // required: true,
        },
    ],
    callback: (client, interaction) => {
        // ? needed if option isn't required
        let place = interaction.options.get("state")?.value;
        // const metro = interaction.options.get("metro")?.value;
        // const list = interaction.options.get("list")?.value;

        if (place === undefined) place = "US";

        // get date and check if file exists. if it doesn't, get today's file
        const date = new Date(Date.now());
        let month = (date.getMonth() + 1).toString();
        // format the month
        if (month.length === 1) month = "0" + month;
        const dateString = `${date.getFullYear()}-${(month)}-${date.getDate()}`;
        // make the directory
        const path_dir = `src/modules/AAA-Gas-Prices/gas-prices-output/gas-prices-${dateString}.json`;

        let gasData;

        fs.readFile(path_dir, "utf-8", function (err, data) {
            if (err) throw err;

            gasData = JSON.parse(data);
        });

        let data;

        if (place === "US") {
            console.log(place)
            data = gasData.US.name
            console.log(place)
        } else if (place in gasData["US"]["states"]){
            data = gasData["US"]["states"][place]["Average Gas Prices"]
        } else {
            interaction.reply("That place doesn't exist :c");
        }

        console.log(data)

        interaction.reply("bob");
    },
}