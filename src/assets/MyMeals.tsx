import { SingleMeal } from "./SingleMeal";
import { Meal } from "../utils/Types";
import Button from "../elements/Button"
import React, { useState } from 'react'
import CreateMeal from "./CreateMeal";

interface Props {
    meals: any[],
    setMeals: React.Dispatch<React.SetStateAction<Meal[]>>
    mealName: string,
    setMealName: React.Dispatch<React.SetStateAction<string>>
    ingredient1: string,
    ingredient2: string,
    setIngredient1: React.Dispatch<React.SetStateAction<string>>,
    setIngredient2: React.Dispatch<React.SetStateAction<string>>,
    addMeal: (newMeal: Meal) => void,
}

const MyMeals: React.FC<Props> = ({ meals, setMeals, addMeal, setIngredient2, setIngredient1, setMealName, ingredient2, ingredient1, mealName }) => {
    const [showAddMeal, setShowAddMeal] = useState(true)

    const deleteMeal = (id: number) => {
        setMeals(meals.filter(m => m.id !== id))
    }

    const handleClick = (e: React.FormEvent) => {
        console.log('heelllllloooo')
        // e.preventDefault()
        // console.log(showAddMeal)
        // setShowAddMeal(!showAddMeal)
        // console.log(showAddMeal)
    }

    return (
        <div className="my-meals">
            {/* {
                showAddMeal ?
                    (
                        <CreateMeal mealName={mealName} ingredient1={ingredient1} ingredient2={ingredient2} setMealName={setMealName} setIngredient1={setIngredient1} setIngredient2={setIngredient2} addMeal={addMeal} meals={meals} setMeals={setMeals} />
                    ) :
                    (
                        <Button buttonText={showAddMeal ? "Close" : "Add"} buttonType="button" onSubmit={(e) => handleClick} />
                    )

            } */}

            <ul className="meals-list">
                {meals.map(meal => (
                    <SingleMeal key={meal.id} meal={meal} meals={meals} setMeals={setMeals} deleteMeal={deleteMeal} />
                ))}
            </ul>
        </div>
    );
}

export default MyMeals;