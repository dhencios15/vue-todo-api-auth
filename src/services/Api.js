import axios from 'axios'
import cookies from 'vue-cookies'

const prodURL = 'https://api-nodejs-todolist.herokuapp.com/'

export default () => {
  return axios.create({
    baseURL: prodURL,
    headers: {
      Authorization: `Bearer ${cookies.get('jwt')}`
    }
  })
}
