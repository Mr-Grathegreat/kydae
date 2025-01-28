const Discord = require('discord.js');

const webhookClient = new Discord.WebhookClient({
  id: "1333549104105525269",
  token: "kqOZmGuMSlcLHTsSGLJBqePH7SBI2K4Kg3yt7sxDzurkgjQluvR3KrkUWXN-kv1v3fpo",
});

module.exports = async (client, interaction, args) => {
  const feedback = interaction.options.getString('feedback');

  const embed = new Discord.EmbedBuilder()
    .setTitle(`📝・New feedback!`)
    .addFields(
      { name: "User", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
    )
    .setDescription(`${feedback}`)
    .setColor(client.config.colors.normal)
  webhookClient.send({
    username: 'Bot Feedback',
    embeds: [embed],
  });

  client.succNormal({
    text: `Feedback successfully sent to the developers`,
    type: 'editreply'
  }, interaction);
}

