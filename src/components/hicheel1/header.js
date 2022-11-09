import React from "react";

function Header(props) {
    return(
        <div>
            {props.title ? props.title : 'baihguieeeeeeee'}
            {props.name}
            {props.view}
        </div>
    )
} export default Header