const {ActivityType} = require("discord.js");
module.exports = (client) => {
    client.user.setActivity({
        name: "Being productive!",
        type: ActivityType.Streaming,
        url: "https://www.youtube.com/watch?v=BLgqyQMjd5s",
    });
};