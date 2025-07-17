
/*  React hook - A special function that allows functional components
                to use react features without writing class components (React v16.8)
                useState, useEffect, useContext, useReducer, useCallback and more
    userState () - A react hook that allows you the creation of a stateful variable
                And a setter function to update its value in the virtual dom.
                [name,setName]


*/

import ToDoList from './ToDoList.jsx';

function App() {
  return (
    <ToDoList/>
  );
}

export default App
