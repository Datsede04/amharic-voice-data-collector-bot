const { Telegraf } = require('telegraf')
const bot = new Telegraf("1498554123:AAEF4gxlI7CFHL30ccQZpmLR4_K5H6kshm4")
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()