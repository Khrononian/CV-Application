import React, { Component } from 'react';
import './App.css';
import HeaderCreate from './FormCreate/HeaderCreate' 
import ContactCreate from './FormCreate/ContactCreate'
import EducationCreate from './FormCreate/EducationCreate'
import ExperienceCreate from './FormCreate/ExperienceCreate'
import Header from './FormPreview/Header'
import Contacts from './FormPreview/Contacts'
import Education from './FormPreview/Education'
import Profile from './FormPreview/Profile' 
import Experience from './FormPreview/Experience'

class App extends Component {
  constructor () {
    super()

    this.skillRef = React.createRef();
    this.responsibilityRef = React.createRef()
    this.newResponsibilityRef = React.createRef()

    this.state = {
      header: {
        name: 'Khrononian',
        profession: 'Frontend Developer'
      },
      contacts: {
        phoneNum: '111-111-1111',
        email: 'Alv.Barnes@gmail.com',
        location: 'US',
        links: 'github.com/Khrononian'
      },
      imageUrl: 'https://imgs.search.brave.com/ANm-hlwm6O9bbxu1dym0adqET2SEA6oc2Di4RQyUQ6E/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5mVnpkS0Uy/RVBaekI1UGlJMXB2/YUZRSGFIYSZwaWQ9/QXBp',
      education: {
        degree: 'High School Diploma',
        schoolName: 'High School',
        duration: {
          from: '',
          to: ''
        }
      },
      skills: {
        skill: '',
      },
      skillsArray: ['Patience', 'Optimism', 'Resilience', 'Detailed'],
      profile: 'Write a powerful performance summary here. Highlight your most valuabel skills, qualifications, achievments, credentials and other distinguishing information as it relates to and supports your current objective.',
      
      experience: {
        jobName: 'Customer Service Frontend',
        company: 'Whole Foods Market',
        location: 'North Miami, FL',
        duration: {
          from: '2021',
          to: '2022'
        },
      },
      responsibility: '',
      jobResponsibilities: ['Customer service as cashier', 'Answering a guests question', 'Cash handling experience'],
      experienceValues: [
        {
          jobName: '',
          company: '',
          location: '',
          from: '',
          to: '',
          responsibility: '',
          jobResponsibilities: [],
          id: 0
        }
      ],
      data: 0
    }
  }

  addExperience = () => {
    this.setState(prevState => ({
      experienceValues: 
        this.state.experienceValues.concat({
          jobName: '',
          company: '',
          location: '',
          from: '',
          to: '',
          responsibility: '',
          jobResponsibilities: [],
          id: prevState.id = prevState.data + 1
        }),
      data: prevState.data + 1
    }))
  }

  handleInputChanges = (event) => {
    this.setState(prevState => ({
      experienceValues: prevState.experienceValues.map(
        (item, index) => item.id === Number( event.nativeEvent.path[1].id) ? {
          ...item,
          [event.target.name]: event.target.value
        } : item,
        
      )
    }))
  }

  removeFormUI = event => {
    const mappedItems = this.state.experienceValues
    .filter(current => current.id !== Number(event.nativeEvent.path[1].id))
    .map((item, index) => item.id !== index ? {
      ...item,
      id: index,
    } : item
    )

    this.setState(prevState => ({
      experienceValues: mappedItems,
      data: prevState.data - 1
    }))
  }

  setHeaderName = (event) => {
    this.setState({
      header: {
        ...this.state.header,
        [event.target.name]: event.target.value,
        
      },
    })
  }

  setContacts = event => {
    this.setState({
      contacts: {
        ...this.state.contacts,
        [event.target.name]: event.target.value,
      },
      [event.target.name]: event.target.value
    })
  }

  setImageUrl = event => {
    if (event.target.files && event.target.files[0]) {
      this.setState({
        imageUrl: URL.createObjectURL(event.target.files[0])
        
      })
    }
  }

  setEducation = event => {
    this.setState({
      education: {
        ...this.state.education,
        [event.target.name]: event.target.value,
        duration: {
          ...this.state.education.duration,
          [event.target.name]: event.target.value,
        }
      },
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

    if (this.skillRef.current.value === '') return
    this.setState({
      skills: {
        skill: '',
      },
      skillsArray: this.state.skillsArray.concat(this.state.skills.skill),
    })
    this.skillRef.current.value = ''
  }

  setExperience = event => {
    this.setState({
      experience: {
        ...this.state.experience,
        [event.target.name]: event.target.value,
        duration: {
          ...this.state.experience.duration,
          [event.target.name]: event.target.value,
        }
      },
    })
  }

  setResponsibility = event => {
    this.setState({
      responsibility: event.target.value
    })
  }

  setNewResponsibility = event => {
    this.setState( prevState => ({
      experienceValues: prevState.experienceValues
      .map((item, index) => item.id === Number(event.nativeEvent.path[2].id) ? Object.assign({}, item, { responsibility: event.target.value }) : item)
    }))
  }

  setResponsibilities = event => {
    event.preventDefault()

    if (this.responsibilityRef.current.value === '') return

    this.setState({
      responsibility: '',
      jobResponsibilities: this.state.jobResponsibilities.concat(this.state.responsibility)
    })

    this.responsibilityRef.current.value = ''
  }

  setNewResponsibilities = event => {
    event.preventDefault()

    if (this.newResponsibilityRef.current.value === '') return

    this.setState({
      experienceValues: this.state.experienceValues
      .map(current => current.id === Number(event.nativeEvent.path[2].id) ?
      Object.assign({}, current, { 
        responsibility: '',
        jobResponsibilities: current.jobResponsibilities.concat(current.responsibility) 
      }) : current)
    })

    this.newResponsibilityRef.current.value = ''
  }

  createOutputUI = () => {
    const getInfo = this.state.experienceValues
    return this.state.experienceValues.map((current, index) => 
        <div className='experience heading' key={index} id={index}>
            <h5>{getInfo[index].jobName}</h5>
            <div className='experience-header'>
                <h5>{getInfo[index].company}</h5>
                |
                <h5>{getInfo[index].location}</h5>
                |
                <h5>{getInfo[index].from} - {getInfo[index].to}</h5>
            </div>
            <p>Summarize your main responsibilities using past tense and provide information
            about the organization
            </p>
            <ul className='responsibility-list'>
                {getInfo[index].jobResponsibilities.map((task, index) => {
                    return <li key={index}>{task}</li>
                })}
            </ul>
        </div>
        
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
                skillRef={this.skillRef}
              />

              <ExperienceCreate
                gatherStates={this.state}
                setExperience={this.setExperience}
                setResponsibility={this.setResponsibility}
                setResponsibilities={this.setResponsibilities}
                setNewResponsibility={this.setNewResponsibility}
                setNewResponsibilities={this.setNewResponsibilities}
                responsibilityRef={this.responsibilityRef}
                newResponsibilityRef={this.newResponsibilityRef}
                experienceValues={this.state.experienceValues}
                addExperience={this.addExperience}
                removeFormUI={this.removeFormUI}
                handleInputChanges={this.handleInputChanges}
              />
            </div>

          </div>
          <div className='main-profile main-profile-right'>
            
            <div className='left-col'>
              <Contacts
                imageUrl={this.state.imageUrl}
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

              <Profile
                profile={this.state.profile}
              />

              <Experience
                jobName={this.state.experience.jobName}
                company={this.state.experience.company}
                location={this.state.experience.location}
                from={this.state.experience.duration.from}
                to={this.state.experience.duration.to}
                responsibilities={this.state.jobResponsibilities}
              />

              {this.createOutputUI()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;