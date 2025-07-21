
/* React hook - A special function that allows functional components
              to use react features without writing class components (React v16.8)
              useState, useEffect, useContext, useReducer, useCallback and more

useEffect () - A react hook that tells react to do some code when (pick one) :
The component rerenders
The componenet mounts
The state of value

    useEffect(function,[dependencies])

1.  useEffect(()={})   run after every re-render
2.  useEffect(()=>{},[])  run only on mount
3.  useEffect(()=>{},[value])  run on mount + value changes
    #uses
    1.DomManipulation
    2.EventListener
    3.Subscription
    4.Fetching data from API
    5.clean up when component unmounts


*/
import MyComponent from './MyComponent.jsx'

function App() {
  return (
    <MyComponent/>
  );
}

export default App
