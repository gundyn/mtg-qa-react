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

export const showQuestion = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/questions/id/',
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const createQuestion = (user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/questions/',
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}
