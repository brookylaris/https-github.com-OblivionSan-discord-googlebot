const config = require(`../config.json`);
const p = config.prefix;
exports.run = (client, message) => {
    message.author.send({
        embed: {
            color: 0xffffff,
            title: "Discord Invite Link",
            url: `https://invite.gg/rageempire`,
            description: `Once invited, type \`${p}help\` to see my commands.`,
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL,
                text: client.user.username
            }
        }
    });
    return message.react("👌");
};
