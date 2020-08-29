import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-478bf.firebaseio.com/'
})