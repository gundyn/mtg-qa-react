import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { showQuestion, deleteQuestion } from '../../api/questions'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ShowQuestion = (props) => {
  const [question, setQuestion] = useState(null)
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
    </div>
  )
}

export default withRouter(ShowQuestion)
