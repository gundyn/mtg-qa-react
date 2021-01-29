import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { showQuestion, deleteQuestion } from '../../api/questions'
import IndexAnswer from '../Answers/AnswersIndex'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

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

  if (question === null) {
    return (<div><p>Loading...</p></div>)
  }

  return (
    <div>
      <Card key={question.id} className="mb-2 mt-2" style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>question owner: {question.owner} | question id: {question.id}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{question.topic}</Card.Subtitle>
          <Card.Text>
            {question.content}
          </Card.Text>
          <br />
          {(user.id === question.owner) ? (
            <div>
              <Button varient="danger" onClick={handleDelete}>Delete</Button>{' '}
              <Button href={'#question-update/' + question.id}>Update</Button>{' '}
              <Button href={'#answer-question/' + question.id}>Answer</Button>{' '}
            </div>
          ) : ''}
        </Card.Body>
      </Card>
      <div>
        <IndexAnswer user={user} msgAlert={msgAlert} />
      </div>
    </div>
  )
}

export default withRouter(ShowQuestion)
