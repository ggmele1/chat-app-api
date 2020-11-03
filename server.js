const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const login = require("./controllers/login");



const knex = require("knex");
const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "giuse",
    password: "",
    database: "chat-app-db",
  },
});

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.get("/", (req, res) => { res.send("The app is working") });

app.post("/login", (req, res) => { login.handleLogin(req, res, db) });

app.listen(3001, () => {
    console.log("app is running on port 3001");
  });
  