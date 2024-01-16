import sql from "better-sqlite3";

const db = sql("meals.db");

export const getMeals = async () => {
  const sqlQuery = `
        SELECT * FROM meals 
    `;

  await new Promise((promise) => setTimeout(promise, 3000));
  throw new Error("Loading meals failed");
  //const meals = db.prepare(sqlQuery).all();
  //console.log("Db", meals);

  //return meals;
};
