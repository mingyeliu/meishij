import axios from 'axios';
// const baseUrl = 'https://www.daxunxun.com';

const api = {
  requestData (type) {
    return new Promise((resolve, reject) =>{
      axios.get('http://47.94.88.61:3000/api/tiaoliao/search?type=' + type)
      .then(data => {
        // console.log(data)
        resolve(data.data.data)
      })
      .catch(err => {
        reject(err)
      })
    })
  }
}
export default api