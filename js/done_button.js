
var score = 0;

function score1() {
  document.getElementById('done1').disabled = true;
   if (
    document.getElementById('b1').disabled === false && document.getElementById('b2').disabled === false && document.getElementById('b3').disabled === false && document.getElementById('b4').disabled === false &&
    document.getElementById('b5').disabled === false && document.getElementById('b6').disabled === false && document.getElementById('b7').disabled === false && document.getElementById('b8').disabled === false &&
    document.getElementById('b9').disabled === false && document.getElementById('b10').disabled === false && document.getElementById('b11').disabled === false && document.getElementById('b12').disabled === false &&
    document.getElementById('b13').disabled === false && document.getElementById('b14').disabled === false && document.getElementById('b15').disabled === false && document.getElementById('b16').disabled === false
  ) {
    score = 0;
    if (score < 3) {document.getElementById('done1').disabled = true; alert('Student is Step 1');}
  }
  if (
    document.getElementById('b1').disabled === true && document.getElementById('b2').disabled === true && document.getElementById('b3').disabled === false && document.getElementById('b4').disabled === true &&
    document.getElementById('b5').disabled === true && document.getElementById('b6').disabled === true && document.getElementById('b7').disabled === true && document.getElementById('b8').disabled === false &&
    document.getElementById('b9').disabled === true && document.getElementById('b10').disabled === false && document.getElementById('b11').disabled === true && document.getElementById('b12').disabled === true &&
    document.getElementById('b13').disabled === true && document.getElementById('b14').disabled === true && document.getElementById('b15').disabled === true && document.getElementById('b16').disabled === false
  )
{document.getElementById('check1').disabled = false;}

}

function score2() {

  if ( $("#drag4").parents("#div1").length == 1 && $("#drag1").parents("#div2").length == 1 && $("#drag5").parents("#div3").length == 1 && $("#drag3").parents("#div4").length == 1 && $("#drag2").parents("#div5").length == 1 && $("#drag9").parents("#div6").length == 1 && $("#drag10").parents("#div7").length == 1 && $("#drag7").parents("#div9").length == 1 && $("#drag8").parents("#div10").length == 1 && $("#drag1").parents("#div2").length == 1 && $("#drag13").parents("#div11").length == 1 && $("#drag14").parents("#div12").length == 1 && $("#drag15").parents("#div13").length == 1 && $("#drag11").parents("#div14").length == 1 && $("#drag12").parents("#div15").length == 1 && $("#drag18").parents("#div16").length == 1 && $("#drag17").parents("#div17").length == 1 && $("#drag16").parents("#div18").length == 1 && $("#drag20").parents("#div19").length == 1 && $("#drag19").parents("#div20").length == 1) {
     score++;
  } else {
     score = score;
  }

  if ( $("#drag22").parents("#div21").length == 1 && $("#drag25").parents("#div22").length == 1 && $("#drag23").parents("#div23").length == 1 && $("#drag24").parents("#div24").length == 1 && $("#drag21").parents("#div25").length == 1 && $("#drag29").parents("#div26").length == 1 && $("#drag30").parents("#div27").length == 1 && $("#drag26").parents("#div28").length == 1 && $("#drag27").parents("#div29").length == 1 && $("#drag28").parents("#div30").length == 1 ) {
    score++;
  } else {
     score = score;
  }

  if (score < 1) {alert('Test Complete. Student is Step 1');}
  if (score > 1) {document.getElementById('check2').disabled = false;}
}

function score4() {

  var calc1 = document.getElementById('calc1').value;
  var calc2 = document.getElementById('calc2').value;
  var calc3 = document.getElementById('calc3').value;
  var calc4 = document.getElementById('calc4').value;

  if (calc1 == 11){score++;}else{score = score;}
  if (calc2 == 17){score++;}else{score = score;}
  if (calc3 == 21){score++;}else{score = score;}
  if (calc4 == 5){score++;}else{score = score;}

  if (score < 3) {alert('Test Complete. Student is Step 1');}
  if (score > 3) {document.getElementById('check3').disabled = false;}
}

function score5() {

  if ( $("#circleYellow").parents("#div31").length == 1 && $("#circleOrange").parents("#div32").length == 1 && $("#circleBlue").parents("#div33").length == 1 && $("#circlePink").parents("#div34").length == 1) {
    score++;

  } else {
    score = score;
  }
  if (score < 1) {alert('Test Complete. Student is Step 2');}
  if (score = 1) {document.getElementById('check4').disabled = false;}
}

function score6() {
  var word1 = document.getElementById('word1').value;
  var word2 = document.getElementById('word2').value;
  var word3 = document.getElementById('word3').value;
  var word4 = document.getElementById('word4').value;
  var word5 = document.getElementById('word5').value;
  var word6 = document.getElementById('word6').value;
  var word7 = document.getElementById('word7').value;
  var word8 = document.getElementById('word8').value;
  var word9 = document.getElementById('word9').value;
  var word10 = document.getElementById('word10').value;

  if (word1 == 'twelve') {score++;}else {score = score;}
  if (word2 == 'baby') {score++;}else {score = score;}
  if (word3 == 'book') {score++;}else {score = score;}
  if (word4 == 'car') {score++;}else {score = score;}
  if (word5 == 'chair') {score++;}else {score = score;}
  if (word6 == 'chicken') {score++;}else {score = score;}
  if (word7 == 'flower') {score++;}else {score = score;}
  if (word8 == 'house') {score++;}else {score = score;}
  if (word9 == 'pencil') {score++;}else {score = score;}
  if (word10 == 'two') {score++;}else {score = score;}

  if (score < 9) {document.getElementById('done5').disabled = true; alert('Test Complete. Student is Step 2');}
  if (score > 9) {document.getElementById('check5').disabled = false;}
}


function score7() {

  if( $('#answer1').is(':checked') ) {score++;}
  if( $('#answer2').is(':checked') ) {score++;}
  if( $('#answer3').is(':checked') ) {score++;}
  if( $('#answer4').is(':checked') ) {score++;}
  if( $('#answer5').is(':checked') ) {score++;}
  if( $('#answer6').is(':checked') ) {score++;}
  if( $('#answer7').is(':checked') ) {score++;}
  if( $('#answer8').is(':checked') ) {score++;}
  if( $('#answer9').is(':checked') ) {score++;}
  if( $('#answer10').is(':checked') ) {score++;}

  if (score < 9) {document.getElementById('done6').disabled = true; alert('Student is Step 2');}
  if (score > 9) {document.getElementById('check6').disabled = false;}
}

function none1() {
  document.getElementById('list1next').style.display = 'none';
}

function list1() {
  if (document.getElementById('no1').disabled === false && document.getElementById('no2').disabled === false && document.getElementById('yes2').disabled === false && document.getElementById('no2').disabled === false && document.getElementById('no3').disabled === false && document.getElementById('yes3').disabled === false && document.getElementById('yes4').disabled === false && document.getElementById('no4').disabled === false && document.getElementById('yes5').disabled === false && document.getElementById('no5').disabled === false) {
    document.getElementById('list1done').disabled = true;
    document.getElementById('list1next').style.display = 'none';
  }

  if (document.getElementById('yes1').disabled === true && document.getElementById('no2').disabled === true && document.getElementById('yes3').disabled === true && document.getElementById('yes4').disabled === true && document.getElementById('no5').disabled === true) {

    document.getElementById('list1next').style.display = '';
    document.getElementById('list1next').disabled = false;
  } else {
    document.getElementById('list1next').style.display = 'none';
    document.getElementById('list1done').disabled = true;
  }
}
