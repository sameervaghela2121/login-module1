const pd = {
    title: "",
    description: "",
    category: "",
    author: ""
};


const postreducerfun = (state = pd,action) => {
    switch(action.type){
        case "POSTINGPOST":
            console.log("This is triggering in post reducer function");
            return {
                ...state,
                title: action.payload.title,
                category: action.payload.category,
                description: action.payload.description,
                author: action.payload.author
                
                
            }
        
        default : return state;
    }

}

export default postreducerfun;