import { getMeals } from "@/lib/meals";

const Meals = async () => {
  const meals = await getMeals();

  return (
    <main>
      <h1>Meals</h1>
    </main>
  );
};

export default Meals;
