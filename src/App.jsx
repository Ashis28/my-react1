
import List from './List'

function App(){
  const fruits = [
    {id:1,name: "apple", calories: 95},
    {id:2,name: "orange", calories: 45},
    {id:3,name: "banana", calories: 105},
    {id:4,name: "pinapple", calories: 37},
    {id:5,name: "coconut", calories: 159}
];
const vegetables = [
  {id:1,name: "broccoli", calories: 95},
  {id:2,name: "potato", calories: 45},
  {id:3,name: "tomato", calories: 105},
  {id:4,name: "Ginger", calories: 37},
  {id:5,name: "corn", calories: 159}
];

  
  return(
  <>
  {fruits.length>0?<List items={fruits} category="Fruits"/>:null}
  {vegetables.length>0 && <List items={vegetables} category="vegetables"/>}
  </>)
}
//now we will apply conditional rendering in return here
export default App
