var Promise = require('bluebird')
var jwt = require('jsonwebtoken')   //FORGOT TO DO

module.exports = {
    sign: function(obj, secret){
    	return jwt.sign(obj, secret)
    },

	verify: function(token, secret){
		return new Promise(function(resolve, reject){
			jwt.verify(token, secret, function(err, decode){
				if (err) {
					reject(err)
					return
				}

				resolve(decode)
			})

		})
	}
}