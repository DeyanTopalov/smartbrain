import express from "express";

const app = express();
app.use(express.json());

const database = {
  users: [
    {
      id: "123",
      name: "John",
      email: "john@gmail.com",
      password: "cookies",
      entries: 0,
      joined: new Date(),
    },
    {
      id: "124",
      name: "Sally",
      email: "sally@gmail.com",
      password: "bananas",
      entries: 0,
      joined: new Date(),
    },
  ],
};

app.get("/", (req, res) => {
  res.send("this is working");
});

app.post("/signin", (req, res) => {
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json("success"); // in express we can automatically send json
  } else {
    res.status(400).json("error loggin in");
  }
});

app.post("./register", (req, res) => {
  const { email, name, password } = req.body;
  // destructuring to pass the email, name and pass objects from databse
  database.users.push({
    id: "125",
    name: name,
    email: email,
    password: password,
    entries: 0,
    joined: new Date(),
  }); // taking the values from register and passing them to the database
  res.json(database.users[database.users.length - 1]);
  // If we don't have a response - the website will just stay in loading
  // lenght is at -1, cuz we want to respond with the newly created user
  // a.k.a the last item in the database -> a.k.a -1
});

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
