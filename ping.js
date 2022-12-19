const Discord = require("discord.js");

module.exports = {
  name: "ping", // Coloque o nome do comando
  description: "📶 - See the bot's ping.", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {



    let ping = client.ws.ping; 
  
    

    let bloco = 0

    if(ping < 50) {
      bloco = "🟩🟩🟩🟩🟩🟩"
    }

    if(ping > 50) {
      bloco = "🟩🟩🟩🟩🟩⬜"
    }

    if(ping > 100) {
      bloco = "🟩🟩🟩🟩⬜⬜"
    }

    if(ping > 150) {
      bloco = "🟩🟩🟩⬜⬜⬜"
    }

    if(ping > 200) {
      bloco = "🟩🟩⬜⬜⬜⬜"
    }

    if(ping > 250) {
      bloco = "🟩⬜⬜⬜⬜⬜"
    }

    if(ping >  500) {
      bloco = "⚠️⚠️⚠️⚠️⚠️⚠️"
    }


    

    
      let MensagemAtivcedes = "Temos essa função para que não ocorra nenhum problema colocando o seu servidor em nossa database. Para ativar use /activate."
    let MensagemAtivcetit = "Oops! Parece que você não ativou meus comandos no servidor."
      let Mensagemdeping1 = `Olá ${interaction.user}, meu ping está em \`calculando...\`.`
      let Mensagemdeping2 = `Olá ${interaction.user}, meu ping está em \`${ping}ms\`.`

      let Mensagemdeping11 = `Hello ${interaction.user}, my ping is in \`calculando...\`.`
      let Mensagemdeping21 = `Hello ${interaction.user}, my ping is in \`${ping}ms\`.`

      let Mensagemdeping12 = `Hola ${interaction.user}, meu ping están em \`calculando...\`.`
      let Mensagemdeping22 = `Hola ${interaction.user}, meu ping están em \`${ping}ms\`.`
    

    

    

    let embed_1 = new Discord.EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`${Mensagemdeping1}`)
    .setColor("Random")
    .addFields(
      {
        name: `Ping`,
        value: `\`\`\`🟨🟨🟨🟨🟨🟨\`\`\``,
        inline: false
      },
    )

    let embed_2 = new Discord.EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`${Mensagemdeping2}`)
    .setColor("Random")
    .addFields(
      {
        name: `Ping`,
        value: `\`\`\`${bloco}\`\`\``,
        inline: false
      },
    )

    let embed_1enus = new Discord.EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`${Mensagemdeping11}`)
    .setColor("Random")
    .addFields(
      {
        name: `Ping`,
        value: `\`\`\`🟨🟨🟨🟨🟨🟨\`\`\``,
        inline: false
      },
    )

    let embed_2enus = new Discord.EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`${Mensagemdeping21}`)
    .setColor("Random")
    .addFields(
      {
        name: `Ping`,
        value: `\`\`\`${bloco}\`\`\``,
        inline: false
      },
    )

    let embed_1eses = new Discord.EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`${Mensagemdeping12}`)
    .setColor("Random")
    .addFields(
      {
        name: `Ping`,
        value: `\`\`\`🟨🟨🟨🟨🟨🟨\`\`\``,
        inline: false
      },
    )

    let embed_2eses = new Discord.EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`${Mensagemdeping22}`)
    .setColor("Random")
    .addFields(
      {
        name: `Ping`,
        value: `\`\`\`${bloco}\`\`\``,
        inline: false
      },
    )

    


      
            


  
    interaction.reply({ embeds: [embed_1] }).then( () => {
        setTimeout( () => {
            interaction.editReply({ embeds: [embed_2] })
        }, 2000)
    })
  
    


  }

}
