import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { createQuestion } from '../../api/questions'
// import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class CreateQuestion extends Component {
  constructor () {
    super()

    this.state = {
      topic: '',
      content: ''
    }
  }

handleChange = event => this.setState({
  [event.target.name]: event.target.value
})

onCreateQuestion = event => {
  event.preventDefault()

  const { msgAlert, history, user } = this.props
  console.log('user: ', this.props.user)

  createQuestion(this.state, user)
    .then(() => msgAlert({
      heading: 'Create Question Succcess',
      message: 'You have posted a question successfully!',
      variant: 'success'
    }))
    .then(() => history.push('/question-index'))
    .catch(error => {
      this.state({ topic: '', content: '' })
      msgAlert({
        heading: 'Question Creation Failed with error: ' + error.message,
        message: 'Question was not posted, please try again.',
        varient: 'danger'
      })
    })
}

render () {
  const { topic, content } = this.state

  return (
    <div>
      <h3>Post a question here!</h3>
      <Form onSubmit={this.onCreateQuestion}>
        <Form.Group controlId="topic">
          <Form.Label>Question Topic</Form.Label>
          <Form.Control
            required
            type="text"
            name="topic"
            value={topic}
            placeholder="Enter questions topic"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="content">
          <Form.Label>Question Content</Form.Label>
          <Form.Control
            required
            type="text"
            name="content"
            value={content}
            placeholder="Content of the question here"
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

export default withRouter(CreateQuestion)
