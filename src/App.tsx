import './App.css';
import { useState } from 'react'
// import { data } from './data';
import { Header } from './components/Header'
import Weekview from './assets/Weekview'
import MyMeals from './assets/MyMeals';
import CreateMeal from './assets/CreateMeal';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import { Meal } from './utils/Types';

const App: React.FC = () => {
  const [mealName, setMealName] = useState('')
  const [ingredient1, setIngredient1] = useState('')
  const [ingredient2, setIngredient2] = useState('')
  const [meals, setMeals] = useState<Meal[]>([
    {
      mealName: 'spag bol',
      ingredient1: 'spaghetti',
      ingredient2: 'beef mince',
      id: 4
    },
    {
      mealName: 'chicken and rice',
      ingredient1: 'chicken breast',
      ingredient2: 'mushrooms',
      id: 5
      // ingredients?: Ingredient[] | Ingredient,
    },


  ])
  // const [meal, setMeal] = useState<Meal>({
  //   name: '',
  // })

  const addMeal = (newMeal: Meal): void => {
    setMeals([...meals, newMeal])
  }

  return (
    <Router>
      <Header />
      <div>
        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/createmeal" element={<CreateMeal mealName={mealName} ingredient1={ingredient1} ingredient2={ingredient2} setMealName={setMealName} setIngredient1={setIngredient1} setIngredient2={setIngredient2} addMeal={addMeal} meals={meals} setMeals={setMeals} />}>

          </Route>
          <Route path="/about" element={<About />}>

          </Route>
          <Route path="/mymeals" element={<MyMeals meals={meals} setMeals={setMeals} mealName={mealName} ingredient1={ingredient1} ingredient2={ingredient2} setMealName={setMealName} setIngredient1={setIngredient1} setIngredient2={setIngredient2} addMeal={addMeal} />}>
          </Route>
          <Route path="/weekview" element={<Weekview meals={meals} setMeals={setMeals} mealName={mealName} ingredient1={ingredient1} ingredient2={ingredient2} setMealName={setMealName} setIngredient1={setIngredient1} setIngredient2={setIngredient2} addMeal={addMeal} />}>
          </Route>

        </Routes>
      </div>
    </Router >
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


export default App;
