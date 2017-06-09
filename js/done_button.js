var done1 = document.getElementById('done1');

var score = 0;

done1.onclick = function () {

  if (document.getElementById('b3').disabled == false) {
    score++;
  } else {
    score = score;
  }
  if (document.getElementById('b8').disabled == false) {
    score++;
  } else {
    score = score;
  }
  if (document.getElementById('b10').disabled == false) {
    score++;
  } else {
    score = score;
  }
  if (document.getElementById('b16').disabled == false){
    score++;
  } else {
    score = score;
  }
  // remove alert when a score counter is in place
  alert('Your score is ' + score);
}

var drag1 = document.getElementById('drag1');
var drag2 = document.getElementById('drag2');
var drag3 = document.getElementById('drag3');
var drag4 = document.getElementById('drag4');
var drag5 = document.getElementById('drag5');
// var drag6 = document.getElementById('drag6');
// var drag7 = document.getElementById('drag7');
// var drag8 = document.getElementById('drag8');
// var drag9 = document.getElementById('drag9');
// var drag10 = document.getElementById('drag10');
// var drag11= document.getElementById('drag11');
// var drag12 = document.getElementById('drag12');
// var drag13 = document.getElementById('drag13');
// var drag14 = document.getElementById('drag14');
// var drag15 = document.getElementById('drag15');
// var drag16 = document.getElementById('drag16');
// var drag17 = document.getElementById('drag17');
// var drag18 = document.getElementById('drag18');

var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var div3 = document.getElementById('div3');
var div4 = document.getElementById('div4');
var div5 = document.getElementById('div5');

function score2() {
  if ( $("#drag4").parents("#div1").length == 1 && $("#drag1").parents("#div2").length == 1 && $("#drag5").parents("#div3").length == 1 && $("#drag3").parents("#div4").length == 1 && $("#drag2").parents("#div5").length == 1 && $("#drag9").parents("#div6").length == 1 && $("#drag10").parents("#div7").length == 1 && $("#drag7").parents("#div9").length == 1 && $("#drag8").parents("#div10").length == 1 && $("#drag1").parents("#div2").length == 1 && $("#drag13").parents("#div11").length == 1 && $("#drag14").parents("#div12").length == 1 && $("#drag15").parents("#div13").length == 1 && $("#drag11").parents("#div14").length == 1 && $("#drag12").parents("#div15").length == 1 && $("#drag18").parents("#div16").length == 1 && $("#drag17").parents("#div17").length == 1 && $("#drag16").parents("#div18").length == 1 && $("#drag20").parents("#div19").length == 1 && $("#drag19").parents("#div20").length == 1) {

     score++;


  } else {

     score = score;
     
  }
}

function score3() {
  if ( $("#drag22").parents("#div21").length == 1 && $("#drag25").parents("#div22").length == 1 && $("#drag23").parents("#div23").length == 1 && $("#drag24").parents("#div24").length == 1 && $("#drag21").parents("#div25").length == 1 && $("#drag29").parents("#div26").length == 1 && $("#drag30").parents("#div27").length == 1 && $("#drag26").parents("#div28").length == 1 && $("#drag27").parents("#div29").length == 1 && $("#drag28").parents("#div30").length == 1 ) {
    score++;
    alert(score);
  } else {

     score = score;
     alert(score);
  }
}
