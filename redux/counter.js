const initialState = {
  first: 1,
  second: 0,
  third: 200,
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case "first":
      return { ...state, ["first"]: state.first === 0 ? 0 : state.first - 1 };
    case "third":
      return { ...state, ["third"]: state.third === 0 ? 0 : state.third - 1 };
    default:
      return state;
  }
}
