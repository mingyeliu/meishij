import axios from 'axios'
// import baseUrl from '@/api'

const api = {
  requestData (obj) {
    return new Promise((resolve,reject) => {
      axios.post('http://47.94.88.61:3000/api/login/insertAction',{
        username:obj.val1,
        password:obj.val2
      })
      .then(data=>{
        resolve(data)
      }).catch(err => console.log(err))
    })
  },
  requestData1 (val1) {
    console.log(val1)
    return new Promise((resolve,reject) => {
      axios.get('http://47.94.88.61:3000/api/login/search?username='+val1)
      .then(data=>{
        resolve(data)
        console.log(data)
      }).catch(err => console.log(err))
    })
  }
}

export default api