var express = require('express')
var router = express.Router()
var controllers =  require('../controllers')

router.get('/:resource', function(req, res, next){   //NOT router.get('/', function(req, res, next){
//NOT router.get('/resource', function(req, res, next){
    var resource = req.params.resource
    var controller = controllers[resource]

    if (controller == null) {
    	res.json({
    		confirmation: 'fail null',
    		message: 'invalid resource'
    	})
        return
    }

    controller.find(req.query)      //find.query(query.body)
    .then(function(entities){       //.catch
        res.json({
        	confirmation: 'success',
        	resource: entities
        })
    })        
    .catch(function(err){           //.return
        res.json({
        	confirmation: 'fail',
        	message: err
        })
    })          



    // if (resource = 'test') {
		// res.json({
		// 	confirmation: 'success',
		// 	resource: resource
		// })
	// }	
})

router.post('/:resource', function(req, res, next){
	var resource = req.params.resource         //var resource = req.query.resource   
	var controller = controllers[resource]

	if (controller == null){
		res.json({
			confirmation: 'fail',
			message: 'invalid resource'
		})
		return
	}

	controller.create(req.body)
	.then(function(result){
		res.json({
			confirmation: 'success',
			result: result
		})
	})
	.catch(function(err){
		res.json({
			confirmation: 'fail',
			message: err
		})
	})
})

router.get('/:resource/:id', function(req, res, next){     //'/:resource/:id'
	var resource = req.params.resource
	var controller = controllers[resource]

	if (controller == null){
		res.json({
			confirmation: 'fail',
			message: 'invalide resource'
		})

		return
	}

    var id = req.params.id    //DON'T FORGET THIS LINE
	controller.findById(id)    //controller.findById(id, req.requery)
	.then(function(result){

	})
	.catch(function(err){
		res.json({
			confirmation: 'fail',
		    message: 'unable to find resource for id: '+id
		})
	})
})

module.exports = router