import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'

import { indexAnswers } from '../../api/answers'
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'

// import ShowQuestion from '../Questions/QuestionShow'

class IndexAnswers extends Component {
  constructor () {
    super()
    this.state = {
      answers: null
    }
  }

  componentDidMount () {
    const { msgAlert, user } = this.props
    console.log('props: ', this.props)

    indexAnswers(user)

      .then(res => {
        this.setState({ answers: res.data.answer })
      })
      .catch(error => {
        msgAlert({
          heading: 'Index Answers failed with error: ' + error.message,
          message: 'Index failure, try again',
          variant: 'danger'
        })
      })
  }

  render () {
    const question = this.props
    let answerJsx
    if (!this.state.answers) {
      answerJsx = 'Loading...'
    } else if (this.state.answers.length === 0) {
      answerJsx = 'No answers to display :('
    } else {
      answerJsx = this.state.answers.map(answer => (
        <div key={answer.id}>
          {(answer.question === question.question) ? (
            <Card key={answer.id} className="mb-2" style={{ width: '100%' }}>
              <Card.Header>Posted by: {answer.owner} Answer Id: {answer.question}</Card.Header>
              <Card.Body>
                <Card.Title>{answer.title}</Card.Title>
                <Card.Text>{answer.answer}</Card.Text>
              </Card.Body>
            </Card>
          ) : ''}
        </div>
      ))
    }

    return (
      <div key="AnswersIndex">
        {answerJsx}
      </div>
    )
  }
}

export default IndexAnswers
