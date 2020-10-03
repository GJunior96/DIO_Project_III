const dialogflow = require('dialogflow');
const configs = require('./'); // Colocar o caminho do arquivo DialogFlow

const sessionClient = new dialogflow.SessionsClient({
	projectId: configs.project_id,
	credentials: {
		private_key: configs.private_key,
		client_email: configs.client_email
	}
});

async function sendMessage(chatId, message) {
	const sessionPath = sessionClient.sessionPath(configs.project_id, chatId);
	const request = {
		session: sessionPath,
		queryInput: {
			text: {
				text: message,
				language: 'pt-BR'
			}
		}
    };
    
	const responses = await sessionClient.detectIntent(request);
	const result = responses[0].queryResult;
	console.log(JSON.stringfy(result, null, 2));
};