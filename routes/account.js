var express = require('express')
var router = express.Router()
var controllers = require('../controllers')
var bcrypt = require('bcryptjs')   //DON'T FORGET TO IMPORT
var utils = require('../utils')

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

        var token = utils.JWT.sign({id: profile._id}, process.env.TOKEN_SECRET)
        req.session.token = token

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

router.get('/:action', function(req, res, next){
    var action = req.params.action

    if (action == 'logout') {
        req.session.token = null
        res.json({
            confirmation: 'success',
            message: 'user logged out'
        })
        return
    }

    if (action == 'currentuser') {
        if (req.session == null) {
            res.json({
                confirmation: 'success',
                message: 'user not logged in'
            })
            return
        }

        if (req.session.token == null) {
            res.json({
                confirmation: 'success',
                message: 'user not logged in'
            })
            return
        }

        var token = req.session.token
        utils.JWT.verify(token, process.env.TOKEN_SECRET)

        .then(function(decode){
            // res.json({
            //     confirmation: 'success',
            //     token: decode,
            //     profile: profile
            // })
            return controllers.profile.findById(decode.id)
        })
        .then(function(profile){
            res.json({
                confirmation: 'success',
                profile: profile
            })
        })
        .catch(function(err){
            res.json({
                confirmation: 'fail',
                token: 'invalid token'
            })
        })
        
    }
})

router.post('/register', function(req, res, next){
    controllers.profile   //var controller = controllers['profile']
    .create(req.body)             //controller.create(req.body)
    .then(function(profile){      //.then(function(result){

        var token = utils.JWT.sign({id: profile.id}, process.env.TOKEN_SECRET)  //({id: profile._id}, process.env.TOKEN_SECRET)
        req.session.token = token

        res.json({
            confirmation: 'success',
            profile: profile,   //CHANGE NOW
            token: token    //ADDED NOW
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