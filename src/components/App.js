import RecipeList from "./RecipeList";
import '../css/app.css'

function App() {
  return (
    <>
      <RecipeList recipes={sampleRecipes}/>
    </>
  );
}


const sampleRecipes = [
  {
      id : 1,
      name : 'Chicken',
      serving : 2,
      cookTime : 0.03,
      instructions : "step 1\nstep 2\nstep 3",
      ingredients : [
        {
          id : 1,
          amount : '4 gms',
          name : 'palak'
        },
        {
          id : 2,
          amount : '4 gms',
          name : 'paneer'
        }
      ]
  },
  {
      id : 2,
      name : 'Mutton',
      serving : 3,
      cookTime : 2.03,
      instructions : "step 1\nstep 2\nstep 3",
      ingredients : [
        {
          id : 1,
          amount : '4 gms',
          name : 'mattar'
        },
        {
          id : 2,
          amount : '4 gms',
          name : 'aplsa'
        }
      ]
  }
]

export default App;

