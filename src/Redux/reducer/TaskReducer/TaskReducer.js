const initialState = {
    taskList: []
  }
  
export const taskReducer = (state = initialState, { type, payload }) => {
    switch (type) {
  

      case "ADD_NEW_TASK":
        return {
          ...state,
          taskList:[...state.taskList,payload]
        }
      case "ALL_TASK":
        return {
          ...state,
          taskList:payload
        }
  
      default:
        return state
    }
  }