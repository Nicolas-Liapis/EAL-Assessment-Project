var done = document.getElementById('done1');
var score = 0;

done.onclick = function () {
  document.getElementById('repeat1').disabled = true;

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
  document.getElementById('done1').disabled = true;
}
