import React, { Component } from 'react'

class Experience extends Component {


    render() {
        return (
<<<<<<< HEAD
        <div className='experience heading'>
            <h3>Professional Experience</h3>
=======
        <div>
            <h3>Experience</h3>
>>>>>>> 65daebb94c44f7ca1296421f8e96ac569913d31c
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
<<<<<<< HEAD
            <ul className='responsibility-list'>
=======
            <ul>
>>>>>>> 65daebb94c44f7ca1296421f8e96ac569913d31c
                {this.props.responsibilities.map((task, index) => {
                    return <li key={index}>{task}</li>
                })}
            </ul>
            
        </div>
        )
    }
}

export default Experience