import constants from '../constants'

export default {    //module.exports = {

    profilesReceived: (profiles) => {      //var profilesReceivde = function(type, profiles){
    	return {
    		type: constants.PROFILES_RECEIVED,         //type: contstants.PROFILES_RECEIVED
    		profiles: profiles 

    	}
    },

    profileCreated: (profile) => {
        return {
        	type: constants.PROFILE_CREATED,    //action: constants.PROFILE_CREATED,     
        	profile: profile
        }    	
    },

    currentUserReceived: (profile) => {
        return {
        	type: constants.CURRENT_USER_RECEIVED,
        	profile: profile
        }
    },

    bookmarksReceived: (bookmarks) => {
        return {
            type: constants.BOOKMARKS_RECEIVED,
            bookmarks: bookmarks
        }
    },

    profileSelected: (profile) => {
        return {
            type: constants.PROFILE_SELECTED,
            profile: profile
        }
    }
}

