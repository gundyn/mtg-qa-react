import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexQuestions = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/questions/',
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const showQuestion = (user, questionId) => {
  console.log('questionId: ', questionId)
  return axios({
    method: 'GET',
    url: apiUrl + '/questions/' + questionId,
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const createQuestion = (user, form) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/questions/',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: {
      question: {
        topic: form.topic,
        content: form.content
      }
    }
  })
}

export const updateQuestion = (user, form, productId) => {
  return axios({
    url: apiUrl + '/questions/ID/',
    method: 'PATCH',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: {
      topic: form.topic,
      content: form.content
    }
  })
}

export const deleteQuestion = (user) => {
  return axios({
    url: apiUrl + '/questions/',
    method: 'DELTE',
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}
