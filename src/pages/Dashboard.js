import React, { Component } from 'react'
import { Navbar, DataProtected, FilesProtected, Recoveries, Archives, Appliances, Agents, Snapshots, Checkpoints, Summary, Health, LiveFeed, NavCircle } from '../modules'

export default class Dashboard extends Component {
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
				<Navbar visible={(this.state.navIsOpen) ? "navLeft" : "navLeftGone"}/>
				<NavCircle navCircleOpen={(this.state.navIsOpen) ? "navCircleRight" : "navCircleLeft"} onClick={this.handleNavOpen.bind(this)}/>
				<div className={(this.state.navIsOpen) ? "bodyContent" : "bodyContent2"}>
					<DataProtected/>
					<FilesProtected/>
					<Recoveries/>
					<Archives/>
					<Appliances/>
					<Agents/>
					<Snapshots/>
					<Checkpoints/>
					<Summary/>
					<Health/>
					<LiveFeed/>
				</div>
			</div>
		)
	}
}
