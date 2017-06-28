
var button1 = document.getElementById('b1');

button1.onclick = function () {

 button1.style.backgroundColor = "#343d3e";
 button1.style.color = "white";
 document.getElementById('b2').disabled = true;
 document.getElementById('b3').disabled = true;
 document.getElementById('b4').disabled = true;
};

var button2 = document.getElementById('b2');

button2.onclick = function () {

 button2.style.backgroundColor = "#343d3e";
 button2.style.color = "white";
 document.getElementById('b1').disabled = true;
 document.getElementById('b3').disabled = true;
 document.getElementById('b4').disabled = true;
};

var button3 = document.getElementById('b3');

button3.onclick = function () {

 button3.style.backgroundColor = "#343d3e";
 button3.style.color = "white";
 document.getElementById('b2').disabled = true;
 document.getElementById('b1').disabled = true;
 document.getElementById('b4').disabled = true;
};

var button4 = document.getElementById('b4');

button4.onclick = function () {

 button4.style.backgroundColor = "#343d3e";
 button4.style.color = "white";
 document.getElementById('b2').disabled = true;
 document.getElementById('b3').disabled = true;
 document.getElementById('b1').disabled = true;
};

var button5 = document.getElementById('b5');

button5.onclick = function () {

 button5.style.backgroundColor = "#343d3e";
 button5.style.color = "white";
 document.getElementById('b6').disabled = true;
 document.getElementById('b7').disabled = true;
 document.getElementById('b8').disabled = true;
};

var button6 = document.getElementById('b6');
button6.onclick = function () {

 button6.style.backgroundColor = "#343d3e";
 button6.style.color = "white";
 document.getElementById('b5').disabled = true;
 document.getElementById('b7').disabled = true;
 document.getElementById('b8').disabled = true;
};

var button7 = document.getElementById('b7');
button7.onclick = function () {

 button7.style.backgroundColor = "#343d3e";
 button7.style.color = "white";
 document.getElementById('b6').disabled = true;
 document.getElementById('b5').disabled = true;
 document.getElementById('b8').disabled = true;
};

var button8 = document.getElementById('b8');
button8.onclick = function () {

 button8.style.backgroundColor = "#343d3e";
 button8.style.color = "white";
 document.getElementById('b6').disabled = true;
 document.getElementById('b7').disabled = true;
 document.getElementById('b5').disabled = true;
};

var button9 = document.getElementById('b9');
button9.onclick = function () {

 button9.style.backgroundColor = "#343d3e";
 button9.style.color = "white";
 document.getElementById('b10').disabled = true;
 document.getElementById('b11').disabled = true;
 document.getElementById('b12').disabled = true;
};

var button10 = document.getElementById('b10');
button10.onclick = function () {

 button10.style.backgroundColor = "#343d3e";
 button10.style.color = "white";
 document.getElementById('b9').disabled = true;
 document.getElementById('b11').disabled = true;
 document.getElementById('b12').disabled = true;
};

var button11 = document.getElementById('b11');
button11.onclick = function () {

 button11.style.backgroundColor = "#343d3e";
 button11.style.color = "white";
 document.getElementById('b9').disabled = true;
 document.getElementById('b10').disabled = true;
 document.getElementById('b12').disabled = true;
};

var button12 = document.getElementById('b12');
button12.onclick = function () {

 button12.style.backgroundColor = "#343d3e";
 button12.style.color = "white";
 document.getElementById('b9').disabled = true;
 document.getElementById('b11').disabled = true;
 document.getElementById('b10').disabled = true;
};

var button13 = document.getElementById('b13');
button13.onclick = function () {

 button13.style.backgroundColor = "#343d3e";
 button13.style.color = "white";
 document.getElementById('b14').disabled = true;
 document.getElementById('b15').disabled = true;
 document.getElementById('b16').disabled = true;
};

var button14 = document.getElementById('b14');
button14.onclick = function () {

 button14.style.backgroundColor = "#343d3e";
 button14.style.color = "white";
 document.getElementById('b13').disabled = true;
 document.getElementById('b15').disabled = true;
 document.getElementById('b16').disabled = true;
};

var button15 = document.getElementById('b15');
button15.onclick = function () {

 button15.style.backgroundColor = "#343d3e";
 button15.style.color = "white";
 document.getElementById('b14').disabled = true;
 document.getElementById('b13').disabled = true;
 document.getElementById('b16').disabled = true;
};

var button16 = document.getElementById('b16');
button16.onclick = function () {

 button16.style.backgroundColor = "#343d3e";
 button16.style.color = "white";
 document.getElementById('b14').disabled = true;
 document.getElementById('b15').disabled = true;
 document.getElementById('b13').disabled = true;
};

function select10() {
  document.getElementById('yes1').style.backgroundColor = "#343d3e";
  document.getElementById('yes1').style.color = "white";
  document.getElementById('no1').disabled = true;
};

function select01() {
  document.getElementById('no1').style.backgroundColor = "#343d3e";
  document.getElementById('no1').style.color = "white";
  document.getElementById('yes1').disabled = true;
};

function select20() {
  document.getElementById('yes2').style.backgroundColor = "#343d3e";
  document.getElementById('yes2').style.color = "white";
  document.getElementById('no2').disabled = true;
};

function select02() {
  document.getElementById('no2').style.backgroundColor = "#343d3e";
  document.getElementById('no2').style.color = "white";
  document.getElementById('yes2').disabled = true;
};

function select30() {
  document.getElementById('yes3').style.backgroundColor = "#343d3e";
  document.getElementById('yes3').style.color = "white";
  document.getElementById('no3').disabled = true;
};

function select03() {
  document.getElementById('no3').style.backgroundColor = "#343d3e";
  document.getElementById('no3').style.color = "white";
  document.getElementById('yes3').disabled = true;
};

function select40() {
  document.getElementById('yes4').style.backgroundColor = "#343d3e";
  document.getElementById('yes4').style.color = "white";
  document.getElementById('no4').disabled = true;
};

function select04() {
  document.getElementById('no4').style.backgroundColor = "#343d3e";
  document.getElementById('no4').style.color = "white";
  document.getElementById('yes4').disabled = true;
};

function select50() {
  document.getElementById('yes5').style.backgroundColor = "#343d3e";
  document.getElementById('yes5').style.color = "white";
  document.getElementById('no5').disabled = true;
};

function select05() {
  document.getElementById('no5').style.backgroundColor = "#343d3e";
  document.getElementById('no5').style.color = "white";
  document.getElementById('yes5').disabled = true;
};

// $(document).ready(function(){
//     $("button").siblings().css({"display": "none"});
// });

function disable1() {
  document.getElementById('lis2_1').style.backgroundColor = "#343d3e";
  document.getElementById('lis2_1').style.color = "white";
  document.getElementById('lis2_2').disabled = true;
  document.getElementById('lis2_3').disabled = true;
  document.getElementById('lis2_4').disabled = true;
}

function disable2() {
  document.getElementById('lis2_2').style.backgroundColor = "#343d3e";
  document.getElementById('lis2_2').style.color = "white";
  document.getElementById('lis2_1').disabled = true;
  document.getElementById('lis2_3').disabled = true;
  document.getElementById('lis2_4').disabled = true;
}

function disable3() {
  document.getElementById('lis2_3').style.backgroundColor = "#343d3e";
  document.getElementById('lis2_3').style.color = "white";
  document.getElementById('lis2_1').disabled = true;
  document.getElementById('lis2_2').disabled = true;
  document.getElementById('lis2_4').disabled = true;
}

function disable4() {
  document.getElementById('lis2_4').style.backgroundColor = "#343d3e";
  document.getElementById('lis2_4').style.color = "white";
  document.getElementById('lis2_1').disabled = true;
  document.getElementById('lis2_3').disabled = true;
  document.getElementById('lis2_2').disabled = true;
}

function disable5() {
  document.getElementById('lis2_5').style.backgroundColor = "#343d3e";
  document.getElementById('lis2_5').style.color = "white";
  document.getElementById('lis2_6').disabled = true;
  document.getElementById('lis2_7').disabled = true;
  document.getElementById('lis2_8').disabled = true;
}

function disable6() {
  document.getElementById('lis2_6').style.backgroundColor = "#343d3e";
  document.getElementById('lis2_6').style.color = "white";
  document.getElementById('lis2_5').disabled = true;
  document.getElementById('lis2_7').disabled = true;
  document.getElementById('lis2_8').disabled = true;
}

function disable7() {
  document.getElementById('lis2_7').style.backgroundColor = "#343d3e";
  document.getElementById('lis2_7').style.color = "white";
  document.getElementById('lis2_6').disabled = true;
  document.getElementById('lis2_5').disabled = true;
  document.getElementById('lis2_8').disabled = true;
}

function disable8() {
  document.getElementById('lis2_8').style.backgroundColor = "#343d3e";
  document.getElementById('lis2_8').style.color = "white";
  document.getElementById('lis2_6').disabled = true;
  document.getElementById('lis2_7').disabled = true;
  document.getElementById('lis2_5').disabled = true;
}

function disable9() {
  document.getElementById('lis2_9').style.backgroundColor = "#343d3e";
  document.getElementById('lis2_9').style.color = "white";
  document.getElementById('lis2_10').disabled = true;
  document.getElementById('lis2_11').disabled = true;
  document.getElementById('lis2_12').disabled = true;
}

function disable10() {
  document.getElementById('lis2_10').style.backgroundColor = "#343d3e";
  document.getElementById('lis2_10').style.color = "white";
  document.getElementById('lis2_9').disabled = true;
  document.getElementById('lis2_11').disabled = true;
  document.getElementById('lis2_12').disabled = true;
}

function disable11() {
  document.getElementById('lis2_11').style.backgroundColor = "#343d3e";
  document.getElementById('lis2_11').style.color = "white";
  document.getElementById('lis2_10').disabled = true;
  document.getElementById('lis2_9').disabled = true;
  document.getElementById('lis2_12').disabled = true;
}

function disable12() {
  document.getElementById('lis2_12').style.backgroundColor = "#343d3e";
  document.getElementById('lis2_12').style.color = "white";
  document.getElementById('lis2_10').disabled = true;
  document.getElementById('lis2_11').disabled = true;
  document.getElementById('lis2_9').disabled = true;
}

function disable13() {
  document.getElementById('lis2_13').style.backgroundColor = "#343d3e";
  document.getElementById('lis2_13').style.color = "white";
  document.getElementById('lis2_14').disabled = true;
  document.getElementById('lis2_15').disabled = true;
  document.getElementById('lis2_16').disabled = true;
}

function disable14() {
  document.getElementById('lis2_14').style.backgroundColor = "#343d3e";
  document.getElementById('lis2_14').style.color = "white";
  document.getElementById('lis2_13').disabled = true;
  document.getElementById('lis2_15').disabled = true;
  document.getElementById('lis2_16').disabled = true;
}

function disable15() {
  document.getElementById('lis2_15').style.backgroundColor = "#343d3e";
  document.getElementById('lis2_15').style.color = "white";
  document.getElementById('lis2_14').disabled = true;
  document.getElementById('lis2_13').disabled = true;
  document.getElementById('lis2_16').disabled = true;
}

function disable16() {
  document.getElementById('lis2_16').style.backgroundColor = "#343d3e";
  document.getElementById('lis2_16').style.color = "white";
  document.getElementById('lis2_14').disabled = true;
  document.getElementById('lis2_15').disabled = true;
  document.getElementById('lis2_13').disabled = true;
}


function true1() {

 document.getElementById('lis4_1').style.backgroundColor = "#343d3e";
 document.getElementById('lis4_1').style.color = "white";
 document.getElementById('lis4_2').disabled = true;
}

function true2() {

 document.getElementById('lis4_3').style.backgroundColor = "#343d3e";
 document.getElementById('lis4_3').style.color = "white";
 document.getElementById('lis4_4').disabled = true;
}

function true3() {

 document.getElementById('lis4_5').style.backgroundColor = "#343d3e";
 document.getElementById('lis4_5').style.color = "white";
 document.getElementById('lis4_6').disabled = true;
}

function false1() {

 document.getElementById('lis4_2').style.backgroundColor = "#343d3e";
 document.getElementById('lis4_2').style.color = "white";
 document.getElementById('lis4_1').disabled = true;
}

function false2() {

 document.getElementById('lis4_4').style.backgroundColor = "#343d3e";
 document.getElementById('lis4_4').style.color = "white";
 document.getElementById('lis4_3').disabled = true;
}

function false3() {

 document.getElementById('lis4_6').style.backgroundColor = "#343d3e";
 document.getElementById('lis4_6').style.color = "white";
 document.getElementById('lis4_5').disabled = true;
}
