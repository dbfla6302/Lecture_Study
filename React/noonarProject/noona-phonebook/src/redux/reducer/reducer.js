const initialState = {
    contactList: [],
    keyword: "",
};

function reducer(state=initialState, action){
    const {type, payload} = action;
    switch (type) {
        case "ADD_CONTACT":
            state.contactList.push({
                name: payload.name,
                phoneNumber: payload.phoneNumber,
            });
            break;
            case "SEARCH_BY_USERNAME":
                state.keyword = payload.keyword;
                break;
        default:
            break;
    }
    
    return {...state};
}

export default reducer;