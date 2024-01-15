const sql = require("better-sqlite3");
const { initData } = require("./mocked-meals-data");

console.log("initData -->", initData);

const db = sql("meals.db");

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`
).run();

// Drop table
/* db.prepare(
  `
    DROP TABLE meals
  `
).run(); */

initData(db);
