import { combineReducers } from "redux";
import { counterReducer } from "./CounterReducer/counterReducer";
import { taskReducer } from "./TaskReducer/TaskReducer";

const rootReducer = combineReducers({
    CounterReducer: counterReducer,
    TaskReducer: taskReducer
});


export default rootReducer;