const tracos = document.querySelector('.tracos');

tracos.addEventListener('click', function () {
    this.classList.toggle('is-active');
});


function Menu(){
    if (document.querySelector('.menu2').style.display == "block"){
     document.querySelector('.menu2').style.display = "none";
    }else{
     document.querySelector('.menu2').style.display = "block";
    }
 }

function Menuzin(x) {
      document.querySelector('.menu2').style.display = "none";
    } 
      
  var x = window.matchMedia("(min-width: 860px)")
  Menuzin(x) 
  x.addListener(Menuzin)
