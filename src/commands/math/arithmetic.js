const {ApplicationCommandOptionType} = require("discord.js");

module.exports = {
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

    callback: (client, interaction) => {
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
    },
}