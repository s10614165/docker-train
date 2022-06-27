console.log(1);

axios.get('https://fathomless-brushlands-42339.herokuapp.com/todo1')
  .then(function (response) {
    console.log('資料有回傳了');
    console.log(response.data);
  });






