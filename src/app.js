
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Dashboard, Recover, Administration, Settings, Logout, Organizations, UsersAndRoles, Broadcast} from './pages'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
require('../styles/main.css')

export default class App extends Component {
    
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/recover" component={Recover} />
                    <Route path="/administration" component={Administration} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/organizations" component={Organizations} />
                    <Route path="/users" component={UsersAndRoles} />
                    <Route path="/broadcast" component={Broadcast} />
                </Switch>
            </BrowserRouter>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
