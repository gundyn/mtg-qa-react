import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import SignOut from './components/SignOut/SignOut'
import ChangePassword from './components/ChangePassword/ChangePassword'
import CreateQuestion from './components/Questions/QuestionsCreate'
import IndexQuestions from './components/Questions/QuestionsIndex'
import ShowQuestion from './components/Questions/QuestionShow'
import UpdateQuestion from './components/Questions/QuestionUpdate'
import CreateAnswer from './components/Answers/AnswerCreate'
// import IndexAnswers from './components/Answers/AnswersIndex'
import LandingPage from './LandingPage/LandingPage'

class App extends Component {
  constructor () {
    super()
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <main className="container">
          <Route exact path='/' render={() => (
            <LandingPage />
          )} />
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/question-create' render={() => (
            <CreateQuestion msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/question-index' render={() => (
            <IndexQuestions msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/question-show/:questionId' render={({ match }) => (
            <ShowQuestion msgAlert={this.msgAlert} user={user} match={match} />
          )} />
          <AuthenticatedRoute user={user} path='/question-update/:questionId' render={({ match, history }) => (
            <UpdateQuestion msgAlert={this.msgAlert} user={user} match={match} history={history} />
          )} />
          <AuthenticatedRoute user={user} path='/answer-question' render={() => (
            <CreateAnswer msgAlert={this.msgAlert} user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
