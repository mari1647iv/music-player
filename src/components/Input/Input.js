import React from "react";
import "./Input.css";
import {Search, Calendar} from "react-feather";

function Input(props) {
    const {type} = props;
    let icon;
    let placeholder="Type Some Text";

    if (type==="music") { icon = <Search size={36}/>; placeholder = "Search Music"; }
    else if(type==="events") { icon= <Search size={36}/>; placeholder = "Search Events"; }
         else if (type==="date") icon = <Calendar size={36}/>;

    return (
        <div className="input-container">
            <i className="input-icon">{icon}</i>
            <input type={type==="date"?"date":"text"} className="input-box" placeholder={placeholder}/>
        </div>

    );
}

export default Input;