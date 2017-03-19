import React, { Component } from 'react'
import { APIManager } from '../../utils'
import actions from '../../actions'
import { connect } from 'react-redux'

class Bookmarks extends Component {
    constructor(){
    	super()
    	this.state = {
    		bookmarks: []
    	}
    }

    componentDidMount(){
        // APIManager.get('/api/bookmark', null, (err, response) => {
        // 	if (err) {
        // 		let msg = err.message || err
        // 		alert(err)
        // 		return
        // 	}
        // 	// console.log('componentDidMount bookmark list: '+JSON.stringify(response))
        // 	// const bookmarks = response.results   //var results = response.bookmarks, IN HERE NEED BE CONSISTENT WITH routes/api.js
        // 	// this.setState({
        //  //        bookmarks: bookmarks
        // 	// })
        // 	this.props.bookmarksReceived(response.results)   // this.props.bookmarksReceived(bookmarks)
        // })

        // // console.log('componentDidMount: ')

    }

    componentDidUpdate(){
        console.log('componentDidUpdate: '+JSON.stringify(this.props.selected))  //(this.state.selectedProfile))
        const list = this.props.bookmarks[this.props.selected.id]
        if (list != null)
            return

        const params = {profile: this.props.selected.id}
        APIManager.get('/api/bookmark', {profile: this.props.selected.id}, (err, response) => {     //, null,     
            if (err) {
                // alert(err)
                return
            }
            this.props.bookmarksReceived(response.results, params)
        })
    }

	render() {
        // var list = this.props.bookmarks.map(function(bookmark, i){
        // 	return(
        // 		<li key={bookmark.id}> { bookmark.description } </li>
        // 	)
        // })
        const list = (this.props.selected ==null ) ? null : this.props.bookmarks[this.props.selected.id]


		return(
			<div>
                <h2>Bookmarks</h2>
                <ol>
                    { (list == null) ? null : list.map((bookmark, i) => {
                        return <li key={bookmark.id}> {bookmark.description} </li>
                      })

                    }
                </ol>
			    
			</div>
	    )
	}
}

const stateToProps = (state) => {
	return {
        selected: state.profile.selected,
		bookmarks: state.bookmark
	}
}

const dispatchToProps = (dispatch) => {
	return {
		bookmarksReceived: (bookmarks, params) => dispatch(actions.bookmarksReceived(bookmarks, params))
	}
}

export default connect(stateToProps, dispatchToProps)(Bookmarks)