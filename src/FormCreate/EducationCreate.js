import React from 'react'
import '../Assets/CreateForm.css'

// class EducationCreate extends Component {
//     renderEducation = event => {
//         this.props.setEducation(event)
//     }

//     renderSkills = event => {
//         event.preventDefault()

//         this.props.setSkills(event)
//     }

//     render() {
//         return (
//         <div className='create-inputs'>
//             <h3>Education</h3>

//             <input name='degree' value={this.props.gatherStates.education.degree} onChange={this.renderEducation} type='text'
//             placeholder='Your degree / Major' />
//             <input name='schoolName' value={this.props.gatherStates.education.schoolName} onChange={this.renderEducation} type='text'
//             placeholder='School Name' />
//             <input name='from' value={this.props.gatherStates.education.duration.from} onChange={this.renderEducation} type='month'
//             placeholder='From' />
//             <input name='to' value={this.props.gatherStates.education.duration.to} onChange={this.renderEducation} type='month'
//             placeholder='To' />

//             <h3>Skills</h3>
//             <form className='skill-form'>
//                 <input ref={this.props.skillRef} onChange={this.props.setSkillInputs} type='text' placeholder='Skills' />
//                 <button onClick={this.renderSkills} type='submit'>Add Skills</button>
//             </form>
            
//         </div>
//         )
//     }
// }

// export default EducationCreate



const EducationCreate = (props) => {
    const renderEducation = event => {
        props.setEducation(event)
    }

    const renderSkills = event => {
        event.preventDefault()
        
        props.setSkills(event)
    }

    return (
        <div className='create-inputs'>
            <h3>Education</h3>

            <input name='degree' value={props.gatherStates.education.degree} onChange={renderEducation} type='text'
            placeholder='Your degree / Major' />
            <input name='schoolName' value={props.gatherStates.education.schoolName} onChange={renderEducation} type='text'
            placeholder='School Name' />
            <input name='from' value={props.gatherStates.education.duration.from} onChange={renderEducation} type='month'
            placeholder='From' />
            <input name='to' value={props.gatherStates.education.duration.to} onChange={renderEducation} type='month'
            placeholder='To' />

            <h3>Skills</h3>
            <form className='skill-form'>
                <input ref={props.skillRef} onChange={props.setSkillInputs} type='text' placeholder='Skills' />
                <button onClick={renderSkills} type='submit'>Add Skills</button>
            </form>
        </div>
    )
}

export default EducationCreate