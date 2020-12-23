import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { createAnswer } from '../../api/answers'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class CreateAnswer extends Component {
  constructor () {
    super()

    this.state = {
      title: '',
      answer: '',
      question: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onCreateAnswer = event => {
    event.preventDefault()

    const { msgAlert, history, user } = this.props

    createAnswer(user, this.state)
      .then(() => msgAlert({
        heading: 'Create Answer Success',
        message: 'Great answer!',
        variant: 'success'
      }))
      .then(() => history.push('/question-show'))
      .catch(error => {
        msgAlert({
          heading: 'Answer Creation Failed with error: ' + error.message,
          message: 'No Bueno',
          variant: 'danger'
        })
      })
  }

  render () {
    const { title, answer, question } = this.state

    return (
      <div>
        <h3>Post an answer here!</h3>
        <Form onSubmit={this.onCreateAnswer}>
          <Form.Group controlId="answer_title">
            <Form.Label>Answer Title</Form.Label>
            <Form.Control
              required
              type="text"
              name="title"
              value={title}
              placeholder="Enter answer title"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="answer">
            <Form.Label>Answer Content</Form.Label>
            <Form.Control
              required
              type="text"
              name="answer"
              value={answer}
              placeholder="Content of answer here"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="question">
            <Form.Label>Question Id</Form.Label>
            <Form.Control
              required
              type="number"
              name="question"
              value={question}
              placeholder="Content of answer here"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
          >
          Post
          </Button>
        </Form>
      </div>
    )
  }
}

export default withRouter(CreateAnswer)
