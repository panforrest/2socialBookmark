var Profile = require('../models/Profile')
var Promise = require('bluebird')

module.exports = {
	find: function(params){
		return new Promise(function(resolve, reject){     //(reject, resolve)
			Profile.find(params, function(err, profiles){
				if (err){
					reject(err)
					return
				}

				resolve(profiles)

			})
		})
	},

    create: function(params){
    	return new Promise(function(resolve, reject){    //(reject, resolve)
    		Profile.create(params, function(err, profile){
    			if (err){
    				reject(err)
    				return
    			}

    			resolve(profile)
    		})
    	})
    },

    findById: function(id){
    	return new Promise(function(resovle, reject){
    		Profile.findById(id, function(err, profile){
    			if (err) {
	    			reject(err)
	    			return
	    		}
	    		resolve(profile)	
    		})
    	})
    }

















}