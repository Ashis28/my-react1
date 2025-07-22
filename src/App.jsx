//useState ->  rerenders the component when the state value changes

/*useRef() ->  Do not cause rerender when the it's value changes 
  when u want a component to "remember" some information 
  But u don't want that information to trigger rerenders

  1.Accessing /Interacting with dom elements
  2.Handling focus , Animations and Transcitions
  3.Managing timers and intervals
  */

import MyComponent from './MyComponent';

function App() {
  return (
    <>
      <MyComponent/>      
    </>
  );
}

export default App;
