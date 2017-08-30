import React, { Component } from 'react'
import { Router, Route, NavLink } from 'react-router-dom'

export default class AdminNav extends Component {

	render(){
		return(
            <div className="miniNavLinks">
				<NavLink to='/organizations' activeClassName="activeNavLink"><i className="fa fa-sitemap smallerIcon" aria-hidden="true"></i><h1>Organizations</h1></NavLink>
                <NavLink to='/users' activeClassName="activeNavLink"><i className="fa fa-user smallerIcon widthFix" aria-hidden="true"></i><h1>Users & Roles</h1></NavLink>
                <NavLink to='/broadcast' activeClassName="activeNavLink"><i className="fa fa-bullhorn smallerIcon" aria-hidden="true"></i><h1>Broadcast</h1></NavLink>
			</div>
		)
	}
}
