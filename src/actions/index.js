import constants from '../constants'

export default {    //module.exports = {

    profilesReceived: (profiles) => {      //var profilesReceivde = function(type, profiles){
    	return {
    		type: constants.PROFILES_RECEIVED,         //type: contstants.PROFILES_RECEIVED
    		profiles: profiles 

    	}
    }
}

