//This are the action which I have to perform
// ACTIONS ARE HERE
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

export const loginactsuccess = () => {
    return {
        type: "LOGGEDINSUCCESS"
    }
}

export const loginactfail = () => {
    return {
        type: "LOGGEDINFAIL"
    }
}

export const logoutact = () => {
    return {
        type: "LOGGINGOUT"
    }
}
