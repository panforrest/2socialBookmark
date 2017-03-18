import constants from '../constants'

var initialState = {
	list: []  //WHY ALWAYS FORGET THIS LINE
}

// export default {
// 	var something = (State=initialState, action) => {
export default(state=initialState, action) => {
    let updated = Object.assign({}, state)    //= Object.assign({}, action.profiles), SHOULD BEFORE swithc(){}
    switch(action.type){

        case constants.PROFILES_RECEIVED:
            // console.log('PROFILES_RECEIVED: '+JSON.stringify(action.profiles))
            updated ['list'] = action.profiles 
            if (action.profiles.length>0)
                updated['selected'] = action.profiles[0] // profile.selected
            return updated     //return state

        case constants.PROFILE_CREATED:
            // console.log('PROFILES_RECEIVED: '+JSON.stringify(action.profiles))
            let updatedList = Object.assign([], updated.list)
            updatedList.push(action.profile)
            updated ['list'] = updatedList
            return updated     //return state

        default:
            return state     //return 
        
    }
}