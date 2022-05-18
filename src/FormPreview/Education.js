import React, { Component } from 'react'


class Education extends Component {
  render() {
    return (
      <div>
          <h3>Education</h3>
          <p>{this.props.degree}</p>
          <p>{this.props.schoolName}</p>
          <p>{this.props.from}</p>
          <p>{this.props.to}</p>

          <h3>Skills</h3>
          <ul>
              {this.props.skillsArray.map((skill, index) => {
                  return <li key={index}>{skill}</li>
              })}
          </ul>
      </div>
    )
  }
}

export default Education