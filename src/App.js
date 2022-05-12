import React, { Component } from 'react';
import './App.css';
import HeaderCreate from './FormCreate/HeaderCreate' 
import Header from './FormPreview/Header'

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
      skills: [],
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

  setHeaders = (event) => {
    this.setState({
      header: {
        name: event.target.value
      }
      // pression: profession
    }, () => console.log(event.target.value))
  }

  render () {
    return (
      <div>
        <h1>CV Project</h1>
        <div className='resumes'>
          <div className='main-profile main-profile-left'>
            <div className='profession'>
              <HeaderCreate 
                setHeaders={this.setHeaders}
              />
            </div>

          </div>
          <div className='main-profile main-profile-right'>
            
            <div className='left-col'>
              a
            </div>
            <div className='right-col'>
              <Header 
                header={this.state.header.name} 
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
