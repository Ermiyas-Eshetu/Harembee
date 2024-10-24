// server.js

const express = require("express");
const { Telegraf, Markup } = require("telegraf");

const app = express();

// Replace with your actual bot token from BotFather
const bot = new Telegraf(process.env.BOT_TOKEN || "8127476321:AAEZRnXRDTduVYvHPJGKpxdz3Mm_6qXVXc4");

// In-memory list to store users (in production, use a database)
let users = [];

// /start command
bot.start((ctx) => {
  const userId = ctx.message.from.id;
  const username = ctx.message.from.username || "No username";

  // Add the user to the list if not already added
  if (!users.some((user) => user.id === userId)) {
    users.push({ id: userId, username });
  }

  ctx.reply(`Welcome, @${username} (ID: ${userId})! I am your bot. Type /help for commands.`);
  ctx.reply("Click the button below to open the web app:", Markup.inlineKeyboard([
    Markup.button.url("Open Web App", "https://chic-flan-4d07c8.netlify.app")
  ]));
});

// /help command
bot.command("help", (ctx) => {
  ctx.reply(
    "Here are the commands you can use:\n" +
    "/help - Show available commands\n" +
    "/list_users - List all bot users\n" +
    "/open_web - Get a button to open the web app"
  );
});

// /list_users command to list all registered users
bot.command("list_users", (ctx) => {
  if (users.length === 0) {
    ctx.reply("No users have interacted with the bot yet.");
  } else {
    const userList = users.map((user) => `@${user.username} (ID: ${user.id})`).join("\n");
    ctx.reply(`Here is the list of users:\n${userList}`);
  }
});

// Command or button to open the web page (React app hosted on Netlify)
bot.command("open_web", (ctx) => {
  ctx.reply("Click the button below to open the web app:", Markup.inlineKeyboard([
    Markup.button.url("Open Web App", "https://chic-flan-4d07c8.netlify.app")
  ]));
});

// Handles the 'hello' keyword
bot.hears("hello", (ctx) => {
  const userId = ctx.message.from.id;
  const username = ctx.message.from.username || "No username";

  ctx.reply(`Hello, @${username} (ID: ${userId})!`);
});

// Handling all other text messages
bot.on("text", (ctx) => {
  const userId = ctx.message.from.id;
  const username = ctx.message.from.username || "No username";

  ctx.reply(`You (@${username}, ID: ${userId}) said: ${ctx.message.text}`);
});

// Launch the bot
bot.launch();

// Express server for integration with the React app
app.get("/", (req, res) => {
  res.send("Bot is running!");
});
app.get("/sendmessage", (req, res) => {
  res.send("This is sending page back end");
});

// Listen on port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
