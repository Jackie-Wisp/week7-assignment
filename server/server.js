import express from "express"
import cors from "cors"

import { db } from "./dbConnection.js";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running is PORT ${PORT}`);
});

app.get("/", function (_, res) {
    res.json({ message: "This is the root route. How roude!" });
});

//import packages

//set up your packages

//set up your configs

//set up your database pool

//set up a port to host our server

//write your root route

//===========================================

app.get("/cards", async (req, res) => {
    const result = await db.query(`SELECT * FROM heros`);
    res.json(result.rows);
});

app.post("/add-card", (req, res) => {
const newDATA = req.body;
db.query(`INSERT INTO heros (card_name, src, description, level) VALUES($1, $2, $3, $4)`)
    res.jason({message: "Data sent to the Database"});
});

//I need a route to READ data from the database

//I need a route to CREATE new data in the database --> the new data here is stored in the body object

//===========================================

//?STRETCH GOAL: I want to DELETE data from the database --> use params