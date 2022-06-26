import React, { Component } from 'react'


class Education extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className='education heading'>
=======
      <div>
>>>>>>> 65daebb94c44f7ca1296421f8e96ac569913d31c
          <h3>Education</h3>
          <p>{this.props.degree}</p>
          <p>{this.props.schoolName}</p>
          <p>{this.props.from}</p>
          <p>{this.props.to}</p>

<<<<<<< HEAD
          <h3 className='skills'>Skills</h3>
          <ul className='skills-list'>
=======
          <h3>Skills</h3>
          <ul>
>>>>>>> 65daebb94c44f7ca1296421f8e96ac569913d31c
              {this.props.skillsArray.map((skill, index) => {
                  return <li key={index}>{skill}</li>
              })}
          </ul>
      </div>
    )
  }
}

export default Education