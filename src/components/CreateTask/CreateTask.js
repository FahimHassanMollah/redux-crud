import axios from 'axios';
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { getTaskData } from '../../Services/TaskService';

const CreateTask = (props) => {
    const [addTaskTogoller, setAddTaskTogoller] = useState(false);
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('medium');
    const getTaskDispatch = useDispatch();
    const addTaskTogollerBtn = () => {
        setAddTaskTogoller(!addTaskTogoller);
    }
    const formsubmit = async (e) => {
        e.preventDefault();
        const taskItem = {
            Title: title,
            Priority: priority,
        };
        console.log(taskItem);
        //   addTaskDispatch({
        //       type:"ADD_NEW_TASK",
        //       payload:taskItem
        //   })
        let res = await storeTaskData(taskItem);
        if (res) {
            let data = await getTaskData();
            getTaskDispatch({
                type: "ALL_TASK",
                payload: data
            })
        }
        console.log(res);

    }
    const storeTaskData = async (taskItem) => {
        let response = false;
        await axios.post('http://todo-app37.herokuapp.com/addTodo', taskItem).
            then(res => {

                response = res;
            })
        return response;
    }
    return (
        <div className="pt-3">
            {
                addTaskTogoller &&
                <Form onSubmit={(e) => formsubmit(e)}>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            //   value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter title"
                        />
                    </Form.Group>


                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Priority</Form.Label>
                        <Form.Control
                            as="select"
                            //   value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                        >
                            <option value="">Select task prority</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
              </Button>
                </Form>

            }
            <div className="text-right">
                <Button className="text-right" onClick={addTaskTogollerBtn}>Add Task </Button>
            </div>
        </div>
    )
}

export default CreateTask
