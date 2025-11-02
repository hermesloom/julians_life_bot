import { Bot, webhookCallback } from "grammy";

if (!process.env.BOT_TOKEN) {
  throw new Error("BOT_TOKEN is not set");
}

const bot = new Bot(process.env.BOT_TOKEN);

bot.command("start", (ctx) => {
  ctx.reply("Hello, world!");
});

bot.on("message", (ctx) => {
  // reverse the message
  const message = ctx.message.text;
  if (!message) {
    ctx.reply("Please send a message to reverse");
    return;
  }
  const reversedMessage = message.split("").reverse().join("");
  ctx.reply(reversedMessage);
});

export default webhookCallback(bot, "https");
