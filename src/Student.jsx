//props is going to be an javascript object

//default props - > default value for props incase they are not passed from the parent component
//                  e.g. name:"Guest"

import PropTypes from 'prop-types'

function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name} </p>
            <p>Age : {props.age}</p>
            <p>isStudent: {props.isStudent?"yes":"false"}</p>
        </div>
    );
}

Student.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
};
Student.defaultProps = {
    name:"Guest",
    age:0,
    isStudent:false,
}
export default Student;