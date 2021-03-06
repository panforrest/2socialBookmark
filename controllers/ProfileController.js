var Profile = require('../models/Profile')
var Promise = require('bluebird')
var bcrypt = require('bcryptjs')
// var utils = require('../utils')

module.exports = {
	find: function(params, isRaw){
		return new Promise(function(resolve, reject){     //(reject, resolve)
			Profile.find(params, function(err, profiles){
				if (err){
					reject(err)
					return
				}
                //THIS IS NEW FOR REACT
                if (isRaw){
                    resolve(profiles)
                    return
                }

                var summaries = []   //var summary = []
                profiles.forEach(function(profile){
                    summaries.push(profile.summary())
                })

				resolve(summaries)     //resolve(profiles)

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

                // var token = utils.JWT.sign({id: profile._id}, process.env.TOKEN_SECRET)
                // req.session.token = token

    			resolve(profile.summary())
    		})
    	})
    },

    findById: function(id){
    	return new Promise(function(resolve, reject){
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