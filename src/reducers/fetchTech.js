const defaultState = {
  techNews: [],
};

const fetchTech = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_TECH":
      return {
        ...state,
        techNews: action.payload,
      };
    default:
      return state;
  }
};

export default fetchTech;
