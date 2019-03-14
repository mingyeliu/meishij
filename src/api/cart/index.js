import axios from 'axios';
import baseUrl from '@/api';

const api = {
  requestInsertData(userId,goods) {
    return new Promise((resolve,reject)=>{
      axios.post(baseUrl+'/api/reactCart/insertAction',{
        userid:userId,
        goods:goods
      }).then(data=>{
        resolve(data.data)
      }).catch(err => console.log(err))
    })
  },
  requestUpdateData(userId,goods) {
    return new Promise((resolve,reject)=>{
      axios.post(baseUrl +'/api/reactCart/UpdateAction',{
        userid:userId,
        goods:goods
      }).then(data=>{
        resolve(data.data)
      }).catch(err => console.log(err))
    })
  },
  requestAllData() {
    return new Promise((resolve,reject)=>{
      axios.get('http://47.94.88.61:3000/api/reactCart').then(data=>{
        resolve(data.data)
      }).catch(err => console.log(err))
    })
  },
  requestData(userId) {
    return new Promise((resolve,reject)=>{
      axios.get(baseUrl +'/api/reactCart/search?userid='+userId).then(data=>{
        resolve(data.data)
      }).catch(err => console.log(err))
    })
  },
  requestInsertOrder(userId,goods) {
    return new Promise((resolve,reject)=>{
      axios.post(baseUrl+'/api/OrderCart/insertAction',{
        userid:userId,
        goods:goods
      }).then(data=>{
        resolve(data.data)
      }).catch(err => console.log(err))
    })
  }
}

export default api;