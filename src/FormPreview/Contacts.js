import React from 'react'

const Contacts = (props) => {
    return (
      <div className='contacts heading'>
        <img src={props.imageUrl} alt='Avatar' />
        <h3>Contacts</h3>
        <p className='phone'>{props.phoneNum}</p>
        <p className='email'>{props.email}</p>
        <p className='location'>{props.location}</p>
        <p className='links'>{props.links}</p>
      </div>
    )
}

export default Contacts