var cheerio = require('cheerio')	

module.exports = {

    scrape: function(html, props){
     //    superagent
    	// .get(url)             //.get()
    	// .query(null)
    	// .set('Accept', 'text/html')       //.set('Application, html/json')
    	// .end(function(err, response){
     //        if (err){
     //        	res.json({
     //        		confirmation: 'fail',
     //        		message: err
     //        	})
     //        	return
     //        } 

     //        var html = response.text
            var metaData = {}
            // var props = ['og:title', 'og:description', 'og:image']

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
            return metaData
            // metaData['url'] = url
            // res.json({
            // 	confirmation: 'success',
            // 	tags: metaData
            // })

    	// })
    }
}    