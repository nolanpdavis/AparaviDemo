import React, { Component } from 'react'
import { Navbar, DataProtected, FilesProtected, Recoveries, Archives, Appliances, Agents, Snapshots, Checkpoints, Summary, Health, LiveFeed } from '../modules'

export default class Dashboard extends Component {

	render(){
		return(
			<div>
				<Navbar/>
				<div className="bodyContent">
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
