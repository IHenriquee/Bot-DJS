

const config = require(`./config.json`) // Aqui ele está buscando o arquivo config.json (Caso você mudar onde ele está, é preciso mudar aqui também)

const Discord = require(`discord.js`); // npm i discord.js  

const client = new Discord.Client({ 
    intents: 3276799 
}) // As intents do seu Bot

module.exports = client // Aqui ele vai exportar o client

client.on(`shardReady`, () => {
    console.log(`⚙️ - Meus Shards foram iniciados.`)
}) // Se seus Shards forem iniciados corretamente vai aparecer no Terminar esta mensagem

client.on('interactionCreate', (interaction) => {

  if (interaction.type === Discord.InteractionType.ApplicationCommand) {

    const cmd = client.slashCommands.get(interaction.commandName);

    if (!cmd) return interaction.reply(`Teste`);

    interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);

    cmd.run(client, interaction)

  }
})

client.slashCommands = new Discord.Collection()

require('./handler')(client)

client.login(config.token).then(() => {
    console.log(`⚡🚀 - ${client.user.username} foi iniciada(o) com sucesso!`) // Caso seu bot iniciar no Discord com sucesso, essa mensagem vai aparecer.
}).catch(() => {
    console.log(`❌ - Houve um erro ao iniciar seu bot...`) // Caso seu bot aconteça algum erro para iniciar, essa mensagem vai aparecer.
})


// SISTEMA ANTI CRASH
process.on("uncaughtException", (err) => {
    console.log("Uncaught Exception: " + err);
});
  
process.on("unhandledRejection", (reason, promise) => {
    console.log("[GRAVE] Rejeição possivelmente não tratada em: Promise ", promise, " motivo: ", reason.message);
});



