//     		    {(this.props.currentUser == null) ? <h2>Welcome, { this.props.currentUser.firstName }</h2>: 
import React, { Component } from 'react'
import { Signup } from '../containers'
import { connect } from 'react-redux'
import actions from '../../actions'
import { APIManager } from '../../utils'
 
class Admin extends Component {
	componentDidMount(){
        APIManager.get('/account/currentuser', null, (err, response) => {  //REMEMBER NOT post('/account/login', null,
        	if (err) {
        		// const msg = err.message || err
        		alert(err)
        		return
        	}
        	console.log('Admin: '+JSON.stringify(response.profile))
        	this.props.currentUserReceived(response.profile)
        })

	}


    render(){
    	return(
    		<div>
    		    {(this.props.currentUser != null) ? <h2>Welcome, { this.props.currentUser.firstName }</h2>: 
    		      
    		    	
                    <Signup />
                   
    		    }
    		</div>
    	)
    }
}

const stateToProps = (state) => {
    return {
        profiles: state.profile.list,
        currentUser: state.account.currentUser
    }
}

const dispatchToProps = (dispatch) => {
    return{ 
        profileCreated: (profile) => dispatch(actions.profileCreated(profile)),
        currentUserReceived: (profile) => dispatch(actions.currentUserReceived(profile))
    }
}

export default connect(stateToProps, dispatchToProps)(Admin)