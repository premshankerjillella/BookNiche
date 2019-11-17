const INITIAL_STATE = {
  name: '',
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "update_Book":
      return {...state,[action.payload.prop]: action.payload.value}
      case "add_Book":
      return INITIAL_STATE;
    default:
      return state;
  }
};
