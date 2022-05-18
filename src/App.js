import React, { Component } from 'react';
import './App.css';
import HeaderCreate from './FormCreate/HeaderCreate' 
import ContactCreate from './FormCreate/ContactCreate'
import EducationCreate from './FormCreate/EducationCreate'

import Header from './FormPreview/Header'
import Contacts from './FormPreview/Contacts'
import Education from './FormPreview/Education'

class App extends Component {
  constructor () {
    super()

    this.state = {
      header: {
        name: '',
        profession: ''
      },
      contacts: {
        imageUrl: '',
        phoneNum: '',
        email: '',
        location: '',
        links: ''
      },
      education: {
        degree: '',
        schoolName: '',
        duration: {
          from: '',
          to: ''
        }
      },
      skills: {
        skill: '',
      },
      skillsArray: [],
      profile: {
        desc: ''
      },
      experience: {
        jobName: '',
        company: '',
        location: '',
        duration: {
          from: '',
          to: ''
        },
        summaryPoints: []
      } 
    }
  }

  setHeaderName = (event) => {
    this.setState({
      header: {
        // name: event.target.value,
        ...this.state.header,
        [event.target.name]: event.target.value,
        
      },
      contacts: {
        [event.target.name]: event.target.value
      }
      // pression: profession
    }, () => console.log(event.target.value))
  }

  setContacts = event => {
    this.setState({
      contacts: {
        ...this.state.contacts,
        [event.target.name]: event.target.value,
        [event.target.name]: event.target.value,
        [event.target.name]: event.target.value,
        [event.target.name]: event.target.value,
      }
    })
  }

  setImageUrl = event => {
    if (event.target.files && event.target.files[0]) {
      this.setState({
        contacts: {
          imageUrl: URL.createObjectURL(event.target.files[0])
          // imageUrl: event.target.files[0]
        }
      }, () => console.log(this.state.contacts))
    }
  }

  setEducation = event => {
    this.setState({
      education: {
        ...this.state.education,
        [event.target.name]: event.target.value,
        [event.target.name]: event.target.value,
        duration: {
          ...this.state.education.duration,
          [event.target.name]: event.target.value,
          [event.target.name]: event.target.value,
        }
      }
    })
  }

  setInputs = event => {
    this.setState({
      skills: {
        skill: event.target.value
      }
    })
  }

  setSkills = (event) => {
    event.preventDefault()

    this.setState({
      skills: {
        skill: '',
      },
      skillsArray: this.state.skillsArray.concat(this.state.skills.skill),
    })
    Array.from(document.querySelectorAll('input')).forEach(
      input => input.value = ''
    )
  }

  render () {
    return (
      <div>
        <h1>CV Project</h1>
        <div className='resumes'>
          <div className='main-profile main-profile-left'>
            <div className='profession'>
              <HeaderCreate 
                gatherStates={this.state}
                setHeaderName={this.setHeaderName}
                setProfession={this.setProfession}
              />

              <ContactCreate
                setHeaderName={this.setHeaderName}
                setImageUrl={this.setImageUrl}
                setContacts={this.setContacts}
                gatherStates={this.state}
              />

              <EducationCreate
                gatherStates={this.state}
                setEducation={this.setEducation}
                setSkills={this.setSkills}
                setInputs={this.setInputs}
              />
            </div>

          </div>
          <div className='main-profile main-profile-right'>
            
            <div className='left-col'>
              <Contacts
                imageUrl={this.state.contacts.imageUrl}
                phoneNum={this.state.contacts.phoneNum}
                email={this.state.contacts.email}
                location={this.state.contacts.location}
                links={this.state.contacts.links}
              />
              <Education
                degree={this.state.education.degree}
                schoolName={this.state.education.schoolName}
                from={this.state.education.duration.from}
                to={this.state.education.duration.to}
                skillsArray={this.state.skillsArray}
              />
            </div>
            <div className='right-col'>
              <Header 
                name={this.state.header.name} 
                profession={this.state.header.profession}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
