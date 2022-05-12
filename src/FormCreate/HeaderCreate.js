import React, { Component } from 'react'

export class HeaderCreate extends Component {
    renderHeaderNames = (event) => {
        this.props.setHeaders(event)
    }

    render() {
        return (
            <div>
                <h3>Personal Details</h3>
                <input onChange={this.renderHeaderNames} type='text' />
            </div>
        )
    }
}

export default HeaderCreate