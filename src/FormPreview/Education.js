import React from 'react'

const Education = (props) => {
    return (
      <div className='education heading'>
        <h3>Education</h3>
        <p>{props.degree}</p>
        <p>{props.schoolName}</p>
        <p>{props.from}</p>
        <p>{props.to}</p>

        <h3 className='skills'>Skills</h3>
        <ul className='skills-list'>
            {props.skillsArray.map((skill, index) => {
                return <li key={index}>{skill}</li>
            })}
        </ul>
      </div>
    )
}

export default Education