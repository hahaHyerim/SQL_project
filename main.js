const port = 80,
      express = require("express"),
      ejs = require("ejs"),
      app = express(),
      router = require("./router/index");

app.use(router);

app.set("views", __dirname + "/views");
app.set('view engine', 'ejs');
app.engine('ejs', ejs.renderFile);

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`The Express.js server has started and is listening on port number: ${port}`);
});
