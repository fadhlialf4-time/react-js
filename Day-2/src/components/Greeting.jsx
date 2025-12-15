import React from "react";
import GuestGreeting from "./GuestGreeting";
import UserGreeting from "./UserGreeting";


function Greeting(props) {
    const IsLoggedIn = props.IsLoggedIn;
    
    if (IsLoggedIn) {
        return <UserGreeting/>
    } else {
        return <GuestGreeting/>
    }
}

export default Greeting;