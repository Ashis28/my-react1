/* useContext = A react hook that allows to share values between multiple levels of components
  without passing props through each level  */

  /*
    provider component  =  
    1.import createContext from 'react'
    2.export const MyContext = createContext()
    3.<MyContext.provider value = {value}>
            <Child/>
      <MyContext.provider/>
  */

  /*Consumer Component = 
  1.import useContext from 'react'
    import myContext from './componentA'
  2.const value = useContext(myContext)
   */
import ComponentA from "./componentA.jsx";

function App() {
  return (
    <>
      <ComponentA/>
    </>
  );
}

export default App;
