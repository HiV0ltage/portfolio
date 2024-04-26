tailwind.config = {
  theme: {
    screens: {
    sm: '0px',
    md: '700px',
    lg: '1200px',
    xl: '1600px'
    }
  }
}
var navMenuShown = false;
var gebi = function(e){return document.getElementById(e)};
var resize = function(){
  if (window.innerWidth<700){
    //small
  }else if (700<=window.innerWidth && window.innerWidth<1200){
    //med
  }else{
    //lg++
  }
}
window.onresize=resize;