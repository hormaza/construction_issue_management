const initialState = {
  issueList: []
}

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADDISSUE":
      return { issueList: [...state.issueList, action.payload] };
    case "STARREDISSUE":
      const starredUniqueID = action.payload.uniqueID;
      const newList = state.issueList.map(issue => {
        if(issue.uniqueID === starredUniqueID) {
          issue.starred = !issue.starred
        }
        return issue
      });
      return { issueList: newList };
    default:
      return state;
  }
}