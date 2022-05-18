import React, { Component } from 'react'

class HeaderCreate extends Component {
    renderHeaderName = (event) => {
        this.props.setHeaderName(event)
    }

    renderPression = event => {
        this.props.setProfession(event)
    }

    render() {
        return (
            <div className='header'>
                <h3>Personal Details</h3>
                <input name='name' value={this.props.gatherStates.header.name} onChange={this.renderHeaderName} type='text' 
                placeholder='Name' />
                <input name='profession' value={this.props.gatherStates.header.profession} onChange={this.renderHeaderName} type='text' 
                placeholder='Name of profession' />
                
                {/* <input name='phoneNum' value={this.props.gatherStates.contacts.phoneNum} onChange={this.renderHeaderName} type='text' /> */}
            </div>
        )
    }
}

export default HeaderCreate