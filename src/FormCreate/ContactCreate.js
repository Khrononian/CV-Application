import React from 'react'
import '../Assets/CreateForm.css'

const ContactCreate = (props) => {
    const renderContacts = event => {
        props.setContacts(event)
    }

    const renderImageUrl = event => {
        props.setImageUrl(event)
    }

    return (
        <div className='create-inputs'>
            <input name='imageUrl' id='image' onChange={renderImageUrl} type='file' />
            <label htmlFor='image'></label>

            <input name='phoneNum' value={props.gatherStates.contacts.phoneNum} onChange={renderContacts} type='tel' 
            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' placeholder='Phone #' />
            <input name='email' value={props.gatherStates.contacts.email} onChange={renderContacts} type='email'
            placeholder='Email address' />
            <input name='location' value={props.gatherStates.contacts.location} onChange={renderContacts} type='text'
            placeholder='City, State' />
            <input name='links' value={props.gatherStates.contacts.links} onChange={renderContacts} type='url'
            placeholder='Links' />

            <textarea name='profile' value={props.gatherStates.profile} onChange={renderContacts} 
            placeholder='Profile' style={{resize: 'none', height: '110px'}}></textarea>
        </div>
    )
}

export default ContactCreate