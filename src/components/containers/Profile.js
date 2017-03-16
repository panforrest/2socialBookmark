import React, { Component } from 'react'
import superagent from 'superagent'

class Profile extends Component {
	componentDidMount(){
        // console.log('componentDidMount: ')
		superagent
		.get('/api/profile')
		.query(null)
		.set('Accept', 'application/json')
		.end((err, response) => {
			if (err) {
				const message = err.message || err
				alert(message)
				return
			}
            console.log(JSON.stringify(response.body))    
		})


	}

	render(){


		return(
			<div>
			    This is Profile container
			    <list />
			</div>
		)
	}
}

export default Profile