export type Ingredient = {
    item: string,
    amount: number
}

export interface Meal {
    mealName: string | undefined,
    ingredient1: string,
    ingredient2: string,
    id: number
    // ingredients?: Ingredient[] | Ingredient,
}
