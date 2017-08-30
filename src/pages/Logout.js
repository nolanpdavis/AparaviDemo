import React, { Component } from 'react'
import { Navbar } from '../modules'

export default class Logout extends Component {

	render(){
		return(
			<div>
				<Navbar/>
				<div className="bodyContent">
					<h1>Logout!</h1>
				</div>
			</div>
		)
	}
}
