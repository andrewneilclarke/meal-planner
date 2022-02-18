import { SingleMeal } from "./SingleMeal";
import { Meal } from "../utils/Types";

interface Props {
    meals: any[],
    setMeals: React.Dispatch<React.SetStateAction<Meal[]>>
}


const MyMeals: React.FC<Props> = ({ meals, setMeals }) => {
    const deleteMeal = (id: number) => {
        setMeals(meals.filter(m => m.id !== id))
    }
    const editMeal = (id: number) => {
        // console.log(id)
    }
    const updateMeal = (id: number) => {
        // console.log(id)
    }

    return (
        <ul className="my-meals">
            {meals.map(meal => (
                <SingleMeal key={meal.id} meal={meal} meals={meals} setMeals={setMeals} deleteMeal={deleteMeal} editMeal={editMeal} updateMeal={updateMeal} />

            ))}
        </ul>
    );
}

export default MyMeals;