function setColor(ex1,color){

    var property=document.getElementById(ex1);
   if (window.getComputedStyle(property).backgroundColor == 'rgb(236, 102, 66)') {
      property.style.backgroundColor= color;
   }
    else {
      property.style.backgroundColor = "#faf1ec";
    }
  }
