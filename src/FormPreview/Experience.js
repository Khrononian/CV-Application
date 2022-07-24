import React from 'react'

const Experience = (props) => {
    return (
        <div className='experience heading'>
            <h3>Professional Experience</h3>
            <h5>{props.jobName}</h5>
            <div className='experience-header'>
                <h5>{props.company}</h5>
                |
                <h5>{props.location}</h5>
                |
                <h5>{props.from} - {props.to}</h5>
            </div>
            <p>Summarize your main responsibilities using past tense and provide information
            about the organization
            </p>
            <ul className='responsibility-list'>
                {props.responsibilities.map((task, index) => {
                    return <li key={index}>{task}</li>
                })}
            </ul>
        </div>
    )
}

export default Experience