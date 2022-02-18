import React, { useState } from "react"
import Button from "../elements/Button"
import { InputField } from "../elements/InputField"
import { Meal } from '../utils/Types'
import MyMeals from "./MyMeals"

// const inputname = 'mealtitle';
// const id = 'mealtitle';
// const placeholder = 'mealtitle';
// const type = 'text';

interface Props {
    mealName: string,
    setMealName: React.Dispatch<React.SetStateAction<string>>
    ingredient1: string,
    ingredient2: string,
    setIngredient1: React.Dispatch<React.SetStateAction<string>>,
    setIngredient2: React.Dispatch<React.SetStateAction<string>>,
    addMeal: (newMeal: Meal) => void,
    meals: Meal[],
    setMeals: React.Dispatch<React.SetStateAction<Meal[]>>
}

const CreateMeal: React.FC<Props> = ({ mealName, setMealName, ingredient1, ingredient2, setIngredient1, setIngredient2, addMeal, meals, setMeals }) => {
    const [title, setTitle] = useState('')
    const [ing1, setIng1] = useState('')
    const [ing2, setIng2] = useState('')
    // const [meal, setMeal] = useState({})
    // console.log(meals)

    // const onSubmit = (e, title, ing1, ing2) => {
    //     e.preventDeafult();
    //     const meal = {
    //         title,
    //         ing1,
    //         ing2
    //     }
    // }

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const id = Math.floor(Math.random() * 10000) + 1;
        const meal = {
            mealName,
            ingredient1,
            ingredient2,
            id
        }

        if (!mealName) {
            alert('Please enter title')
            return
        }
        addMeal(meal)
        // console.log(meal)
        setMealName('')
        setIngredient1('')
        setIngredient2('')
    }

    return (
        <>

            <form onSubmit={(e: React.FormEvent) => console.log(e)}>
                <input type="text" name="title" id="title" value={mealName} placeholder="Meal Name" onChange={(e) => setMealName(e.target.value)} />
                <input type="text" name="ing1" id="ing1" value={ingredient1} placeholder="Ingredient 1" onChange={(e) => setIngredient1(e.target.value)} />
                <input type="text" name="ing2" id="ing2" value={ingredient2} placeholder="Ingredient 1" onChange={(e) => setIngredient2(e.target.value)} />
                <Button buttonText="Create" buttonType="button" onSubmit={onSubmit} />
                {/* <button className="bg-black text-white p-2" type="submit">Create</button> */}
            </form >
            <MyMeals meals={meals} setMeals={setMeals} mealName={mealName} ingredient1={ingredient1} ingredient2={ingredient2} setMealName={setMealName} setIngredient1={setIngredient1} setIngredient2={setIngredient2} addMeal={addMeal} />
            {/* <InputField inputname={inputname} id={id} placeholder={placeholder} type={type} /> */}

        </>
    )
}

export default CreateMeal;