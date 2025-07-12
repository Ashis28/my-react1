
//1 Returning an array of unordered list [<li></li>,<li></li>,<li></li>]
/*
function List(){
    const  fruits = ["apple","orange","banana","pinapple","coconut"];

    let fruitLists = fruits.map((fruit)=> <li>{fruit}</li>);

    return (<ol>{fruitLists}</ol>);
}
export default List;
*/
//2 Returning objects 
/*
function List() {
    const fruits = [
        {name: "apple", calories: 95},
        {name: "orange", calories: 45},
        {name: "banana", calories: 105},
        {name: "pinapple", calories: 37},
        {name: "coconut", calories: 159}
    ];

    // Explicitly use fruit.name to render just the name
    let fruitLists = fruits.map((fruit, index) => <li key={index}>{fruit.name}</li>);

    return <ol>{fruitLists}</ol>;
}
    */

//or

/*
function List() {
    const fruits = [
        {name: "apple", calories: 95},
        {name: "orange", calories: 45},
        {name: "banana", calories: 105},
        {name: "pinapple", calories: 37},
        {name: "coconut", calories: 159}
    ];

    return (
        <ul>
        {   fruits.map((fruit,index)=>(
            <li key={index}>{fruit.name}</li>
        ))
        }
        </ul>
    );
}
export default List;
*/

//3 slight upgradation
/*
function List() {
    const fruits = [
        {name: "apple", calories: 95},
        {name: "orange", calories: 45},
        {name: "banana", calories: 105},
        {name: "pinapple", calories: 37},
        {name: "coconut", calories: 159}
    ];

    return (
        <ul>
        {   fruits.map((fruit,index)=>(
            <>
            <li key={index}>{fruit.name}  <b>{fruit.calories}</b>
            </li>
            </>
        ))
        }
        </ul>
    );
}
export default List;
1. Invalid HTML structure
You are putting <li> and <b> as siblings inside a React fragment <>...</>.

But in an unordered list <ul>, only <li> elements are allowed as direct children.

Here, <b> is a sibling to <li> inside <ul>, which is invalid HTML and will cause <issues className=""></issues>
*/

/*
function List() {
    const fruits = [
        {name: "apple", calories: 95},
        {name: "orange", calories: 45},
        {name: "banana", calories: 105},
        {name: "pinapple", calories: 37},
        {name: "coconut", calories: 159}
    ];

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); by name of fruits
    fruits.sort((a, b) => a.calories-b.calories);  //sort by calories of fruits
    return (
        <ul>
        {   fruits.map((fruit,index)=>(
            <>
            <li key={index}>{fruit.name}  <b>{fruit.calories}</b>
            </li>
            </>
        ))
        }
        </ul>
    );
}
export default List;
*/

//now working with props in renderLists
function List(props) {
    // Create a copy of the array to avoid mutating the original props
    let fruits = [...props.items]; //it creates a shwallow copy
    
    // Sort by calories (ascending order)
    fruits.sort((a, b) => a.calories - b.calories);
    
    // Alternative: Sort by name
    // fruits.sort((a, b) => a.name.localeCompare(b.name));
    
    return (
        <div>
            <h2>{props.category}</h2>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>
                        {fruit.name} <b>{fruit.calories}</b>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;