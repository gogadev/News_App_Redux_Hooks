const defaultState = {
  customNews: [],
};

const customSearch = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_CUSTOM_NEWS":
      return {
        ...state,
        customNews: action.payload,
      };
    default:
      return state;
  }
};


export default customSearch;
