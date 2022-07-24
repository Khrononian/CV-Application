import React from 'react'

const Profile = (props) => {
    return (
        <div className='profile heading'>
            <h3>Profile</h3>
            <p>{props.profile}</p>
        </div>
    )
}

export default Profile