
/*
function UserGreeting(props){
    
    if(props.isLoggedin){
        return <h2>Hello {props.userName}</h2>
    }
    return <h2>please log in to continue</h2>
}
        */

import PropTypes from 'prop-types'
function UserGreeting(props){
    
    let welcomeMsg = <h2 className="welcome-msg" >Welcome {props.userName}</h2>
    let errorMst =   <h2 className="login-prompt">Please log in first to continue</h2>
    return (props.isLoggedin? welcomeMsg:errorMst
    );
}


UserGreeting.propTypes={
    isLoggedin : PropTypes.bool,
    userName : PropTypes.string,
}

UserGreeting.defaultProps={
    isLoggedin : false,
    userName : "default",
}
export default UserGreeting;