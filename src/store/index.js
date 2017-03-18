import { profileReducer, accountReducer } from '../reducers'
import { createStore, applyMiddleware, combineReducers } from 'redux'   //from 'react-redux'
import thunk from 'redux-thunk'  //import { thunk } from 'redux-thunk'   

// storeConfig()
// creatStore
// var store = {
//     profileReducer
// }
// {applyMiddleware, thunk} 
// export default Store
var store;
export default {
    configureStore: () => {
        const reducers = combineReducers({
            profile: profileReducer,     //profileReducer
            account: accountReducer
        })

        store = createStore(
            reducers,
            applyMiddleware(thunk)
        ) 

        return store
    },

    currentStore: () => {
    	return store
    }
}