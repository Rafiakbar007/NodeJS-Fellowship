require("dotenv").config();

const {
    Client,
    GatewayIntentBits,
} = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

// Bot Ready
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// Message Event
client.on("messageCreate", (message) => {

    if(message.author.bot) return;

    console.log(message.content);

    if(message.content === "hello"){
        message.reply("Hi from Bot 👋");
    }

    if(message.content === "ping"){
        message.reply("Pong 🏓");
    }

});

// Slash Command Event
client.on("interactionCreate", async (interaction) => {

    if(!interaction.isChatInputCommand()) return;

    if(interaction.commandName === "ping"){
        await interaction.reply("Pong 🏓");
    }

});

client.login(process.env.TOKEN);