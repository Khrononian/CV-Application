import React, { Component } from 'react'


class EducationCreate extends Component {
    renderEudcation = event => {
        this.props.setEducation(event)
    }

    renderSkills = event => {
        event.preventDefault()

        this.props.setSkills(event)
    }

    render() {
        return (
        <div>
            <h3>Education</h3>

            <input name='degree' value={this.props.gatherStates.education.degree} onChange={this.renderEudcation} type='text'
            placeholder='Your degree / Major' />
            <input name='schoolName' value={this.props.gatherStates.education.schoolname} onChange={this.renderEudcation} type='text'
            placeholder='School Name' />
            <input name='from' value={this.props.gatherStates.education.duration.from} onChange={this.renderEudcation} type='month'
            placeholder='From' />
            <input name='to' value={this.props.gatherStates.education.duration.to} onChange={this.renderEudcation} type='month'
            placeholder='To' />

            <h3>Skills</h3>
            <form>
                <input onChange={this.props.setInputs} type='text' placeholder='Skills' />
                <button onClick={this.renderSkills} type='submit'>Add Skills</button>
                {/* SEE WHICH PLACEMENT IS MORE CONVIENIENT */}
            </form>
            
        </div>
        )
    }
}

export default EducationCreate