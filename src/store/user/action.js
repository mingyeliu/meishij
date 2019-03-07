import api from '@/api/user';


const requestData = (val1,val2) => (dispatch, getState) => {
  return new Promise ((resolve,reject) =>{
    api.requestData({val1, val2}).then(data => {
      console.log(data)
      dispatch({type: 'Denglu',data})
      resolve(data.data.data)
      })
  })
}
const requestData1 = (val1) => (dispatch, getState) => {
  console.log(val1)
  return new Promise((reslove,reject)=>{
    api.requestData1(val1).then(data => {
      console.log(data)
      dispatch({type: 'Denglu1',data})
      reslove(data.data)
      })
  })
}

export default {requestData,requestData1}
