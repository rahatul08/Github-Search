import React, {Component, Fragment} from "react";
import './App.css';
import Navbar from "./layout/Navbar";
import User from "./Users/User";
import axios from 'axios';
import Search from "./Users/Search";
import Alert from "./layout/Alert";
import {Route, Router, Switch} from "react-router-dom";


class App extends Component{
    state ={
        users: [],
        loading:false,
        alert: null
    }

async componentDidMount() {
    this.setState({ loading: true})
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret= ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({users: res.data, loading: false})
}
    searchUsers = async text =>{
            console.log(text)
        const res = await axios.get(`https://api.github.com/search/users?q= ${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret= ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

        this.setState({users: res.data.items, loading: false})
    }
    //clear user
    clearUsers =() => this.setState({ users: [], loading: false})

    //Alert
    setAlert = (msg , type) => {
        this.setState({ alert :{ msg: msg, type: type}})
        setTimeout(() => this.setState({alert:null}),5000)
    }

    render() {
        const { loading, users } =this.state
        return (
            <Router>
                <div>
                    <Navbar/>
                    <div className="container">
                        <Alert alert={this.state.alert} />
                        <Switch>
                            <Route
                                exact
                                path='/'
                                render={props =>(
                                    <Fragment>
                                        <Search
                                            searchUsers={this.searchUsers}
                                            clearUsers={this.clearUsers}
                                            showClear={ users.length > 0 ? true: false }
                                            setAlert={this.setAlert}

                                        />
                                        <User loading={loading} users={users}/>
                                    </Fragment>
                                )
                                }
                            />
                        </Switch>
                    </div>
                </div>
            </Router>

    );
  }


}

export default App;
