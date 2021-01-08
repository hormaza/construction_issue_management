const initialState = {
  issueList: []
}

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADDISSUE":
      return { issueList: [...state.issueList, action.payload] };
    default:
      return state;
  }
}