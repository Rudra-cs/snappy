const express = require("express");
const cors = require("cors");
const app = express();
const rooms = ["general", "finance", "crypto"];

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(cors());

const server = require("http").createServer(app);
const PORT = 5001;

const io = require("socket.io")(server, {
  cors: {
    origin: "http:localhost:5173",
    methods: ["GET", ["POST"]],
  },
});

app.get("/", (req, res) => {
  res.send(`<h1>Hello</h1>`);
});

server.listen(PORT, () => {
  console.log("Going on " + PORT);
});
