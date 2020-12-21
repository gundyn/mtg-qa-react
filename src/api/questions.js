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

export const showQuestion = (user, id) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/questions/id/',
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const createQuestion = (user, form) => {
  console.log('user: ', user)
  return axios({
    method: 'POST',
    url: apiUrl + '/questions/',
    headers: {
      Authorization: `Token ${user.token}`
    },
    data: {
      question: {
        topic: form.topic,
        content: form.content
      }
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
