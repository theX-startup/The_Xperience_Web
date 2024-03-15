const initailState = {
  values: {},
  categorys: [],
};

export const createInternshipReducer = (state = initailState, action: any) => {
  switch (action.type) {
    case "CREATE_INTERNSHIP":
      return {
        ...state,
        values: action.payload,
      };
    case "categories":
      return {
        ...state,
        categorys: action.payload,
      };
    default:
      return state;
  }
};
