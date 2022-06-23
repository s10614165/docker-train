let data = [];

const listinput = document.querySelector('#ListInput');
const addbtn = document.querySelector('#ListAdd');
const listul = document.querySelector('.listul');
const deletebtn = document.querySelectorAll('.vector');

// 綁定
addbtn.addEventListener("click", function () {
  if (listinput.value === '') {

  } else {
    data.push({ content: listinput.value });
    listinput.value = '';
    addlist(data);

  }
})
listinput.addEventListener('keypress', function (e) {
  if (e.key === "Enter") {
    if (listinput.value === '') {

    } else {
      data.push({ content: listinput.value });
      listinput.value = '';
      addlist(data);;

    }

  }


})
listul.addEventListener("click", function (e) {
  if (e.target.getAttribute("class") === 'vector') {
    let num = e.target.getAttribute("data-num");
    data.splice(num, 1);
    addlist(data);
  };
  // 刪除資料
  if (e.target.getAttribute("class") === 'donebox') {
    const checkbox = document.querySelectorAll(".donebox");
    let num = e.target.getAttribute("data-num");
    // console.log(num);
    data.forEach(function (item, index) {
      if (checkbox[index].checked === true) {
        // data.push(item[num].Ischeck = 'checked');

        item.Ischeck = true;

        // console.log(item, index);

        return
      } else if (checkbox[index].checked === false) {
        // data.push(item[num].Ischeck = "");
        item.Ischeck = false;

        // console.log(item.content, index);
      }

    })
    console.log(data);
    addlist(data);
  }
  // 增加斜線 完成
})

// 從input 新增


function addlist(ary) {
  let str = '';
  ary.forEach(function (item, index) {
    if (item.Ischeck) {
      str += `<li class="listli"><input type="checkbox" name="" class="donebox" id="donebox" data-num=${index} checked=checked> <label for="donebox" class="lilabel">${item.content}</label> <input type="button" value=""
              class= "vector" data-num=${index}></li >`;
    } else {
      str += `<li class="listli"><input type="checkbox" name="" class="donebox" id="donebox" data-num=${index}><label for="donebox" class="lilabel">${item.content}</label> <input type="button" value=""
              class= "vector" data-num=${index}></li >`;
    }



    // console.log(str);
    // console.log(ary);
    // console.log(item.content);
    // console.log(data);
  });

  listul.innerHTML = str;

}

// function checklist(ary) {
//   let str = '';
//   ary.forEach(function (item, index) {
//     if (item.Ischeck) {
//       str += `<li class="listli"><input type="checkbox" name="" class="donebox" id="donebox" data-num=${index} checked=checked> <label for="donebox" class="lilabel">${item.content}</label> <input type="button" value=""
//               class= "vector" data-num=${index}></li >`;
//     } else {
//       str += `<li class="listli"><input type="checkbox" name="" class="donebox" id="donebox" data-num=${index}><label for="donebox" class="lilabel">${item.content}</label> <input type="button" value=""
//               class= "vector" data-num=${index}></li >`;
//     }



//     // console.log(str);
//     // console.log(ary);
//     // console.log(item.content);
//     // console.log(data);
//   });
//   console.log(str);
//   listul.innerHTML = str;

// }

