//     		    {(this.props.currentUser == null) ? <h2>Welcome, { this.props.currentUser.firstName }</h2>: 
import React, { Component } from 'react'
import { Signup } from '../presentation'
import { connect } from 'react-redux'
import actions from '../../actions'
import { APIManager } from '../../utils'
 
class Admin extends Component {
	constructor(){
		super()
		this.state = {
			visitor: {   //DON'T FORGET THIS LINE
			    url: ''
			}    
		}
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

    updateLink(event){
    	event.preventDefault()
    	// console.log('updateLink: ')
    	// var updated = Object.assign({}, this.state.visitor)
     //    updated[event.target.id] = event.target.value
    	this.setState({
            link: event.target.value
    	})
    	console.log('updatedLink: '+JSON.stringify(this.state.link))
    }

    submitLink(event){
    	event.preventDefault()
    	// console.log('submitLink: ')
    	const bookmark = {
    		profile: this.props.currentUser.id,    //profile: this.props.profile.id,
    		url: this.state.link
    	}
    	console.log('bookmark priorSubmitLink: '+JSON.stringify(bookmark))
        console.log('currentuser.id: '+JSON.stringify(this.props.currentUser.id))

    	APIManager.post('/api/bookmark', bookmark, (err, response) => {
    		if (err) {
    			let msg = err.message || err
    			alert(err)
    			return
    		}
    		console.log('submitLink: '+JSON.stringify(response))
    	})
    }

    render(){
    	return(
    		<div>
    		    {(this.props.currentUser == null) ? <Signup onRegister={this.register.bind(this)} onLogin={this.login.bind(this)}/>:                    
                  <div>
                    <h2>Welcome, { this.props.currentUser.firstName }</h2> 

                
                    <h2> Create Bookmark </h2>
                    <input onChange={this.updateLink.bind(this)} type="text" id="url" placeholder="Url" />
                    <button onClick={this.submitLink.bind(this)}>submit</button> <br />
                  </div> 
    		    }

    		</div>
    	)
    }
}

const stateToProps = (state) => {
    return {
        profile: state.profile.list,
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