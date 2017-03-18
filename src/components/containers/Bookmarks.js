import React, { Component } from 'react'
import { APIManager } from '../../utils'

class Bookmarks extends Component {
    componentDidMount(){
        APIManager.get('/api/bookmark', null, (err, response) => {
        	if (err) {
        		let msg = err.message || err
        		alert(err)
        		return
        	}
        	console.log('componentDidMount bookmark list: '+JSON.stringify(response))
        })

        // console.log('componentDidMount: ')

    }

	render() {
		return(
			<div>
			    This is Bookmarks container.
			</div>
	    )
	}
}

export default Bookmarks