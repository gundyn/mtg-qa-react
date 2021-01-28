import apiUrl from '../apiConfig'
import axios from 'axios'

export const createAnswer = (user, form) => {
  console.log('form: ', form)
  return axios({
    method: 'POST',
    url: apiUrl + '/answers/',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: { answer: form }
  })
}

export const indexAnswers = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/answers/',
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const showAnswer = (user, answerId) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/answers/' + answerId,
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}
