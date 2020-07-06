import axios from 'axios'

export const GetCards = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:8080')
      .then(response => resolve(response.data))
      .catch(err => reject(err))
  })
}
