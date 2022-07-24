import React from 'react'
import '../Assets/CreateForm.css'

const ExperienceCreate = (props) => {
    const renderExperience = event => {
       props.setExperience(event) 
    }

    const renderResponsibilities = event => {
        event.preventDefault()
        
        props.setResponsibilities(event)
    }

    const renderNewResponsibilities = event => {
        event.preventDefault()

        props.setNewResponsibilities(event)
    }

    const handleChanges = event => {
        props.handleInputChanges(event)
    }

    const removeForm = event => {
        props.removeFormUI(event)
    }

    const addClick = event => {
        props.addExperience()
    }

    const createFormUI = () => {
        return props.experienceValues.map((current, index) => 
            <div key={index} id={index} className='new-form '>
                <input name='jobName' value={current.jobName} onChange={handleChanges} type='text'
                placeholder='Position' />
                <input name='company' value={current.company} onChange={handleChanges} type='text'
                placeholder='Company' />
                <input name='location' value={current.location} onChange={handleChanges} type='text'
                placeholder='Location' />
                <input name='from' value={current.from} onChange={handleChanges} type='number' min='1900' max='2099'
                placeholder='From' />
                <input name='to' value={current.to} onChange={handleChanges} type='number' min='1900' max='2099'
                placeholder='To' />

                <form className='responsibility-form'>
                    <input ref={props.newResponsibilityRef} value={current.responsibility} onChange={props.setNewResponsibility} type='text'
                    placeholder='Responsibilities' />
                    <button type='submit' onClick={renderNewResponsibilities}>Add Responsibility</button>
                </form>

                <button type='button' className='delete-btn' onClick={removeForm}>Delete</button>
            </div>
        )
    }

    return (
        <div className='create-inputs'>
            <h3>Experience</h3>

            <input name='jobName' value={props.gatherStates.experience.jobName} onChange={renderExperience} type='text'
            placeholder='Position' />
            <input name='company' value={props.gatherStates.experience.company} onChange={renderExperience} type='text'
            placeholder='Company' />
            <input name='location' value={props.gatherStates.experience.location} onChange={renderExperience} type='text'
            placeholder='Location' />
            <input name='from' value={props.gatherStates.experience.duration.from} onChange={renderExperience} type='number' min='1900' max='2099'
            placeholder='From' />
            <input name='to' value={props.gatherStates.experience.duration.to} onChange={renderExperience} type='number' min='1900' max='2099'
            placeholder='To' />

            <form className='responsibility-form'>
                <input ref={props.responsibilityRef} onChange={props.setResponsibility} type='text'
                placeholder='Responsibilities' />
                <button type='submit' onClick={renderResponsibilities}>Add Responsibility</button>
            </form>

            {createFormUI()}

            <button className='btn' onClick={addClick}>Add More Experience</button>
        </div>
    )
}

export default ExperienceCreate