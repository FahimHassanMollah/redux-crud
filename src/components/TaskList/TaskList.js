import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import TaskDetails from '../TaskDetails/TaskDetails';

const TaskList = (props) => {
    const count = useSelector(state => state.CounterReducer.count);
    const taskList = useSelector(state => state.TaskReducer.taskList);
    console.log(taskList,"got tasklist");
    const CounterDispatch = useDispatch();
    const increment = () => {
        CounterDispatch({
            type:"INCREMENT",
            payload:1
        })
    }
    const decrement = () => {
        CounterDispatch({
            type:"DECREMENT",
            payload:1
        })
    }

    return (
        <div>
               <Button onClick={increment}>+ </Button>  <span>{count}</span> <Button onClick={decrement}>- </Button> 
                <h1>My Task</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Titel</th>
                            <th>Priority</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                          taskList.length>0 && taskList.map((singleTask,index)=><TaskDetails singleTask={singleTask} index={index}></TaskDetails>)
                        }
                       
                    </tbody>
                </Table>
           

        </div>
    )
}

export default TaskList
