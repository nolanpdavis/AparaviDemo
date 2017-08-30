
import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router-dom'

export default class Summary extends Component {

	render(){
		return(
			<div className="widgetWide">
                <h2>Summary</h2>
                <h2>History</h2>
                <i className="fa fa-caret-down fa-2x" aria-hidden="true"></i>
                <i className="fa fa-cog fa-2x" aria-hidden="true"></i>
                <hr/>
                <div className="summaryInfo">
                    <div className="summaryInfoBox">
                        <p className="summaryInfoTitle">Recovery Tasks</p>
                        <div className="circleChartOuter">
                            <p className="circleChartInner">100%</p>
                        </div>
                    </div>
                    <div className="verticalLine"></div>
                    <div className="summaryInfoBox">
                        <p className="summaryInfoTitle">Archive Tasks</p>
                        <div className="circleChartOuter">
                            <p className="circleChartInner">100%</p>
                        </div>
                    </div>
                    <div className="verticalLine"></div>
                    <div className="summaryInfoBox">
                        <p className="summaryInfoTitle">Store Tasks</p>
                        <div className="circleChartOuter">
                            <p className="circleChartInner">100%</p>
                        </div>
                    </div>
                    <div className="verticalLine"></div>
                    <div className="summaryInfoBox">
                        <p className="summaryInfoTitle">Pruning Tasks</p>
                        <div className="circleChartOuter">
                            <p className="circleChartInner">100%</p>
                        </div>
                    </div>
                    <div className="verticalLine"></div>
                    <div className="summaryInfoBox">
                        <p className="summaryInfoTitle">Storage Locations</p>
                        <div className="circleChartOuter2">
                            <p className="circleChartInner">9508GB</p>
                        </div>
                    </div>
                    <div className="verticalLine"></div>
                    <div className="summaryInfoBox">
                        <p className="summaryInfoTitle">% Archive Changed</p>
                        <div className="circleChartOuter2">
                            <p className="circleChartInner">5%</p>
                        </div>
                    </div>
                    <div className="verticalLine"></div>
                    <div className="summaryInfoBox">
                        <p className="summaryInfoTitle">% Store Changed</p>
                        <div className="circleChartOuter2">
                            <p className="circleChartInner">26%</p>
                        </div>
                    </div>
                </div>
			</div>
		)
	}
}
