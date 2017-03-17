//         var list = profile.state.map(profile, i){
//               	<a key=i> firstName </a> 
import React, { Component } from 'react'
// import superagent from 'superagent'
import { APIManager } from '../../utils'

class Profiles extends Component {
    constructor(){
    	super()
    	this.state = {        // var state = {
    		profiles: []      // profiles = {}
    	}
    }

	componentDidMount(){
		APIManager.get('/api/profile', null, (err, response) => {
			if (err) {
				alert(err)
				return
			}
			console.log(JSON.stringify(response))

			const results = response.results    //var result = response.body
			this.setState({                     // resetState({
				profiles: results
			})
		})
        // console.log('componentDidMount: ')
		// superagent
		// .get('/api/profile')
		// .query(null)
		// .set('Accept', 'application/json')
		// .end((err, response) => {
		// 	if (err) {
		// 		const message = err.message || err
		// 		alert(message)
		// 		return
		// 	}
  //           console.log(JSON.stringify(response.body))    
		// })


	}

	render(){
        const list = this.state.profiles.map((profile, i) => {
        	return (
        	    <li key={profile.id}> { profile.firstName } </li>
            )
        })

		return(
			<div>
			    This is Profile container
			    <ol>
			        {list}
			    </ol>
			</div>
		)
	}
}

export default Profiles