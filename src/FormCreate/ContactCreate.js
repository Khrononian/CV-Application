import React, { Component } from 'react'

class ContactCreate extends Component {
    renderContacts = event => {
        this.props.setContacts(event)
    }

    renderImageUrl = event => {
        this.props.setImageUrl(event)
    }

    render() {
        return (
            <div>
                <h3>Contacts</h3>
                <input name='imageUrl' id='image' value={this.props.gatherStates.contacts.imageUrl} onChange={this.renderImageUrl} type='file' />
                <label htmlFor='image'></label>

                <input name='phoneNum' value={this.props.gatherStates.contacts.phoneNum} onChange={this.renderContacts} type='tel' 
                pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' placeholder='Phone #' />
                <input name='email' value={this.props.gatherStates.contacts.email} onChange={this.renderContacts} type='email'
                placeholder='Email address' />
                <input name='location' value={this.props.gatherStates.contacts.location} onChange={this.renderContacts} type='text'
                placeholder='City, State' />
                <input name='links' value={this.props.gatherStates.contacts.links} onChange={this.renderContacts} type='url'
                placeholder='Links' />

            </div>
        )
    }
}

export default ContactCreate