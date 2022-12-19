// Index feita por: IHenriquee#8056 para Mercury. 🪐#8913

const config = require(`./config.json`) // Aqui ele está buscando o arquivo config.json (Caso você mudar onde ele está, é preciso mudar aqui também)

const Discord = require(`discord.js`); // npm i discord.js  

const client = new Discord.Client({ 
    intents: 3276799 
}) // As intents do seu Bot

module.exports = client // Aqui ele vai exportar o client

client.on(`shardReady`, () => {
    console.log(`⚙️ - Meus Shards foram iniciados.`)
}) // Se seus Shards forem iniciados corretamente vai aparecer no Terminar esta mensagem

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
