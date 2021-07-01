// import logon from "./logon";

// import { combineReducers } from "redux";

// const rootReducer = combineReducers({
//     logon
// })

// export default rootReducer; 
// you are going correct...follow this dude ill come afternoon
// Okayy

//This is the main reducer in which all reducers are held or combined

import logintodash from "./logon";
import postreducerfun from "./postReducer";

import { combineReducers } from "redux";

 const rootReducer = combineReducers({
     logintodash,
     postreducerfun

 })

 export default rootReducer;