import React, { Component } from 'react'

class Experience extends Component {


    render() {
        return (
        <div>
            <h3>Experience</h3>
            <h5>{this.props.jobName}</h5>
            <div className='experience-header'>
                <h5>{this.props.company}</h5>
                |
                <h5>{this.props.location}</h5>
                |
                <h5>{this.props.from} - {this.props.to}</h5>
            </div>
            <p>Summarize your main responsibilities using past tense and provide information
            about the organization
            </p>
            <ul>
                {this.props.responsibilities.map((task, index) => {
                    return <li key={index}>{task}</li>
                })}
            </ul>
            
        </div>
        )
    }
}

export default Experience