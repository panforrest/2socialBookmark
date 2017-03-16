//React-DOM('</app>, documentByID()') 
import React, { Component } from 'react'    //import react, { Component } as 'React'
import ReactDOM from 'react-dom'    //import react-dom as 'React-DOM'

class App extends Component {      //class app extends Component {
    render() {     // 	render(
		return(          //return(){
			<div>
			    This is React App.

			</div>
		)
	}

}

ReactDOM.render(<App />, document.getElementById('root')) 