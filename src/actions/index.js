//This are the action which I have to perform
// ACTIONS ARE HERE

//Login Logout Action Begins Here
export const loginact = (result) => {

    // console.log("Actions are getting data",result)
    return {
        type: "LOGGINGIN",
        payload: {
            id: result.id,
            name: result.name,
            email: result.email,
            token: result.token
        }
    }
}

export const logoutact = () => {
    return {
        type: "LOGGINGOUT",
        payload: {
            id: null,
            name: null,
            email: null,
            token: null,
        }
    }
}
//Login Logout Action Ends Here

//Post Action Starts Here

export const posttodash = (result) => {
    console.log("Actions are getting data",result)
    // console.log("Actions are getting title",result.title)
    // console.log("Actions are getting description",result.description)
    // console.log("Actions are getting author",result.author)
    return {
        type: "POSTINGPOST",
        payload: {
            title: result.title,
            category: result.category,
            description: result.description,
            author: result.author,
        }
    }
}


//Post Action Ends Here