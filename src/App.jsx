//Conditional rendering -> Allows u to control what gets rendered in ur application
//          based on certain conditions
//          {show , hide  or change components}

import UserGreeting from "./UserGreeting.jsx";
function App() {
  return (
    <>
      <UserGreeting isLoggedin={true} userName={"BroCode"}/>
      <UserGreeting/>
    </>
  );
}

export default App
