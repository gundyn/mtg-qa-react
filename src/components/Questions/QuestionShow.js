import React, { useState, useEffect } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { showQuestion, deleteQuestion, updateQuestion } from '../../api/questions'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ShowQuestion = (props) => {
  const [question, setQuestion] = useState(null)
  const [updated, setUpdated] = useState(false)
  const { user, msgAlert, match, history } = props
  useEffect(() => {
    showQuestion(user, match.params.questionId)
      .then(res => {
        setQuestion(res.data.question)
      })
      .catch(error => {
        msgAlert({
          heading: 'Show Question Failed with error: ' + error.message,
          message: 'Show failure, try again',
          varient: 'danger'
        })
      })
  }, [])

  const handleChange = (event) => {
    const updateField = { [event.target.name]: event.target.value }
    setQuestion(oldQuestion => {
      const updatedQuestion = { ...oldQuestion, ...updateField }
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
      <Redirect to={`/questions/${match.params.questionId}`} />
    )
  }

  const handleDelete = () => {
    deleteQuestion(user, match.params.questionId)
      .then(() => {
        msgAlert({
          heading: 'Question Deleted',
          message: 'Back to list of questions',
          varient: 'success'
        })
      })
      .then(() => history.push('/question-index'))
      .catch(error => {
        msgAlert({
          heading: 'Deletion Failed with error: ' + error.message,
          message: 'Delete failure, try again',
          varient: 'danger'
        })
      })
  }

  return (
    <div>
      {question ? (
        <Container>
          <Card key={question.id} className="Card">
            <Row>
              <Col sm={6}>
                <Card.Body>
                  <Card.Title>{question.owner}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">${question.title}</Card.Subtitle>
                  <Card.Text>
                    {question.content}
                  </Card.Text>
                  <br />
                  {(user._id === question.owner) ? (
                    <div>
                      <Button varient="danger" onClick={handleDelete}>Delete</Button>{' '}
                      <Button href={'#question-update/' + question.id}>Update Question</Button>{' '}
                    </div>
                  ) : ''}
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Container>
      ) : 'Loading...'}
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
          <Button type="submit">Update Question</Button>
        </Form>
      </React.Fragment>
    </div>

  )
}

export default withRouter(ShowQuestion)
