const express = require(`express`);
const app = express();
app.get("/", (req, res) => {
  console.log("server received the request ");
  res.send("<h1>info coming fomr the server</h1>");
});
app.listen(8000, (error) => {
  error
    ? console.log(error)
    : console.log(`your server is runnig at http//localhost:8000`);
});
