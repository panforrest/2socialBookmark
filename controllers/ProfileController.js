var Profile = require('../models/Profile')
var promise = require('bluebird')

module.exports = {
	find: function(params){
		return new promise(function(resolve, reject){     //(reject, resolve)
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
    	return new promise(function(resolve, reject){    //(reject, resolve)
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
    	return new promise(function(resovle, reject){
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