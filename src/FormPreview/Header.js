import React, { Component } from 'react'

export class Header extends Component {
    renderHeaderNames = () => {
        // CONNECT TO INPUTS
    }

    render() {
        return (
            <header>
                <h2>{this.props.header}</h2>
                <h3>{this.props.profession}</h3>
            </header>
        )
    }
}

export default Header