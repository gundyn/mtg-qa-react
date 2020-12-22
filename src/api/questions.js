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

export const updateQuestion = (user, form, questionId) => {
  return axios({
    url: `${apiUrl}/questions/${questionId}/`,
    method: 'PATCH',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: { question: form }
  })
}

export const deleteQuestion = (user, questionId) => {
  return axios({
    url: `${apiUrl}/questions/${questionId}/`,
    method: 'DELTE',
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}
