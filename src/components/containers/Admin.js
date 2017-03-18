//     		    {(this.props.currentUser == null) ? <h2>Welcome, { this.props.currentUser.firstName }</h2>: 
import React, { Component } from 'react'
import { Signup } from '../presentation'
import { connect } from 'react-redux'
import actions from '../../actions'
import { APIManager } from '../../utils'
 
class Admin extends Component {
	constructor(){
		super()
		this.state //= {
  //           profile = {}
		// }
	}

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

	register(visitor){
		APIManager.post('/account/register', visitor, (err, response) => {    //('/api/profile', 
			if (err) {
				let msg = err.message || err
    			alert(msg)
                return
			}
            console.log('Register: '+JSON.stringify(response.profile))
            this.props.currentUserReceived(response.profile)
		})
	}

    login(credentials){
    	APIManager.post('/account/login', credentials, (err, response) => {   //('/api/profile',   
    		if (err) { 
    			let msg = err.message || err
    			alert(msg)
                return
    		}
            console.log('Register: '+JSON.stringify(response.profile))
            this.props.currentUserReceived(response.profile)
    	})

    }

    render(){
    	return(
    		<div>
    		    {(this.props.currentUser == null) ? <Signup onRegister={this.register.bind(this)} onLogin={this.login.bind(this)}/>: 
    		      
    		    	
                    
                    <h2>Welcome, { this.props.currentUser.firstName }</h2>
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