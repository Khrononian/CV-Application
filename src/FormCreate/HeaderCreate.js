import React, { Component } from 'react'
import '../Assets/CreateForm.css'

class HeaderCreate extends Component {
    renderHeaderName = (event) => {
        this.props.setHeaderName(event)
    }

    renderPression = event => {
        this.props.setProfession(event)
    }

    render() {
        return (
            <div className='create-inputs'>
                <h3>Personal Details</h3>
                <input name='name' value={this.props.gatherStates.header.name} onChange={this.renderHeaderName} type='text' 
                placeholder='Name' />
                <input name='profession' value={this.props.gatherStates.header.profession} onChange={this.renderHeaderName} type='text' 
                placeholder='Name of profession' />
                
            </div>
        )
    }
}

export default HeaderCreate