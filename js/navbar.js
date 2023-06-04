const tracos = document.querySelector('.tracos');

tracos.addEventListener('click', function () {
    this.classList.toggle('is-active');
});


function Menu(){
    if (document.querySelector('.menu2').style.display == "none"){
     document.querySelector('.menu2').style.display = "block";
    }else{
     document.querySelector('.menu2').style.display = "none";
    }
 }

function Menuzin(x) {
    if (x.matches) { 
      document.querySelector('.menu2').style.display = "none";
    }
  }
  
  var x = window.matchMedia("(min-width: 860px)")
  Menuzin(x) 
  x.addListener(Menuzin)
