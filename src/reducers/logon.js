// this is reducer
// const lastid = 1;
const initialState = {
    id: "",
    name: "",
    email: "",
    token: "",
};
const logintodash = (state = initialState,action) => {
    switch(action.type){
        case "LOGGINGIN" :
            // console.log("this is triggering")
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                token: action.payload.token
                
                
            }
        case "LOGGEDINFAIL" : return state;
        case "LOGGINGOUT" :
            return state == null
        default : return state;
    }

}
export default logintodash;