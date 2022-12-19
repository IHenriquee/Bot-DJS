const Discord = require("discord.js")

module.exports = {
  name: "lock", // Coloque o nome do comando
  description: "bla bla bla", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    let embedSemPerm = new Discord.EmbedBuilder()
    .setTitle(`Sem permissão`)
    .setColor("#ff2e7b")
    .setDescription(`<:Ruby_what:1053694963654856725> Parece que você não possui permissão para executar esse comando, você precisa da permissão **Gerenciar Canais/Manage Channels**`)

    let embedTrancado = new Discord.EmbedBuilder()
    .setTitle(`Chat Trancado`)
    .setColor("#2efcff")
    .setDescription(`<:Ruby_3:1053695281012674600> Este chat foi trancado por ${interaction.user} com sucesso!`)

    let embedErro = new Discord.EmbedBuilder()
    .setTitle(`Erro Identificado`)
    .setColor("#fffc2e")
    .setDescription(`<:Ruby_what:1053694963654856725> Ocorreu um erro ao executar este comando.`)

    let chatTrancado = interaction.channel

    if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageChannels)) {
        interaction.reply({ embeds: [embedSemPerm]}).then(() => {
            setTimeout(() => {
                interaction.deleteReply()
            }, 7000);
        })
        
    } else {
        interaction.reply({ embeds: [embedTrancado] })
        chatTrancado.permissionOverwrites.edit(interaction.guild.id, { SendMessages: false }).catch(e => {
            interaction.reply({ embeds: [embedErro], ephemeral: true})
        })
    }


  }
}
