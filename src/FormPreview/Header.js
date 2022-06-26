import React, { Component } from 'react'


class Header extends Component {
    render() {
        return (
            <header className='heading'>
                <h2>{this.props.name}</h2>
                <h3>{this.props.profession}</h3>
            </header>
        )
    }
}

export default Header