import React, { Component } from 'react'
import { Navbar } from '../modules'

export default class Administration extends Component {

	render(){
		return(
			<div>
				<Navbar/>
				<div className="bodyContent">
					<h1>Administration!</h1>
				</div>
			</div>
		)
	}
}
