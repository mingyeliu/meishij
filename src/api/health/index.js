import axios from 'axios';
// import baseUrl from '@/api';

const api = {
  requestData () {
    return new Promise((resolve, reject) => {
      axios.get('http://47.94.88.61:3000/api/allZHcai?pageNumber=30')
        .then(data => {
          // console.log(data.data.data);
          resolve(data.data.data);
        })
        .catch(err => {
          console.log(err);
        })
    })
  }
}

export default api;
