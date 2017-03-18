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
// import { store } from '../../store'   //I DON'T NEED THIS LINE HERE
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
			// if (err) {       NOT SURE WHY SHOULD REMOVE AT THIS PORINT if (err) {}
			// 	alert(err)
			// 	return
			// }
			// console.log(JSON.stringify(response))

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
        const list = this.props.profiles.map((profile, i) => {
            let name = null
            if (this.props.selected  == null)
            	name = <span> { profile.firstName} </span>
            else if (this.props.selected.id == profile.id)
            	name = <strong style={{color:'red'}}> { profile.firstName } </strong>
            else
            	name = <span> { profile.firstName } </span>

        	return (
        	    <li key={profile.id}> { name } </li>
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
        profiles: state.profile.list,
        selected: state.profile.selected
	}
}

const dispatchToProps = (dispatch) => {
	return {
        profilesReceived: (profiles) => dispatch(actions.profilesReceived(profiles))       
	}
}

export default connect(stateToProps, dispatchToProps)(Profiles)