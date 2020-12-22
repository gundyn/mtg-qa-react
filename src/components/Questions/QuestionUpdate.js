import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { showQuestion, updateQuestion } from '../../api/questions'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const UpdateQuestion = props => {
  const [question, setQuestion] = useState({ topic: '', content: '' })
  const [updated, setUpdated] = useState(false)
  const { user, msgAlert, match } = props
  useEffect(() => {
    showQuestion(user, match.params.questionId)
      .then(res => setQuestion(res.data.question))
      .catch(console.error)
  }, [])

  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value }
    setQuestion(oldQuestion => {
      const updatedQuestion = { ...oldQuestion, ...updatedField }
      return updatedQuestion
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    updateQuestion(user, question, match.params.questionId)
      .then(() => setUpdated(true))
      .then(() => msgAlert({
        heading: 'Update Successful',
        message: 'are you sure you spelled everything correctly?',
        varient: 'success'
      }))
      .catch(error => msgAlert({
        heading: 'Update Failed with error: ' + error.message,
        message: 'try again',
        varient: 'danger'
      }))
  }

  if (updated) {
    return (
      <Redirect to={`/question-show/${match.params.questionId}`} />
    )
  }

  return (
    <React.Fragment>
      <h3>Update Question</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="topic">
          <Form.Label>Update Topic</Form.Label>
          <Form.Control
            type="text"
            name="topic"
            value={question.topic}
            placeholder="Updated topic here"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="content">
          <Form.Label>Update Content</Form.Label>
          <Form.Control
            type="text"
            name="content"
            value={question.content}
            placeholder="Updated conetent here"
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit">Update</Button>
        <Link to={'/question-index'}>
          <button>Cancel</button>
        </Link>
      </Form>
    </React.Fragment>
  )
}

export default UpdateQuestion
