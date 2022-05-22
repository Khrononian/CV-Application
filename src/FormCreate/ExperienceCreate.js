import React, { Component } from 'react'

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
                placeholder='Responsibilities' />
                <button type='submit' onClick={this.renderResponsibilities}>Add Responsibility</button>
            </form>
        </div>
        )
    }
}

export default ExperienceCreate