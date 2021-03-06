import constants from '../constants'

var initialState = {
	// bookmarks: []   // list: []
	// list: []
}

export default(state=initialState, action) => {
	let updated = Object.assign({}, state)  // let updatedList = Object.assign([], this.state.bookmark)
	switch(action.type){
		case constants.BOOKMARKS_RECEIVED:
            // update['list'] =  action.bookmarks
            // var updated = updatedList
                  console.log('BOOKMARKS_RECEIVED: '+JSON.stringify(action.bookmarks))
                  const params = action.params
                  const keys = Object.keys(params)
                  keys.forEach((key, i)=>{
                      let value = params[key]
                      updated[value] = action.bookmarks
                      })
                      // updated['list'] = action.bookmarks
      		return updated

            case constants.BOOKMARK_CREATED:   // case constants.bookmarkCreated:
                  // let updatedList = Object.assign([], updated.list)
                  let list = (updated[action.bookmark.profile]) ? (updated[action.bookmark.profile]) : []
                  list.push(action.bookmark)
                  updated[action.bookmark.profile] = list
                  return updated  

	      default:
	            return state	    
	}
}