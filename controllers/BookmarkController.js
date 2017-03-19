var Promise = require('bluebird')
var Bookmark = require('../models/Bookmark')
var superagent = require('superagent')
var utils = require('../utils')

module.exports = {

	find: function(params, isRaw){                                  //find: function(err, bookmark){
	    return new Promise(function(resolve, reject){        //return new promise
		    Bookmark.find(params, function(err, bookmarks){            
			    if (err) {
			    	reject(err)
			    	return         //DON'T FORGET return HERE
	            }

	            if (isRaw){
	            	resolve(bookmarks)
	            	return
	            }

	            var summaries = []
	            bookmarks.forEach(function(bookmark){   // for each(profile)in Profiles{
                    summaries.push(bookmark.summary())   // bookmarks.push(bookmark.summary())
	            })     
	            	
			    resolve(summaries)   //resolve(bookmarks.summary())
		    })
		})
	},

	create: function(params){
		return new Promise(function(resolve, reject){
            superagent
            .get(params.url)
            .query(null)            
            .set('Accept', 'text/html')
            .end(function(err, response){       //WHY SHOULD (err, bookmark) BE WRONG?
            	if (err){
            		// res.json({
	            	// 	confirmation: 'fail',
	            	// 	message: err
            		// })
            		reject(err)
            		return
            	}
            	// IT IS VERY WRONG TO HAVE IT HERE FOR return

            	html = response.text
                var metaData = utils.Scraper.scrape(html, ['og:title', 'og:description', 'og:image','og:url'])

                var keys = Object.keys(metaData)
                keys.forEach(function(key, i){
                    params[key] = metaData[key]
                })

				Bookmark.create(params, function(err, bookmark){    //Bookmark.create(metaData, function(err, bookmark){
	                if (err) {
	                	reject(err)
	                	return
	                }
	                resolve(bookmark.summary())
				})

            })



		})
	},

	findById: function(id){
		return new Promise(function(resolve, reject){
			Bookmark.findById(id, function(err, bookmark){
                if (err){
                	reject(err)
                	return
                }
                resolve(bookmark)
			})
		})
	}











	// findById:



}