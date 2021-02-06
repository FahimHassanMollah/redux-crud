import axios from "axios";

export const getTaskData = async () => {
    let data=[];
    await axios.get('http://todo-app37.herokuapp.com/loadTodo').
    then(res=>{
        console.log(res.data);
        data= res.data;
    })

    return data;

}