import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { updateQuestion, showQuestion } from '../../api/questions'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const UpdateQuestion = (props) => {
  const [question, setQuestion] = useState({ topic: '', content: '' })
  const [updated, setUpdated] = useState(false)
  const { msgAlert } = props
  useEffect(() => {
    showQuestion(props.user, props.match.params.questionId)
      .then(res => setQuestion(res.data.show))
      .catch(console.error)
  }, [])

  const handleChange = (event) => {
    event.persist()
    setQuestion(prevQuestion => {
      const updateField = { [event.target.name]: event.target.value }
      const editedQuestion = Object.assign({}, prevQuestion, updateField)
      return editedQuestion
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    updateQuestion(props.user, question, props.match.params.questionId)
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
      <Redirect to={`/questions/${props.match.params.questionId}`} />
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
            // value={question.topic}
            placeholder="Updated topic here"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="content">
          <Form.Label>Update Content</Form.Label>
          <Form.Control
            type="text"
            name="content"
            // value={question.content}
            placeholder="Updated conetent here"
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit">Update</Button>
        <Link to={'question-update'}>
          <button>Cancel</button>
        </Link>
      </Form>
    </React.Fragment>
  )
}

export default UpdateQuestion
