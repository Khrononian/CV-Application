import React, { useState, useRef } from 'react';
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

const App = () => {
  const [input, setInput] = useState({
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
  })
  let skillRef = useRef()
  let responsibilityRef = useRef()
  let newResponsibilityRef = useRef()

  

  const addExperience = () => {
    setInput(prevInput => ({
      ...prevInput,
      experienceValues:
        input.experienceValues.concat({
          jobName: '',
          company: '',
          location: '',
          from: '',
          to: '',
          responsibility: '',
          jobResponsibilities: [],
          id: prevInput.id = prevInput.data + 1
        }),
        data: prevInput.data + 1
    }))
  }

  const handleInputChanges = (event) => {
    setInput(prevInput => ({
      ...prevInput,
      experienceValues: prevInput.experienceValues.map(
        (item, index) => item.id === Number(event.nativeEvent.path[1].id) ? {
          ...item,
          [event.target.name]: event.target.value
        } : item
      )
    }))
  }

  const removeFormUI = event => {
    const mappedItems = input.experienceValues
    .filter(current => current.id !== Number(event.nativeEvent.path[1].id))
    .map((item, index) => item.id !== index ? {
      ...item,
      id: index,
    } : item)

    setInput(prevInput => ({
      ...prevInput,
      experienceValues: mappedItems,
      data: prevInput.data - 1
    }))
  }

  const setHeaderName = event => {
    setInput({
      ...input,
      header: {
        ...input.header,
        [event.target.name]: event.target.value
      }
    })
  }
  
  const setContacts = event => {
    setInput({
      ...input,
      contacts: {
        ...input.contacts,
        [event.target.name]: event.target.value,
      },
      
    })
  }

  const setImageUrl = event => {
    if (event.target.files && event.target.files[0]) {
      setInput({
        ...input,
        imageUrl: URL.createObjectURL(event.target.files[0])
      })
    }
  }

  const setEducation = event => {
    setInput({
      ...input,
      education: {
        ...input.education,
        [event.target.name]: event.target.value,
        duration: {
          ...input.education.duration,
          [event.target.name]: event.target.value
        }
      }
    })
  }

  const setSkillInputs = event => {
    setInput({
      ...input,
      skills: {
        skill: event.target.value
      }
    })
  }

  const setSkills = event => {
    event.preventDefault()

    if (skillRef.current.value === '') return

    setInput({
      ...input,
      skills: {
        skill: ''
      },
      skillsArray: input.skillsArray.concat(input.skills.skill),
    })
    
    skillRef.current.value = ''
  }

  const setExperience = event => {
    setInput({
      ...input,
      experience: {
        ...input.experienceValues,
        [event.target.name]: event.target.value,
        duration: {
          ...input.experience.duration,
          [event.target.name]: event.target.value
        }
      }
    })
  }

  const setResponsibility = event => {
    setInput({
      ...input,
      responsibility: event.target.value
    })
  }

  const setResponsibilities = event => {
    event.preventDefault();

    if (responsibilityRef.current.value === '') return

    setInput({
      ...input,
      responsibility: '',
      jobResponsibilities: input.jobResponsibilities.concat(input.responsibility)
    })
    responsibilityRef.current.value = ''
  }

  const setNewResponsibility = event => {
    setInput(prevInput => ({
      ...prevInput,
      experienceValues: prevInput.experienceValues
      .map((item, index) => item.id === Number(event.nativeEvent.path[2].id) ? Object.assign({}, item, { responsibility: event.target.value }) : item)
    }))
  }

  const setNewResponsibilities = event => {
    event.preventDefault()

    if (newResponsibilityRef.current.value === '') return

    setInput({
      ...input,
      experienceValues: input.experienceValues
      .map(current => current.id === Number(event.nativeEvent.path[2].id) ? 
      Object.assign({}, current, {
        responsibility: '',
        jobResponsibilities: current.jobResponsibilities.concat(current.responsibility)
      }) : current) 
    })

    newResponsibilityRef.current.value = ''
  }

  const createOutputUI = () => {
    const getInfo = input.experienceValues;

    return input.experienceValues.map((current, index) =>
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

  return (
    <div>
      <div>
        <h1>CV Project</h1>
          <div className='resumes'>
          <div className='main-profile main-profile-left'>
            <div className='profession'>
              <HeaderCreate 
                gatherStates={input}
                setHeaderName={setHeaderName}
              />

              <ContactCreate
                setHeaderName={setHeaderName}
                setImageUrl={setImageUrl}
                setContacts={setContacts}
                gatherStates={input}
              />

              <EducationCreate
                gatherStates={input}
                setEducation={setEducation}
                setSkills={setSkills}
                setSkillInputs={setSkillInputs}
                skillRef={skillRef}
              />

              <ExperienceCreate
                gatherStates={input}
                setExperience={setExperience}
                setResponsibility={setResponsibility}
                setResponsibilities={setResponsibilities}
                setNewResponsibility={setNewResponsibility}
                setNewResponsibilities={setNewResponsibilities}
                responsibilityRef={responsibilityRef}
                newResponsibilityRef={newResponsibilityRef}
                experienceValues={input.experienceValues}
                addExperience={addExperience}
                removeFormUI={removeFormUI}
                handleInputChanges={handleInputChanges}
              />
            </div>
          </div>
          <div className='main-profile main-profile-right'>
            <div className='left-col'>
              <Contacts
                imageUrl={input.imageUrl}
                phoneNum={input.contacts.phoneNum}
                email={input.contacts.email}
                location={input.contacts.location}
                links={input.contacts.links}
              />
              <Education
                degree={input.education.degree}
                schoolName={input.education.schoolName}
                from={input.education.duration.from}
                to={input.education.duration.to}
                skillsArray={input.skillsArray}
              />
            </div>
            <div className='right-col'>
              <Header 
                name={input.header.name} 
                profession={input.header.profession}
              />

              <Profile
                profile={input.profile}
              />

              <Experience
                jobName={input.experience.jobName}
                company={input.experience.company}
                location={input.experience.location}
                from={input.experience.duration.from}
                to={input.experience.duration.to}
                responsibilities={input.jobResponsibilities}
              />

              {createOutputUI()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;