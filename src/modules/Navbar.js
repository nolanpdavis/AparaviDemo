import React, { Component } from 'react'
import { Router, Route, NavLink } from 'react-router-dom'
import { AdminNav, SettingsNav } from '.'
const logo = require('../../styles/img/aparaviLogo.svg')

export default class Navbar extends Component {
	constructor(){
        super()
        this.state = {
            adminIsClicked: false,
			settingsIsClicked: false,
        }
}

	handleAdminClick(event) {
		event.preventDefault()
		this.setState({
            adminIsClicked: !this.state.adminIsClicked,
			settingsIsClicked: false
        })
	}

	handleSettingsClick(event) {
		event.preventDefault()
		this.setState({
            settingsIsClicked: !this.state.settingsIsClicked,
			adminIsClicked: false
        })
	}

	render(){
		return(
			<div>
				<div className={this.props.visible}>
					<img className="aparaviLogo" src={logo} alt="Aparavi Logo"/>
					<div className="navLinks">
						<NavLink to='/' exact activeClassName="activeNavLink"><i className="fa fa-tachometer" aria-hidden="true"></i><h1>Dashboard</h1></NavLink>
						<NavLink to='/recover' activeClassName="activeNavLink"><i className="fa fa-ambulance" aria-hidden="true"></i><h1>Recover</h1></NavLink>
						<div className="nonLinkNav" onClick={this.handleAdminClick.bind(this)}>
							<i className="fa fa-university fa-lg" aria-hidden="true"></i>
							<h1>Administration</h1>
							{(this.state.adminIsClicked) ? <i className="fa fa-caret-down fa-lg caretIcon1" aria-hidden="true"></i> : <i className="fa fa-caret-right fa-lg caretIcon1" aria-hidden="true"></i>}
						</div>
						{this.state.adminIsClicked && <AdminNav/>}
						<div className="nonLinkNav" onClick={this.handleSettingsClick.bind(this)}>
							<i className="fa fa-cogs fa-lg " aria-hidden="true"></i>
							<h1>Settings</h1>
							{(this.state.settingsIsClicked) ? <i className="fa fa-caret-down fa-lg caretIcon1" aria-hidden="true"></i> : <i className="fa fa-caret-right fa-lg caretIcon1" aria-hidden="true"></i>}
						</div>
						{this.state.settingsIsClicked && <SettingsNav/>}
						<NavLink to='/logout' activeClassName="activeNavLink"><i className="fa fa-sign-out fa-lg" aria-hidden="true"></i><h1>Logout</h1></NavLink>
					</div>
				</div>
			</div>
		)
	}
}
