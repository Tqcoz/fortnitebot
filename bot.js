const Discord = require('discord.js');
const client = new Discord.Client();
const tik = require('moment') 
let tok = tik;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	
    else if (message.content === 'tok')
        
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
