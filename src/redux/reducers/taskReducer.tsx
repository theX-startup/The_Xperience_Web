const initialState = {
  tasks: [],
  task: {},
  loading: false,
  error: null,
};

const taskReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "tasks":
      return {
        ...state,
        tasks: action.payload,
      };
    case "loading":
      return {
        ...state,
        loading: action.payload,
      };
    case "error":
      return {
        ...state,
        error: action.payload,
      };
    case "GET_TASK":
      return {
        ...state,
        task: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
