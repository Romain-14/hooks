const initialState = { alias: "", age: "", isAdmin: false };

function userReducer(state, action) {
    switch (action.type) {
        case "MODIFY":
            return {
                ...state, [action.payload.name]: action.payload.value,
            };
        case "MODIFY_ROLE":
            return {
                ...state, [action.payload.name]: action.payload.value === "yes" ? true : false,
            };
        case "DELETE": {
            console.log(initialState)
            return initialState;
        }
        default:
            return { ...state };
    }
}

export { initialState, userReducer };