// const propsToState = (profiles) => {
// 	return {
//         profilesReceived:
// 	}
// }

// const dispatchToState = (dispatch) => {
// 	return {
//         action
// 	}
// }

// export default connect(propsToState, dispatchToState)(Profiles)
//         var list = profile.state.map(profile, i){
//               	<a key=i> firstName </a> 
import React, { Component } from 'react'
// import superagent from 'superagent'
import { APIManager } from '../../utils'
import actions from '../../actions'
import { store } from '../../store'   //I DON'T NEED THIS LINE HERE
import { connect } from 'react-redux'   //WHY I ALWAYS FORGOT THIS LINE

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
			// this.setState({                     // resetState({
			// 	profiles: results
			// })
			this.props.profilesReceived(results)   //actions.profilesReceived(profiles)
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

const stateToProps = (state) => {
	return {
        profile: state.profile.list
	}
}

const dispatchToProps = (dispatch) => {
	return {
        profilesReceived: (profiles) => dispatch(actions.profilesReceived(profiles))
	}
}

export default connect(stateToProps, dispatchToProps)(Profiles)