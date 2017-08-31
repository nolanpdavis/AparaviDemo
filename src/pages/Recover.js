import React, { Component } from 'react'
import { Navbar, NavCircle } from '../modules'

export default class Recover extends Component {
	constructor(){
        super()
        this.state = {
			navIsOpen: true
        }
}

	handleNavOpen() {
		this.setState({
            navIsOpen: !this.state.navIsOpen
        })
	}

	render(){
		return(
			<div>
				<Navbar visible = {(this.state.navIsOpen) ? "navLeft" : "navLeftGone"}/>
				<NavCircle navCircleOpen = {(this.state.navIsOpen) ? "navCircleRight" : "navCircleLeft"} onClick={this.handleNavOpen.bind(this)}/>
				<div className="bodyContent">
					<h1>Recover!</h1>
				</div>
			</div>
		)
	}
}
