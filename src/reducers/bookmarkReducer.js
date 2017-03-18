import constants from '../constants'

var initialState = {
	// bookmarks: []   // list: []
}

export default(state=initialState, action) => {
	let updated = Object.assign({}, state)  // let updatedList = Object.assign([], this.state.bookmark)
	switch(action.type){
		case constants.BOOKMARKS_RECEIVED:
            // update['list'] =  action.bookmarks
            // var updated = updatedList
            console.log('BOOKMARKS_RECEIVED: '+JSON.stringify(action.bookmarks))
		    return updated

	    default:
	        return state	    
	}
}