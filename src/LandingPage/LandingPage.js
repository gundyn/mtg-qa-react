import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Background from './img/background_image.jpg'
import '../index.scss'

const LandingPage = props => (
  <Fragment>
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <img src={Background} className='theBanner' alt='art work for the card Phenax, God of Deception' />
        <h1>Welcome!</h1>
        <p>This site is a place to ask questions and recieve answers to all of your Magic the Gathering questions. When you and your friends need an unbiased ruling on how cards interact come here to ask fellow wizards!</p>
      </div>
    </div>
  </Fragment>
)

export default withRouter(LandingPage)
