// https://hexschool.github.io/ajaxHomework/data.json
let data = [];

function init() {
  axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json')
    .then(function (response) {
      data = response.data;
      renderData(data);
    });
}
function renderData(data) {
  const list = document.querySelector(".ticketCard-area");
  let str = '';
  data.forEach(function (item) {
    console.log(item);
    str += `<li class="ticketCard">
        <div class="ticketCard-img">
          <a href="#">
            <img src="${item.imgUrl}" alt="">
          </a>
          <div class="ticketCard-region">${item.area}</div>
          <div class="ticketCard-rank">${item.rate}</div>
        </div>
        <div class="ticketCard-content">
          <div>
            <h3>
              <a href="#" class="ticketCard-name">${item.name}</a>
            </h3>
            <p class="ticketCard-description">
              ${item.description}
            </p>
          </div>
          <div class="ticketCard-info">
            <p class="ticketCard-num">
              <span><i class="fas fa-exclamation-circle"></i></span>
              剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
            </p>
            <p class="ticketCard-price">
              TWD <span id="ticketCard-price">$${item.price}</span>
            </p>
          </div>
        </div>
      </li>`
  })
  list.innerHTML = str;
}
init();

const addbutton = document.querySelector('.addTicket-btn ');
addbutton.addEventListener('click', function () {
  addnewdata();


})
function addnewdata() {
  let newdata = [];
  const ticketName = document.querySelector('#ticketName');
  const ticketImgUrl = document.querySelector('#ticketImgUrl');
  const ticketRegion = document.querySelector('#ticketRegion');
  const ticketPrice = document.querySelector('#ticketPrice');
  const ticketNum = document.querySelector('#ticketNum');
  const ticketRate = document.querySelector('#ticketRate');
  const ticketDescription = document.querySelector('#ticketDescription');
  data.push({
    name: ticketName.value,
    imgUrl: ticketImgUrl.value,
    rate: ticketRate.value,
    area: ticketRegion.value,
    price: ticketPrice.value,
    description: ticketDescription.value,
    group: ticketNum.value
  });
  renderData(data);
}

