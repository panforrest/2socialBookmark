var express = require('express')
var router = express.Router()

router.get('/:resource', function(req, res, next){   //NOT router.get('/', function(req, res, next){
    var resource = req.params.resource

    if (resource = 'test') {
		res.json({
			confirmation: 'success',
			resource: resource
		})
	}	
})

module.exports = router