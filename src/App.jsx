
import List from './List'

function App(){
  const fruits = [
    {name: "apple", calories: 95},
    {name: "orange", calories: 45},
    {name: "banana", calories: 105},
    {name: "pinapple", calories: 37},
    {name: "coconut", calories: 159}
];
const vegetables = [
  {id:1,name: "broccoli", calories: 95},
  {id:2,name: "potato", calories: 45},
  {id:3,name: "tomato", calories: 105},
  {id:4,name: "Ginger", calories: 37},
  {id:5,name: "corn", calories: 159}
];

  // return();
  return(
  <>
  <List items={fruits} category="Fruits"/>
  <List items={vegetables} category="vegetables"/>
  </>)
}

export default App
