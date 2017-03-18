import React, { Component } from 'react'
import { APIManager } from '../../utils'

class Bookmarks extends Component {
    constructor(){
    	super()
    	this.state = {
    		bookmarks: []
    	}
    }

    componentDidMount(){
        APIManager.get('/api/bookmark', null, (err, response) => {
        	if (err) {
        		let msg = err.message || err
        		alert(err)
        		return
        	}
        	console.log('componentDidMount bookmark list: '+JSON.stringify(response))
        	const bookmarks = response.results   //var results = response.bookmarks, IN HERE NEED BE CONSISTENT WITH routes/api.js
        	this.setState({
                bookmarks: bookmarks
        	})
        })

        // console.log('componentDidMount: ')

    }

	render() {
        var list = this.state.bookmarks.map(function(bookmark, i){
        	return(
        		<li key={bookmark.id}> { bookmark.description } </li>
        	)
        })


		return(
			<div>
			    {list}
			</div>
	    )
	}
}

export default Bookmarks