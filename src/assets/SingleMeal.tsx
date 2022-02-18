import { Meal } from "../utils/Types";
import { InputField } from '../elements/InputField'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import { GiHotMeal } from 'react-icons/gi'
import { RiSave2Fill } from 'react-icons/ri'
import MyMeals from "./MyMeals";
import { useState } from 'react'


interface Props {
    meal: Meal,
    meals: Meal[],
    setMeals: React.Dispatch<React.SetStateAction<Meal[]>>
    deleteMeal: (id: number) => void,
    editMeal: (id: number) => void,
    updateMeal: (id: number) => void,
}

export const SingleMeal: React.FC<Props> = ({ meal, meals, setMeals, deleteMeal, editMeal, updateMeal }) => {
    const [editMode, setEditMode] = useState<Boolean>(false)
    const [editingMeal, setEditingMeal] = useState<undefined | string>(meal.mealName)

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        console.log(e, meal.id, editingMeal)
        // meals.map(meal => {
        //     meal.id === id ? {...meal.mealName } : {}
        // }
        // console.log(editingMeal)
        // console.log(e, id)
    }

    return <form onSubmit={(e) => handleEdit(e, meal.id)}>
        {
            <li key={meal.mealName} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                <div className="w-full flex items-center justify-between p-6 space-x-6">
                    <div className="flex-1 truncate">
                        <div className="flex items-center space-x-3">
                            {editMode ? (<InputField value={editingMeal} onChange={(e) => setEditingMeal(e.target.value)} id="sfdsdf" placeholder="edit" type="text" />) :
                                <h3 className="text-gray-900 text-lg font-medium truncate">{meal.mealName}</h3>
                            }
                        </div>
                        <p className="mt-1 text-gray-500 text-sm truncate">{meal.ingredient1}</p>
                    </div>
                    <GiHotMeal className="w-10 h-10 text-gray-300 rounded-full flex-shrink-0" />
                </div>
                <div>
                    <div className="-mt-px flex divide-x divide-gray-200">
                        <div className="w-0 flex-1 flex">
                            <a
                                href={'#'}
                                className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                            >
                                {editMode ? (<RiSave2Fill className="w-5 h-5 rounded-full flex-shrink-0" onClick={() => {
                                    setEditMode(!editMode)
                                    updateMeal(meal.id)
                                }
                                } />) : (
                                    <FiEdit className="w-5 h-5 rounded-full flex-shrink-0" onClick={() => {
                                        if (!editMode) {
                                            setEditMode(!editMode)
                                            editMeal(meal.id)
                                            console.log(editingMeal)
                                        }
                                    }
                                    } />
                                )
                                }
                            </a>
                        </div>
                        <div className="-ml-px w-0 flex-1 flex">
                            <a
                                href={'#'}
                                className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                            >
                                <FiTrash2 className="w-5 h-5 rounded-full flex-shrink-0" onClick={() => deleteMeal(meal.id)} />

                            </a>
                        </div>
                    </div>
                </div>
            </li>

        }
    </form>
}