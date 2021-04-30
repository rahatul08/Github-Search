import React, { Component } from 'react'
// import propsTypes from 'prop-types'

export default class Navbar extends Component {
    static defaultProps = {
        title:'GithUb Finder',
        icon: 'fab fa-github'
    }

    // static propsTypes ={
    //     title:
    // }
    render() {
        return (
            <div className="Navbar bg-primary">
               <h1>
                   <i className={this.props.icon} aria-hidden="true"></i>
                 Navbar {this.props.title}

               </h1>
            </div>
        )
    }
}
