//React-DOM('</app>, documentByID()') 
import React, { Component } from 'react'    //import react, { Component } as 'React'
import ReactDOM from 'react-dom'    //import react-dom as 'React-DOM'
import { Home } from './components/layout'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {      //class app extends Component {
    render() {     // 	render(
		return(          //return(){
			// <div Provider=store()>
			//     <Home/>
			// </div>
			<Provider store={store.configureStore()}>
			    <div>
                    <Home />
			    </div>
			</Provider>
		)
	}

}

ReactDOM.render(<App />, document.getElementById('root')) 