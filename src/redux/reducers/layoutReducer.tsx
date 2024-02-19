const initialState = {
  selectedId: "",
};

export const layoutReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_SELECTED_ID":
      return {
        ...state,
        selectedId: action.payload,
      };
    default:
      return state;
  }
};
