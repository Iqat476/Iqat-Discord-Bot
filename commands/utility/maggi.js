const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('maggi')
        .setDescription('maggi is life'),

    async execute(interaction) {
        await interaction.reply('Maggi is Life');
    },
};