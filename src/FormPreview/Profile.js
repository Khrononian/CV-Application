import React, { Component } from 'react'

class Profile extends Component {
    render() {
        return (
            <div className='profile heading'>
                <h3>Profile</h3>
                <p>{this.props.profile}</p>
            </div>
        )
    }
}

export default Profile