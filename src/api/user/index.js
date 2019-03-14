import axios from 'axios'
import baseUrl from '@/api'

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
      axios.get(baseUrl +'/api/login/search?username='+val1)
      .then(data=>{
        resolve(data)
        console.log(data)
      }).catch(err => console.log(err))
    })
  },
  requestXinxi (obj) {
    return new Promise((resolve,reject) => {
      console.log(obj)
      axios.post(baseUrl + '/api/xinxi/insertAction',{
        tel:obj.phoneval,
        nickname:obj.Nicknameval,
        shengri:obj.datevalue,
        sex:obj.radiovalue,
        qianming:obj.TextArea
      })
      .then(data=>{
        resolve(data)
      }).catch(err => console.log(err))
    })
  },
  requestXinxiUpdate (obj) {
    return new Promise((resolve,reject) => {
      console.log(obj)
      axios.post(baseUrl + '/api/xinxi/updateAction',{
        tel:obj.phoneval,
        nickname:obj.Nicknameval,
        shengri:obj.datevalue,
        sex:obj.radiovalue,
        qianming:obj.TextArea
      })
      .then(data=>{
        resolve(data)
      }).catch(err => console.log(err))
    })
  },
  requestSearch (val1) {
    console.log(val1)
    return new Promise((resolve,reject) => {
      axios.get(baseUrl +'/api/xinxi/search?tel='+val1)
      .then(data=>{
        resolve(data.data)
        console.log(data)
      }).catch(err => console.log(err))
    })
  },
  requestSearch1 (val1) {
    console.log(val1)
    return new Promise((resolve,reject) => {
      axios.get(baseUrl +'/api/xinxi/search?tel='+val1)
      .then(data=>{
        resolve(data.data.data[0])
        console.log(data)
      }).catch(err => console.log(err))
    })
  }
}

export default api