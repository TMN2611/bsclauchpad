const initState = {
  isDarkMode: false,
  projects: [],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'setDarkMode':
      return {
        ...state,
        isDarkMode: action.payload,
      };
    case 'setProjects':
      return {
        ...state,
        projects: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
