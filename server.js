import express from "express";
import path from "path";
const app = express();
import fs from "fs";
import { error } from "console";
const __dirname = path.resolve();
app.use(express.urlencoded());
const fn = "userList.csv";

app.post("/register", (req, res) => {
  console.log(req.body);

  res.send("Data received");
});

app.get("/register", (req, res) => {
  //   res.send(`<h1>Register Page</h1>
  //  `);
  res.sendFile(__dirname + "/public/register.html");
});
app.get("/login", (req, res) => {
  //   res.send(`<h1>Register Page</h1>
  //  `);
  res.sendFile(__dirname + "/public/login.html");
});
app.post("/login", (req, res) => {
  //   res.send(`<h1>Register Page</h1>
  //  `);
  // const {email, pasword}
  res.send("<h1>Login Sucessfull</h1>");
});

app.get("/", (req, res) => {
  console.log("server received the request");
  //   res.send(`<h1>Home Page</h1>
  //   <a href="/register">
  //       <button>Register</button>
  //   </a>
  //   <a href="/login">
  //       <button>Login</button>
  //   </a>`);
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(8000, (error) => {
  error
    ? console.log(error)
    : console.log("your server is running at http://localhost:8000");
});
