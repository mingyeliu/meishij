import axios from 'axios';
// import baseUrl from '@/api';

const api = {
  requestData () {
    return new Promise((resolve, reject) => {
      axios.get('http://47.94.88.61:3000/api/allZHcai?pageCode=7&pageNumber=128 ')
        .then(data => {
          // console.log(data.data.data);
          resolve(data.data.data);
        })
        .catch(err => {
          console.log(err);
        })
    })
  },
  requestJCDatatype(caitype,pageCode) {
    return new Promise((resolve, reject) => {
      axios.get('http://47.94.88.61:3000/api/allJCcai/search_caitype?caitype='+caitype+'&pageCode='+pageCode+'&pageNumber=12')
        .then(data => {
          // console.log(data.data.data);
          resolve(data.data.data);
        })
        .catch(err => {
          console.log(err);
        })
    })
  },
  requestJCDatatit(title) {
    return new Promise((resolve, reject) => {
      axios.get('http://47.94.88.61:3000/api/allJCcai/search_tit?title='+title)
        .then(data => {
          // console.log(data.data.data);
          resolve(data.data.data);
        })
        .catch(err => {
          console.log(err);
        })
    })
  },
  requestZHDatatype(caitype,pageCode) {
    return new Promise((resolve, reject) => {
      axios.get('http://47.94.88.61:3000/api/allZHcai/search_caitype?caitype='+caitype+'&pageCode='+pageCode+'&pageNumber=12')
        .then(data => {
          // console.log(data.data.data);
          resolve(data.data.data);
        })
        .catch(err => {
          console.log(err);
        })
    })
  },
  requestZHDatatit(title) {
    return new Promise((resolve, reject) => {
      axios.get('http://47.94.88.61:3000/api/allZHcai/search_tit?title='+title)
        .then(data => {
          // console.log(data.data.data);
          resolve(data.data.data);
        })
        .catch(err => {
          console.log(err);
        })
    })
  },
  requestAllCai(id) {
    return new Promise((resolve, reject) => {
      axios.get('http://47.94.88.61:3000/api/allCai/detail?id='+id)
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
