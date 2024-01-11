const { ApplicationCommandOptionType } = require("discord.js");
const fs = require("fs")

let newsData;

{
    const date = new Date(Date.now());
    let month = (date.getMonth() + 1).toString();
    // format the month
    if (month.length === 1) month = "0" + month;
    const dateString = `${date.getFullYear()}-${(month)}-${date.getDate()}`;
    // make the directory
    const path_dir = `src/modules/AP-News/ap-news-output/ap-news-${dateString}.json`;

    fs.readFile(path_dir, "utf-8", function (err, data) {
        if (err) throw err;

        newsData = JSON.parse(data);
    });
}

module.exports = {

}