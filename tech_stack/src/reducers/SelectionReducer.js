export default (state = null, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
}
