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

    }
}