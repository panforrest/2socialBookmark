var Profile = require('../models/Profile')
var Promise = require('bluebird')
var bcrypt = require('bcryptjs')

module.exports = {
	find: function(params){
		return new Promise(function(resolve, reject){     //(reject, resolve)
			Profile.find(params, function(err, profiles){
				if (err){
					reject(err)
					return
				}

                var summary = []
                profiles.forEach(function(profile){
                    summaries.push(profile.summary())
                })

				resolve(profiles)

			})
		})
	},

    create: function(params){
    	return new Promise(function(resolve, reject){    //(reject, resolve)
            var password = params.password
            params['password'] = bcrypt.hashSync(password, 10)    //bcrypt.hashsynch(password)

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
	    		resolve(profile.summary())	
    		})
    	})
    }

















}