import React, { Component } from 'react'
<<<<<<< HEAD
import '../Assets/CreateForm.css'
=======
>>>>>>> 65daebb94c44f7ca1296421f8e96ac569913d31c

class ExperienceCreate extends Component {
    renderExperience = event => {
        this.props.setExperience(event)
    }

    renderResponsibilities = event => {
        event.preventDefault()

        this.props.setResponsibilities(event)
    }

    render() {
        return (
        <div className='create-inputs'>
            <h3>Experience</h3>

<<<<<<< HEAD
            <input name='jobName' value={this.props.gatherStates.experience.jobName} onChange={this.renderExperience} type='text'
            placeholder='Position' />
            <input name='company' value={this.props.gatherStates.experience.company} onChange={this.renderExperience} type='text'
            placeholder='Company' />
            <input name='location' value={this.props.gatherStates.experience.location} onChange={this.renderExperience} type='text'
            placeholder='Location' />
            <input name='from' value={this.props.gatherStates.experience.duration.from} onChange={this.renderExperience} type='number' min='1900' max='2099'
            placeholder='From' />
            <input name='to' value={this.props.gatherStates.experience.duration.to} onChange={this.renderExperience} type='number' min='1900' max='2099'
            placeholder='To' />

            <form className='responsibility-form'>
                <input ref={this.props.responsibilityRef} onChange={this.props.setResponsibility} type='text'
=======
            <input name='jobName' value={this.props.gatherStates.experience.jobName} onChange={this.renderExperience}
            placeholder='Position' />
            <input name='company' value={this.props.gatherStates.experience.company} onChange={this.renderExperience}
            placeholder='Company' />
            <input name='location' value={this.props.gatherStates.experience.location} onChange={this.renderExperience}
            placeholder='Location' />
            <input name='from' value={this.props.gatherStates.experience.duration.from} onChange={this.renderExperience}
            placeholder='From' />
            <input name='to' value={this.props.gatherStates.experience.duration.to} onChange={this.renderExperience}
            placeholder='To' />
            <form>
                <input name='responsibility' value={this.props.gatherStates.responsibility} onChange={this.props.setResponsibility}
>>>>>>> 65daebb94c44f7ca1296421f8e96ac569913d31c
                placeholder='Responsibilities' />
                <button type='submit' onClick={this.renderResponsibilities}>Add Responsibility</button>
            </form>
        </div>
        )
    }
}

export default ExperienceCreate