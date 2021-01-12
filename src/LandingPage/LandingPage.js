import React from 'react'
import { withRouter } from 'react-router-dom'
import Background from './img/background_image.jpg'
import '../index.scss'

const LandingPage = props => {
  const landingPageStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    height: '100vh',
    backgroundPosition: 'center'
  }

  return (
    <div style={landingPageStyles}>
      <div>
        <p>description of the site goes here</p>
      </div>
    </div>
  )
}
export default withRouter(LandingPage)
