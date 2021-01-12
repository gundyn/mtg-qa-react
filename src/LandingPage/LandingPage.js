import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Background from './img/background_image.jpg'
import '../index.scss'

const LandingPage = props => (
  <Fragment>
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <img src={Background} className='theBanner' alt='art work for the card Phenax, God of Deception' />
        <p>description of website, lets see if the text stays in the center of the page woohoo!</p>
      </div>
    </div>
  </Fragment>
)

export default withRouter(LandingPage)
