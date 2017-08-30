import React, { Component } from 'react'
import { Navbar } from '../modules'

export default class Settings extends Component {

	render(){
		return(
			<div>
				<Navbar/>
				<div className="bodyContent">
					<h1>Settings!</h1>
				</div>
			</div>
		)
	}
}
