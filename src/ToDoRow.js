
import React from "react"
import Checkbox from '@mui/material/Checkbox';

const ToDoRow = (props) => {
    const { title, date, isDone, handleChange } = props;
    return (
        <div className="ToDoRow">
            <div>
                <p className='title'> {title}</p>
                <p className='date'>{date.toDateString()}</p>
            </div>
            <Checkbox
                checked={isDone}
                onChange={handleChange}
            />
        </div>
    )
}


export default ToDoRow 