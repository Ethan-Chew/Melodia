const Discord = require('discord.js');
const client = new Discord.Client();
client.login('NjE4MjUxMDEwNTMxMzkzNTM2.XW2-YQ.niKKV94rO7VC2NJZErLhbJfV1tA')
const ownerID = 380612857144016897 //your discord ID here (not used for this bot)
const Version = '1.1 Beta'

//https://discordapp.com/oauth2/authorize?client_id=618251010531393536&scope=bot&permissions=66060544
// my bot invite link ^ INVITE IT!


const prefix = '!!'
const active = new Map();

client.on('message', message => {

    console.log('Melodia is Ready. Melodia Version:', Version)

    let args = message.content.slice(prefix.length).trim().split(' ')
    let cmd = args.shift().toLowerCase();

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    try {
        let ops = {
            ownerID: ownerID,
            active: active


        }
        let commandFile = require(`./commands/${cmd}.js`)
        commandFile.run(client, message, args, ops);


    } catch (e) {
        message.channel.send('Unknown command. Commands are : !!search <title>, !!play <title/url> !!leave , !!skip ')

        console.log(e.stack)
    }





});

client.on('ready', () => console.log('Launched!'))