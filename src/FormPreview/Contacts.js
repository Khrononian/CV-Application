import React, { Component } from 'react'


class Contacts extends Component {
  render() {
    return (
      <div className='contacts heading'>
          <img src={this.props.imageUrl} alt='Avatar' />
          <h3>Contacts</h3>
          <p className='phone'>{this.props.phoneNum}</p>
          <p className='email'>{this.props.email}</p>
          <p className='location'>{this.props.location}</p>
          <p className='links'>{this.props.links}</p>
      </div>
    )
  }
}

export default Contacts