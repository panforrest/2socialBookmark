var promise = require('bluebird')
var Bookmark = require('../models/Bookmark')

module.exports = {

	find: function(params){                                  //find: function(err, bookmark){
	    return new promise(function(resolve, reject){        //return new promise
		    Bookmark.find(params, function(err, bookmarks){            
			    if (err) {
			    	reject(err)
			    	return         //DON'T FORGET return HERE
	            }

			    resolve(bookmarks)
		    })
		})
	},

	create: function(params){
		return new promise(function(resolve, reject){
			Bookmark.create(params, function(err, bookmark){
                if (err) {
                	reject(err)
                	return
                }
                resolve(bookmark)
			})
		})
	},

	findById: function(id){
		return new promise(function(resolve, reject){
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