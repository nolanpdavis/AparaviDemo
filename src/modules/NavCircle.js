import React, { Component } from 'react'
import { Router, Route, NavLink } from 'react-router-dom'

export default class Navbar extends Component {

	render(){
		return(
			<div>
				<div className="navCircle" className={this.props.navCircleOpen} onClick={this.props.onClick}>x</div>
			</div>
		)
	}
}
