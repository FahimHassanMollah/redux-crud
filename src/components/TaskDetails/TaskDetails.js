import React from 'react'

const TaskDetails = (props) => {
    const {Title,Priority}=props.singleTask;
    console.log(props.singleTask,"asjdfjasdfkj");
    return (

        <tr>
            <td>{props.index+1}</td>
            <td>{Title}</td>
            <td>{Priority}</td>
            
        </tr>

    )
}

export default TaskDetails
