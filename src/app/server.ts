import * as express from 'express';

const app = express();

// Our users which will be queried by their index
const users = [
  {
    name: "Pepe",
    firstName: "Jesse",
    lastName: "Pinkman",
    age: "20",
    email: "pepe@gmail.com",
    username: "pepeJesse03",
    password: "********",
    tickets: [
      {
        film: "SpiderMan",
        date: "25/12/2021",
        hour: "19:00",
        room: "12",
        row: "13",
        seat: "10"
      },
    ],
  },
  {
    name: "Pepe",
    firstName: "Jesse",
    lastName: "Pinkman",
    age: "20",
    email: "pepe@gmail.com",
    username: "pepeJesse03",
    password: "********",
    tickets: [
      {
        film: "SpiderMan",
        date: "25/12/2021",
        hour: "19:00",
        room: "12",
        row: "13",
        seat: "10"
      },
      {
        film: "SpiderMan",
        date: "25/12/2021",
        hour: "19:00",
        room: "12",
        row: "13",
        seat: "10"
      },
    ],
  },
];

// Allow cross-origin requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/users", (req, res) => {
  return res.json(users);
});

app.get("/user/:id", (req, res) => {
  // To prevent the ID "0" we'll simply subtract by one. This way we can query for id = 2 which will serve us 1, etc.
  const idx: number = parseInt(req.params.id) - 1;
 
  if (!users[idx]) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.json(users[idx]);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});