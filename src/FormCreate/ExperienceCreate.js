import React, { Component } from 'react'
import '../Assets/CreateForm.css'

class ExperienceCreate extends Component {
    renderExperience = event => {
        this.props.setExperience(event)
    }

    renderResponsibilities = event => {
        event.preventDefault()

        this.props.setResponsibilities(event)
    }

    renderNewResponsibilities = event => {
        event.preventDefault()

        this.props.setNewResponsibilities(event)
    }

    handleChanges = (event) => {
        this.props.handleInputChanges(event)
    }

    removeForm = event => {
        this.props.removeFormUI(event)
    }

    addClick = () => {
        this.props.addExperience()
    }

    createFormUI = () => {
        return this.props.experienceValues.map((current, index) => 
            <div key={index} id={index} className='new-form '>
                <input name='jobName' value={current.jobName} onChange={this.handleChanges} type='text'
                placeholder='Position' />
                <input name='company' value={current.company} onChange={this.handleChanges} type='text'
                placeholder='Company' />
                <input name='location' value={current.location} onChange={this.handleChanges} type='text'
                placeholder='Location' />
                <input name='from' value={current.from} onChange={this.handleChanges} type='number' min='1900' max='2099'
                placeholder='From' />
                <input name='to' value={current.to} onChange={this.handleChanges} type='number' min='1900' max='2099'
                placeholder='To' />

                <form className='responsibility-form'>
                    <input ref={this.props.newResponsibilityRef} value={current.responsibility} onChange={this.props.setNewResponsibility} type='text'
                    placeholder='Responsibilities' />
                    <button type='submit' onClick={this.renderNewResponsibilities}>Add Responsibility</button>
                </form>

                <button type='button' className='delete-btn' onClick={this.removeForm}>Delete</button>
            </div>
        )
    }

    render() {
        return (
            <div className='create-inputs'>
                <h3>Experience</h3>

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
                    placeholder='Responsibilities' />
                    <button type='submit' onClick={this.renderResponsibilities}>Add Responsibility</button>
                </form>

                {this.createFormUI()}
                
                <button className='btn' onClick={this.addClick}>Add More Experience</button>
            </div>
        )
    }
}

export default ExperienceCreate