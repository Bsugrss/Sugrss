import React, {useState} from "react";

function ExpenceItem(props) {
    const [title, setTitle] = useState(props.title)
    const handLEr = (e) => {
        setTitle(alert(props.title))
    }
    return(
        <div>
            <input onChange={handLEr} value={(e) => e.target.value} />
        </div>
    )
} export default ExpenceItem