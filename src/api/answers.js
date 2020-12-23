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
