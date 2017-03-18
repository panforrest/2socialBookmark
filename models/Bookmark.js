var mongoose = require('mongoose')

var BookmarkSchema = new mongoose.Schema({
	profile:{type:String,default:''},
	url:{type:String,default:''},
	description:{type:String,default:''},
	image:{type:String,default:''},
	timestamp:{type:String,default:Date.now()}
})

BookmarkSchema.methods.summary = function(){
	var summary = {
		id: this._id.toString(),
		profile: this.profile,
		url: this.url,
        description: this.description,
        image: this.image,
        timestamp: this.timestamp
	}
	return summary
}

module.exports = mongoose.model('BookmarkSchema', BookmarkSchema)   //  ('ProfileSchema': ProfileSchema)