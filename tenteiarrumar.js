// Index feita por: IHenriquee#8056 para Mercury. 🪐#8913

const config = require(`./config.json`) // Aqui ele está buscando o arquivo config.json (Caso você mudar onde ele está, é preciso mudar aqui também)

const Discord = require(`discord.js`); // npm i discord.js  
const { messageLink } = require('discord.js');

const client = new Discord.Client({ 
    intents: 3276799 
}) // As intents do seu Bot

module.exports = client // Aqui ele vai exportar o client

client.on(`shardReady`, () => {
    console.log(`⚙️ - Meus Shards foram iniciados.`)
}) // Se seus Shards forem iniciados corretamente vai aparecer no Terminar esta mensagem


//ticket code
client.on("interactionCreate", async (interaction) => {
    if (interaction.isButton()) {
      if (interaction.customId === "tickets_basico") {
        let nome_canal = `suporte┃${interaction.user.username}`;
        let canal = interaction.guild.channels.cache.find(c => c.name === nome_canal);
  
        if (canal) {
          interaction.reply({ content: `Olá **${interaction.user.username}**, você já possui um ticket em ${canal}.`, ephemeral: true})
        } else {
  
          let categoria = interaction.channel.parent;
          if (!categoria) categoria = null;
  
          interaction.guild.channels.create({
  
            name: nome_canal,
            parent: categoria,
            type: Discord.ChannelType.GuildText,
            permissionOverwrites: [
              {
                id: interaction.guild.id,
                deny: [ Discord.PermissionFlagsBits.ViewChannel ]
              },
              {
                id: interaction.user.id,
                allow: [
                  Discord.PermissionFlagsBits.ViewChannel,
                  Discord.PermissionFlagsBits.AddReactions,
                  Discord.PermissionFlagsBits.SendMessages,
                  Discord.PermissionFlagsBits.AttachFiles,
                  Discord.PermissionFlagsBits.EmbedLinks
                ]
              },
            ]
  
          }).then( (chat) => {
  
            interaction.reply({ content: `Olá **${interaction.user}**, seu ticket foi criado em ${chat}.`, ephemeral: true })
  
            let embed = new Discord.EmbedBuilder()
            .setColor("Random")
            .setDescription(`Olá ${interaction.user}, você seu ticket.\nDigite o que você precisa e iremos te ajudar \n\nPara fechar seu ticket, clique no botão abaixo...`);
  
            let botao_close = new Discord.ActionRowBuilder().addComponents(
              new Discord.ButtonBuilder()
              .setCustomId("close_ticket")
              .setEmoji("🔒")
              .setStyle(Discord.ButtonStyle.Danger)
            );
  
            chat.send({ embeds: [embed], components: [botao_close] }).then(m => {
              m.pin()
            })
  
          })
        }
      } else if (interaction.customId === "close_ticket") {
        interaction.reply(`Olá ${interaction.user}, este ticket será excluído em 5 segundos.`)
        try {
          setTimeout( () => {
            interaction.channel.delete().catch( e => { return; } )
          }, 5000)
        } catch (e) {
          return;
        }
        
      }
    }
  })

client.on('interactionCreate', (interaction) => {

  if (interaction.type === Discord.InteractionType.ApplicationCommand) {

    const cmd = client.slashCommands.get(interaction.commandName);

    if (!cmd) return interaction.reply(`Teste`);

    interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);

    cmd.run(client, interaction)

  }
})

//antilink command



client.on("messageCreate", async (message) => {

    const logCanal = message.guild.channels.cache.get(`1054481376038109328`)
    
  if (message.author.bot) return;
    if (message.member.permissions.has(Discord.PermissionFlagsBits.Administrator)) return; // Caso o usuário tenha permissão de ADM, o bot vai permitir que o mesmo envie links
    if (message.content.toLocaleLowerCase().includes("http") || message.content.toLocaleLowerCase().includes("www")) {
      message.delete()
      message.channel.send(`❌ - ${message.author} Não envie links aqui no chat!`).then(() => {
        logCanal.send({ content: `${message.author} enviou o link: ${message.content} em: ${message.channel}`})
      })
  }
})

client.slashCommands = new Discord.Collection()

require('./handler')(client)

client.login(config.token).then(() => {
    console.log(`⚡🚀 - ${client.user.username} foi iniciada(o) com sucesso!`) // Caso seu bot iniciar no Discord com sucesso, essa mensagem vai aparecer.
}).catch(() => {
    console.log(`❌ - Houve um erro ao iniciar seu bot...`) // Caso seu bot aconteça algum erro para iniciar, essa mensagem vai aparecer.
})

process.on('multipleResolves', (type, reason, promise) => {
  console.log(`🚫 Erro Detectado\n\n` + type, promise, reason)
});
process.on('unhandRejection', (reason, promise) => {
  console.log(`🚫 Erro Detectado:\n\n` + reason, promise)
});
process.on('uncaughtException', (error, origin) => {
  console.log(`🚫 Erro Detectado:\n\n` + error, origin)
});
process.on('uncaughtExceptionMonitor', (error, origin) => {
  console.log(`🚫 Erro Detectado:\n\n` + error, origin)
});


// Um index simples mas funcional :D
