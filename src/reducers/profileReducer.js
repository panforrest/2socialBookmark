import constants from '../constants'

var initialState = {
	list: []  //WHY ALWAYS FORGET THIS LINE
}

// export default {
// 	var something = (State=initialState, action) => {
export default(state=initialState, action) => {
    switch(action.type){

        case constants.PROFILES_RECEIVED:
            console.log('PROFILES_RECEIVED: '+JSON.stringify(action.profiles))
            return state

        default:
            return state     //return 
        
    }
}