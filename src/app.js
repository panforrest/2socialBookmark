//React-DOM('</app>, documentByID()') 
import React, { Component } from 'react'    //import react, { Component } as 'React'
import ReactDOM from 'react-dom'    //import react-dom as 'React-DOM'
import { Home } from './components/layout'

class App extends Component {      //class app extends Component {
    render() {     // 	render(
		return(          //return(){
			<div>
			    <Home/>

			</div>
		)
	}

}

ReactDOM.render(<App />, document.getElementById('root')) 