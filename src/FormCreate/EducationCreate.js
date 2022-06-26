import React, { Component } from 'react'
import '../Assets/CreateForm.css'

class EducationCreate extends Component {
<<<<<<< HEAD
    renderEducation = event => {
=======
    renderEudcation = event => {
>>>>>>> 65daebb94c44f7ca1296421f8e96ac569913d31c
        this.props.setEducation(event)
    }

    renderSkills = event => {
        event.preventDefault()

        this.props.setSkills(event)
    }

    render() {
        return (
        <div className='create-inputs'>
            <h3>Education</h3>

<<<<<<< HEAD
            <input name='degree' value={this.props.gatherStates.education.degree} onChange={this.renderEducation} type='text'
            placeholder='Your degree / Major' />
            <input name='schoolName' value={this.props.gatherStates.education.schoolname} onChange={this.renderEducation} type='text'
            placeholder='School Name' />
            <input name='from' value={this.props.gatherStates.education.duration.from} onChange={this.renderEducation} type='month'
            placeholder='From' />
            <input name='to' value={this.props.gatherStates.education.duration.to} onChange={this.renderEducation} type='month'
=======
            <input name='degree' value={this.props.gatherStates.education.degree} onChange={this.renderEudcation} type='text'
            placeholder='Your degree / Major' />
            <input name='schoolName' value={this.props.gatherStates.education.schoolname} onChange={this.renderEudcation} type='text'
            placeholder='School Name' />
            <input name='from' value={this.props.gatherStates.education.duration.from} onChange={this.renderEudcation} type='month'
            placeholder='From' />
            <input name='to' value={this.props.gatherStates.education.duration.to} onChange={this.renderEudcation} type='month'
>>>>>>> 65daebb94c44f7ca1296421f8e96ac569913d31c
            placeholder='To' />

            <h3>Skills</h3>
            <form className='skill-form'>
<<<<<<< HEAD
                <input ref={this.props.skillRef} onChange={this.props.setInputs} type='text' placeholder='Skills' />
                <button onClick={this.renderSkills} type='submit'>Add Skills</button>
=======
                <input onChange={this.props.setInputs} type='text' placeholder='Skills' />
                <button onClick={this.renderSkills} type='submit'>Add Skills</button>

                {/* SEE WHICH PLACEMENT IS MORE CONVIENIENT */}
>>>>>>> 65daebb94c44f7ca1296421f8e96ac569913d31c
            </form>
            
        </div>
        )
    }
}

export default EducationCreate