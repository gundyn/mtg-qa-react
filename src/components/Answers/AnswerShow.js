import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { showAnswer } from '../../api/answers'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const ShowAnswer = (props) => {
  const [answer, setAnswer] = useState(null)
  const { user, msgAlert, match } = props
  useEffect(() => {
    showAnswer(user, match.params.answerId)
      .then(res => {
        setAnswer(res.data.answer)
      })
      .catch(error => {
        msgAlert({
          heading: 'Show Answer Failed with error: ' + error.message,
          message: 'Show failure, try again',
          varient: 'danger'
        })
      })
  }, [])

  if (answer === null) {
    return (<div><p>Loading...</p></div>)
  }

  return (
    <div>
      <Card key={answer.id} className="mb-2 mt-2" style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Posted by: {answer.title}</Card.Title>
          <Card.Text>{answer.answer}</Card.Text>
          <br />
          {(user.id === answer.owner) ? (
            <div>
              <Button varient="danger">Delete</Button>
              <Button>Edit</Button>
            </div>
          ) : ''}
        </Card.Body>
      </Card>
    </div>
  )
}

export default withRouter(ShowAnswer)
