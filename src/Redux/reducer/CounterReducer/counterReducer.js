const initialState = {
    count: 500,
    
  }
  
export const counterReducer = (state = initialState, { type, payload }) => {
    switch (type) {
  
      case "INCREMENT":
        return {...state, count: state.count + 1 }
      case "DECREMENT":
        return {...state, count: state.count - 1 }
     
      default:
        return state
    }
  }