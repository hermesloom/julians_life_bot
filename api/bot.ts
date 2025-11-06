import { Bot, webhookCallback } from "grammy";

if (!process.env.BOT_TOKEN) {
  throw new Error("BOT_TOKEN is not set");
}

const bot = new Bot(process.env.BOT_TOKEN);

bot.command("start", (ctx) => {
  ctx.reply("Hello, world!");
});

bot.on("message", (ctx) => {
  ctx.reply(JSON.stringify(ctx, null, 2));
});

export default webhookCallback(bot, "https");
