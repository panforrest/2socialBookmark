import React, { Component } from 'react'

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
        //var updatedVisitor = visitor
        this.setState({
            visitor: updatedVisitor
        })
        console.log(JSON.stringify(this.state.visitor))
	}

	render(){
		return(
            <div>
                This is Signup container.
                <h2>Sign up</h2>
                <input onChange={this.update.bind(this)} type="text" id="firstName" placeholder="First name" /><br />
                <input onChange={this.update.bind(this)} type="text" id="lastName" placeholder="Last name" /><br />
                <input onChange={this.update.bind(this)} type="text" id="email" placeholder="Email" /><br />
                <input onChange={this.update.bind(this)} type="text" id="password" placeholder="Password" /><br />
                <button>Submit</button>

            </div>
		)
	}

}

export default Signup