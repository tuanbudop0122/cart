let initialState = {
  product: [],
  detail: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT":
      state.product = action.payload;
      return { ...state };
    case "FETCH_DETAIL":
      state.detail = action.payload;
      return { ...state };
    default:
      return state;
  }
};
export default reducer;
