const mongoose = require("mongoose");
const cheerio = require("cheerio");
const cron = require("node-cron");
const { DB_USERNAME, DB_PASSWORD, DB_NAME } = require("./config");
const axios = require("axios").default;
const { BreakingNew } = require("./models");

const conectionString = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.c05rxyy.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(conectionString, { useNewUrlParser: true });

//Se ejecuta cada minuto, examples in https://crontab.guru/
cron.schedule("* * * * * *", async () => {
  console.log("Cron Job executed");
  const html = await axios.get("https://cnnespanol.cnn.com/");
  const $ = cheerio.load(html.data);
  const titles = $(".news__title");
  titles.each((index, element) => {
    const breakingNew = {
      title: $(element).text().toString(),
      link: $(element).children().attr("href"),
    };
    // Se añade al arreglo en cada iteracion
    BreakingNew.create([breakingNew]);
  });
});
