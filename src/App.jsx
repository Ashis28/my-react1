
//props   - readonly properties that are shared between jsx
//    A parent component can send data to child component
//  <component key = value/>

// propstypes - it is a mechanism that ensures that passed value is of correct data type
//              age:{PropTypes.number}

import Student from './Student.jsx'

function App() {
  return (
    <>
      <Student name="Spongebob" age={19} isStudent = {false}/>
      <Student name="patrick" age={22} isStudent = {true}/>
      <Student name="squidword" age={19} isStudent = {false}/>
      <Student name="sandy" age={37} isStudent = {true}/>
      <Student name="abc"/>

    </>
  );
}

export default App
