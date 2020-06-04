exports.run = async(client,message,args, ops) => {
            var myInfo = new Discord.RichEmbed()
            var botIcon = message.guild.iconURL
                .setTitle('Modapro™')
                .setThumbnail(botIcon)
                .addField('Bot Name', 'Modapro')
                .addField('Developers:', 'Main commands developed by CrypticDevv, Music commands developed by Existance')
                .addField('How do I see all the commands?', 'Do .cmds')
                .addField('What do I do?', 'My purpose is to replace all bots in the Discord!')
                .addField('Current Version', Version)
                .addField('Report a bug?', 'DM @CrypticDevv!')
                .setColor(0x008000)
            message.channel.send(myInfo)
}