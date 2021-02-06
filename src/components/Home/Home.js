import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getTaskData } from '../../Services/TaskService'
import CreateTask from '../CreateTask/CreateTask'
import NavBar from '../NavBar/NavBar'
import TaskList from '../TaskList/TaskList'




const Home = () => {
    // const [tasks, setTasks] = useState([]);
    const allTaskDispatch = useDispatch();
    useEffect(() => {
       initilizeTasks();
    }, [])
    const initilizeTasks = async() => {
       let res=await getTaskData();
       allTaskDispatch({
           type:"ALL_TASK",
           payload:res
       })
        // setTasks(res);
        console.log(res);
    }
    return (
        <div >
            <NavBar></NavBar>
            <div className="container">
                <CreateTask ></CreateTask>
                <TaskList ></TaskList>
            </div>

        </div>
    )
}

export default Home
