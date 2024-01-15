import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import MealsLoadingPage from "./loading-meals";

const MealsData = async () => {
  const meals = await getMeals();
  console.log("meals", meals);
  return (
    <ul>
      {meals.map((meal) => (
        <li key={meal.id}>{meal.id}</li>
      ))}
    </ul>
  );
};

const Meals = () => {
  return (
    <main>
      <h1>Meals</h1>
      <Suspense fallback={<MealsLoadingPage />}>
        <MealsData />
      </Suspense>
    </main>
  );
};

export default Meals;
