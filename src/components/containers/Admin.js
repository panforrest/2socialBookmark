//     		    {(this.props.currentUser == null) ? <h2>Welcome, { this.props.currentUser.firstName }</h2>: 
import React, { Component } from 'react'
// import { Signup } from '../containers'
import { connect } from 'react-redux'
import actions from '../../actions'
 
class Admin extends Component {
    render(){
    	return(
    		<div>
    		    {(this.props.currentUser != null) ? <h2>Welcome, { this.props.currentUser.firstName }</h2>: 
    		      <div>	
    		    	User not logged in
                    
                  </div>  
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