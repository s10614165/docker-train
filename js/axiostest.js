// const axios = require('axios');


const fns = {
  fetchData: (num = 1) => {
    return axios
      .get(`https://jsonplaceholder.typicode.com/todos/${num}`)
      .then(res => res.data)
      .catch(err => 'error');
  }
};

console.log(fns.fetchData());