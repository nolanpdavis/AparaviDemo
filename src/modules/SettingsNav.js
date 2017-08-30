import React, { Component } from 'react'
import { Router, Route, NavLink } from 'react-router-dom'

export default class SettingsNav extends Component {

	render(){
		return(
            <div className="miniNavLinks">
				<NavLink to='/organizations' activeClassName="activeNavLink"><i className="fa fa-id-card-o smallerIcon" aria-hidden="true"></i><h1>My Account</h1></NavLink>
                <NavLink to='/users' activeClassName="activeNavLink"><i className="fa fa-tags smallerIcon" aria-hidden="true"></i><h1>Activate Device</h1></NavLink>
                <NavLink to='/broadcast' activeClassName="activeNavLink"><i className="fa fa-globe smallerIcon widthFix2" aria-hidden="true"></i><h1>Install/Recover Device</h1></NavLink>
                <NavLink to='/broadcast' activeClassName="activeNavLink"><i className="fa fa-cog smallerIcon widthFix2" aria-hidden="true"></i><h1>System Settings</h1></NavLink>
                <NavLink to='/broadcast' activeClassName="activeNavLink"><i className="fa fa-life-ring smallerIcon" aria-hidden="true"></i><h1>Support</h1></NavLink>
			</div>
		)
	}
}
