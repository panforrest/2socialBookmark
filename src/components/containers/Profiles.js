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

	selectProfile(profile, event){
		event.preventDefault()
		// console.log('selectProfile: '+JSON.stringify(profile))   //(this.state.selected))
		this.props.profileSelected(profile)   //(JSON.stringify(profile))
	}

	render(){
        const list = this.props.profiles.map((profile, i) => {
            let name = null
            if (this.props.selected  == null)
            	name = <a onClick={this.selectProfile.bind(this, profile)}><span> { profile.firstName} </span></a>
            else if (this.props.selected.id == profile.id)
            	name = <a onClick={this.selectProfile.bind(this, profile)}><strong style={{color:'red'}}> { profile.firstName } </strong></a>
            else
            	name = <a onClick={this.selectProfile.bind(this, profile)}><span> { profile.firstName } </span></a>

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
        profilesReceived: (profiles) => dispatch(actions.profilesReceived(profiles)),
        profileSelected: (profile) => dispatch(actions.profileSelected(profile))     
	}
}

export default connect(stateToProps, dispatchToProps)(Profiles)