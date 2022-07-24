import React from 'react'
import '../Assets/CreateForm.css'

const HeaderCreate = (props) => {
    const renderHeaderName = event => {
        props.setHeaderName(event)
    }

    return (
        <div className='create-inputs'>
            <h3>Personal Details</h3>
            <input name='name' value={props.gatherStates.header.name} onChange={renderHeaderName} type='text' 
            placeholder='Name' />
            <input name='profession' value={props.gatherStates.header.profession} onChange={renderHeaderName} type='text' 
            placeholder='Name of profession' />
        </div>
    )
}

export default HeaderCreate