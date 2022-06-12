let accroding = document.getElementsByClassName("contentbx");
for (let i = 0; i < accroding.length; i++) {
  accroding[i].addEventListener("click",function(){
    this.classList.toggle("active");
  }) ;
}
