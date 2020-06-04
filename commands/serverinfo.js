exports.run = async(client,message,args, ops) => {
            var serverIcon = message.guild.iconURL
            var region = message.guild.region.replace(/-/g, ' ').capitalise(true);
            var members = Array.from(message.guild.member.values()).filter(mem => !mem.user.bot).length;

            let serverEmbed = new Discord.RichEmbed
                .setTitle('Server Infomation')
                .setThumbnail(serverIcon)
                .addField('Server Name', `${message.guild.name} (${message.guild.nameAcronym})`, true)
                .addField('Server Owner', message.guild.owner.user.tag, true)
                .addField('Region', region)
                .addField('Members', members)
                .addField('Member Count', message.guild.memberCount)

            message.channel.send(serverEmbed)
}