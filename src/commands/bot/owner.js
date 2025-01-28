const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `Mot Oyamat`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `Mot Oyamat`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `Agent's Here`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[Facebook](https://pornhub.com)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 
