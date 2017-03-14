var mongoose = require('mongoose')

var BookmarkSchema = new mongoose.Schema({
	profile:{type:String,default:''},
	url:{type:String,default:''},
	description:{type:String,default:''},
	url:{type:String,default:''},
	timestamp:{type:String,default:Date.now()}
})

module.exports = mongoose.model('BookmarkSchema', BookmarkSchema)   //  ('ProfileSchema': ProfileSchema)