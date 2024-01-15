import sql from "better-sqlite3";

const db = sql("meals.db");

export const getMeals = async () => {
  console.log("Entrou");
  const sqlQuery = `
        SELECT * FROM meals 
    `;

  const meals = db.prepare(sqlQuery).all();
  console.log("Db", meals);

  return meals;
};
