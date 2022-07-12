import React, { Component } from 'react'

class Education extends Component {
  render() {
    return (
      <div className='education heading'>
          <h3>Education</h3>
          <p>{this.props.degree}</p>
          <p>{this.props.schoolName}</p>
          <p>{this.props.from}</p>
          <p>{this.props.to}</p>

          <h3 className='skills'>Skills</h3>
          <ul className='skills-list'>
              {this.props.skillsArray.map((skill, index) => {
                  return <li key={index}>{skill}</li>
              })}
          </ul>
      </div>
    )
  }
}

export default Education