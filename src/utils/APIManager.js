import superagent from 'superagent'

export default {          //REPEATING MISTAKE, SHOULD BE export default NOT module.exports =
    get: (endpoint, params, callback) => {

		superagent
		.get(endpoint)
		.query(params)       //.query(null)      
		.set('Accept', 'application/json')     //.set('Application', 'application/json')
		.end((err, response) => {
			if (err) {
	            // const msg = err || err.message
	            callback(err, null)     // SHOULD NOT BE alert(msg)
	            return
			}
            callback(null, response.body)
		})

    },

    post: (endpoint, params, callback) => {
    	superagent
    	.post(endpoint)      //get(endpoint)
    	.send(params)       //.query(params)
    	.set('Accept', 'application/json')
    	.end((err, response) => {
            if (err) {
            	callback(err, null)
            	return
            }
            console.log('APIManager: '+JSON.stringify(response.body))
            const confirmation = response.body.confirmation
            if (confirmation !='success'){
                callback({message: response.body.message}, null)
                return
            }
            callback(null, response.body)       //IT IS CRITICAL TO HAVE response.body, NOT response IN HERE
    	})
    }


}