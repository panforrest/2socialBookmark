import constants from '../constants'

var initialState = {

	currentUser: null     //account:{}

}

export default (state=initialState, action) => {
	let updated = Object.assign({}, state)
    switch(action.type){
    	case constants.CURRENT_USER_RECEIVED:
        updated['currentUser'] = action.profile      //updated['profile'] = action.profile
    	    return updated          //return 

        case constants.PROFILE_CREATED:
            updated['currentUser'] = action.profile            
            return updated

    	default:    //case default:
    	    return state    	
    }
}