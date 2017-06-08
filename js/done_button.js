var done1 = document.getElementById('done1');
var done2 = document.getElementById('done2');
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

done2.onclick = function () {
  if ('drag26' == 'div28') {
    score++;
  } else {
    score = score;
  }
  alert('Your score is ' + score);
}
