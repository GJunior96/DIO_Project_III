const TelegramBot = require('node-telegram-bot-api');

const token = ''; // Digitar o token gerado no Telegram pelo BotFather

const bot = new TelegramBot(token, { polling: true });

bot.on('message', function (msg) {
	const chatId = msg.chat.id;
	console.log(msg.text);
	bot.sendMessage(chatId, 'Obrigado por sua menssagem');
});