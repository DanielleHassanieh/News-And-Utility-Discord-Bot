require("dotenv").config();
const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");

// define commands to register
const commands = [
    // command 1
    {
        // name of command
        name: "gas",
        // description of command
        description: "gets gas price average in the United States, a state, or a county.",
        // options for the command
        options: [
            // option 1
            {
                // name of option
                name: "state",
                // description of option
                description: "location",
                // type input for option
                type: ApplicationCommandOptionType.String,
                // whether option is required (default false)
                // required: true,
            },
            // option 2
            {
                name: "metro",
                description: "location",
                type: ApplicationCommandOptionType.String,
            },
            // option 3
            {
                name: "list",
                description: "list the states in the US, or list metropolises in states",
                type: ApplicationCommandOptionType.Boolean,
            },
        ],
    },
    // command 2
    {
        name: "arithmetic",
        description: "do basic arithmetic between two operands and one operator",
        options: [
            {
                name: "num1",
                description: "the first operand",
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
            {
                name: "operator",
                description: "the operator",
                type: ApplicationCommandOptionType.String,
                // set the choices for the option
                choices: [
                    {
                        name: "add",
                        value: "+",
                    },
                    {
                        name: "subtract",
                        value: "-",
                    },
                    {
                        name: "multiply",
                        value: "*",
                    },
                    {
                        name: "divide",
                        value: "/",
                    },
                    {
                        name: "mod",
                        value: "%",
                    },
                    {
                        name: "exponent",
                        value: "^",
                    },
                ],
                required: true,
            },
            {
                name: "num2",
                description: "the second operand",
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
        ],
    },
    // command 3
    {
        name: "credits",
        description: "sends an embed of author's website"
    },
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

// register commands
(async () => {
    try {
        console.log("Registering slash commands...")

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        );

        console.log("Slash commands were registered successfully!");

    } catch (e) {
        console.log(`There was an error: ${e}`);
    }
})();