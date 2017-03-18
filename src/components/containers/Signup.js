                // <h2>Sign in</h2>
                // <input onChange={this.update.bind(this)} type="text" id="email" placeholder="Email" /><br />
                // <input onChange={this.update.bind(this)} type="text" id="password" placeholder="Password" /><br />
                // <button onClick={this.login.bind(this)}>Submit</button>

import React, { Component } from 'react'
import { APIManager } from '../../utils'
import actions from '../../actions'
import { connect } from 'react-redux'

class Signup extends Component {
	constructor(){
		super()
		this.state = {
			visitor: {        //profile: [
                firstName:'',
                lastName:'',
                email:'',
                password:''
			}
		}
	}

	update(event) {       //update(){ 
        // console.log('update: ')
        let updatedVisitor = Object.assign({}, this.state.visitor) //var visitor = object.assign({}, )
        updatedVisitor[event.target.id] = event.target.value      //visitor['event.target.id']
        // var updatedVisitor = visitor
        this.setState({
            visitor: updatedVisitor
        })
        // dispatch(action.profileCreated)
        console.log(JSON.stringify(this.state.visitor))
	}

	register(event){
		event.preventDefault()
		// console.log('register: ')
		APIManager.post('/account/register', this.state.visitor, (err, response) => {  //, null, (err, profile)
            if (err) {
            	let msg = err.message || err
            	alert(msg)
            	return
            }
			console.log('REGISTER: '+JSON.stringify(response))
            this.props.profileCreated(response.profile)   //this.props.profileCreated(response.result)
		})
	}

    login(event){

    } 

	render(){
		return(
            <div> 
            {(this.props.currentUser != null) ? <h2>Welcome, {this.props.currentUser.firstName}</h2>: 

              <div>  
                <h2>Sign up</h2>
                <input onChange={this.update.bind(this)} type="text" id="firstName" placeholder="First name" /><br />
                <input onChange={this.update.bind(this)} type="text" id="lastName" placeholder="Last name" /><br />
                <input onChange={this.update.bind(this)} type="text" id="email" placeholder="Email" /><br />
                <input onChange={this.update.bind(this)} type="text" id="password" placeholder="Password" /><br />
                <button onClick={this.register.bind(this)}>Submit</button>
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
        currentUserReceived: (profile) => dispatch(actions.currentuserReceived(profile))
    }
}

export default connect(stateToProps, dispatchToProps)(Signup)