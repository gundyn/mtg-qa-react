import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { indexQuestions } from '../../api/questions'
// import messages from '../AutoDismissAlert/messages'
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'

class IndexQuestions extends Component {
  constructor () {
    super()
    this.state = {
      questions: null
    }
  }

  componentDidMount () {
    const { msgAlert, user } = this.props

    indexQuestions(user)

      .then(res => {
        this.setState({ questions: res.data.questions })
      })
      .catch(error => {
        msgAlert({
          heading: 'Index Questions Failed with error: ' + error.message,
          message: 'Index failure, try again',
          variant: 'danger'
        })
      })
  }

  render () {
    let questionJsx
    if (!this.state.questions) {
      questionJsx = 'Loading...'
    } else if (this.state.questions.length === 0) {
      questionJsx = 'No questions to display :('
    } else {
      questionJsx = this.state.questions.map(question => (

        <Card key={question.id} className="mb-2" style={{ width: '100%' }}>
          <Card.Header>Posted by: {question.owner}</Card.Header>
          <Card.Body>
            <Card.Title>{question.topic}</Card.Title>
            <Card.Text>{question.content}</Card.Text>
          </Card.Body>
        </Card>
      ))
    }

    return (
      <div>
        <h1>Question List</h1>
        {questionJsx}
      </div>
    )
  }
}

export default withRouter(IndexQuestions)
