const savePassword = (state = {}, action) => {
    switch(action.type){
        case "SAVE_PASSWORD":
            return {
                ...state,
                password: action.password
            };
        default:
            return state;
    }
};

export default savePassword;