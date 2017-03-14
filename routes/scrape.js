var express = require('express')
var router = express.Router() //express.router()
var cheerio = require('cheerio')
var superagent = require('superagent')

router.get('/', function(req, res, next){
	var url = req.query.url     //REMEMBER HERE IS NOT req.params.url
	if (url == null) {
		res.json({
			confirmation: 'fail',
			message: err
		})
		return
	}

	superagent
	.get(url)             //.get()
	.query(null)
	.set('Accept', 'text/html')       //.set('Application, html/json')
	.end(function(err, response){
        if (err){
        	res.json({
        		confirmation: 'fail',
        		message: err
        	})
        	return
        } 

        var html = response.text
        var metaData = {}
        var props = ['og:title', 'og:description', 'og:image']

        $ = cheerio.load(html)
        $('meta').each(function(i, meta){
            if (meta.attribs != null){
            	var attribs = meta.attribs
            	if (attribs.property != null){
            		var prop = attribs.property
            		if (props.indexOf(prop) != -1){
            			var key = prop.replace('og:','')
            			metaData[key] = attribs.content
            		}
            	}
            }
        })
        metaData['url'] = url
        res.json({
        	confirmation: 'success',
        	tags: metaData
        })

	})

})

module.exports = router    //DON'T FORGET THIS LINE


