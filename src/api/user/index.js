import axios from 'axios';
import baseUrl from '@/api';

const api = {
  requestData (obj) {
    return new Promise((resolve,reject) => {
      axios.post(baseUrl + '/api/login/insertAction',{
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
      axios.get(baseUrl + '/api/login/search?username='+val1)
      .then(data=>{
        resolve(data)
        console.log(data)
      }).catch(err => console.log(err))
    })
  }
}

export default api