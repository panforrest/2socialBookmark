var express = require('express')
var router = express.Router()
var controllers = require('../controllers')
var bcrypt = require('bcryptjs')   //DON'T FORGET TO IMPORT

router.post('/login', function(req, res, next){
	var credentials = req.body

	controllers.profile
	.find({email: credentials.email})
	.then(function(profiles){
        if (profiles.length==0){
        	res.json({
        		confirmation: 'fail',
        		message: 'profile not found'
        	})
        	return
        }
        profile = profiles[0]

        // if (credential.password != profile.password){
        // 	res.json({
        //         confimration: 'login failed',
        //         message: 'incorrect password'
        // 	})
        // 	return
        // }

        var passwordCorrect = bcrypt.compareSync(credentials.password, profile.password)   //SHOULD BE credentials
        if (passwordCorrect == false) {     //(passwordCorrect == null)
        	res.json({
                confimration: 'login failed',
                message: 'incorrect password'
        	})
        	return
        }

        res.json({
            confirmation: 'login success',
            profile: profile
        })

	})
	.catch(function(err){
		res.json({
            confirmation: 'fail',
            message: err
		})
	})

})



module.exports = router