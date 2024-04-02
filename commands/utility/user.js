const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('returns data about user'),

    async execute(interaction) {
        await interaction.reply(`The user who ran this command was ${interaction.user.username}, they joined on ${interaction.user.joinedAt ?? 'An unknown date'}`);
    },
};