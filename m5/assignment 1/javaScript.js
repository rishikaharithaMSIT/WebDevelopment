var data = {
	"quiz" : [
	{
		"question" : "HTML stands for Hyperlinks and Text Markup Language.",
		"answer" : "TRUE",
		"hint1" : "this is hint 1 for question 1",
		"hint2" : "this is hint 2 for question 1"
	},
	{
		"question" : "h6 is the largest heading tag.",
		"answer" : "FALSE",
		"hint1" : "this is hint 1 for question 2",
		"hint2" : "this is hint 2 for question 2"
	},
	{
		"question" : "break is the tag to break line.",
		"answer" : "FALSE",
		"hint1" : "this is hint 1 for question 3",
		"hint2" : "this is hint 2 for question 3"
	},
	{
		"question" : "thead is the tag to give table headings.",
		"answer" : "FALSE",
		"hint1" : "this is hint 1 for question 4",
		"hint2" : "this is hint 2 for question 4"
	},
	{
		"question" : "a is used for hyperlinks.",
		"answer" : "TRUE",
		"hint1" : "this is hint 1 for question 5",
		"hint2" : "this is hint 2 for question 5"
	}

	]
}

var sobj = JSON.stringify(data);
var obj = JSON.parse(sobj);
var len = obj.quiz.length;
var t = "TRUE";
var f  = "FALSE";

for(let i=0;i<len;i++) {
	console.log(i);
	var div = document.getElementById("main");
	div.insertAdjacentHTML('beforeend', '<p id="question">'+(i+1)+'. '+obj.quiz[i].question+'</p>');
	div.insertAdjacentHTML('beforeend','<button class="btn btn-info" id = "hint'+i+'" onclick="showHint('+i+')">HINT</button>')
	div.insertAdjacentHTML('beforeend','<div class="radio"> \
  <label><input type="radio" value="TRUE" onclick="check(this.value,'+i+')" class="radiobtn'+i+'" name="optradio'+i+'">TRUE</label> \
</div> \
<div class="radio"> \
  <label><input type="radio" value="FALSE" onclick="check(this.value,'+i+')" class="radiobtn'+i+'" name="optradio'+i+'">FALSE</label> \
</div><div id="lastElem'+i+'"></div>');
	div.insertAdjacentHTML('beforeend','<hr>')
}

function check(val,j) {
	console.log(obj.quiz[j].answer);
	console.log(val);
	var a = document.getElementById("lastElem"+j);
	if(obj.quiz[j].answer == val) {
		a.innerHTML= '<div class="alert alert-success">\
  <strong>CORRECT!</strong> \
</div>';
	document.getElementsByClassName("radiobtn"+j)[0].disabled = true;
	document.getElementsByClassName("radiobtn"+j)[1].disabled = true;
	} else {
		a.innerHTML= '<div class="alert alert-danger">\
  <strong>WRONG!</strong> \
</div>';
	document.getElementsByClassName("radiobtn"+j)[0].disabled = true;
	document.getElementsByClassName("radiobtn"+j)[1].disabled = true;
	}
}
function showHint(k) {
	var h = document.getElementById("hint"+k);
	h.insertAdjacentHTML('afterend', '<div id="hintdiv'+k+'" class="alert alert-warning alert-dismissible fade in">\
    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\
    <strong>HINT 1!</strong><p id="hintone">'+obj.quiz[k].hint1+'</p>\
    <button class="btn btn-warning" onclick="showHintNext('+k+')">NEXT HINT</button>\
  </div>');
}
function showHintNext(k) {
	var h = document.getElementById("hintdiv"+k);
	h.innerHTML = '\
    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\
    <strong>HINT 2!</strong><p id="hinttwo">'+obj.quiz[k].hint2+'</p>\
    <button class="btn btn-warning" onclick="showHintPrevious('+k+')">PREVIOUS HINT</button>\
  ';
}
function showHintPrevious(k) {
	var h = document.getElementById("hintdiv"+k);
	h.innerHTML = '\
    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\
    <strong>HINT 2!</strong><p id="hintone">'+obj.quiz[k].hint1+'</p>\
    <button class="btn btn-warning" onclick="showHintNext('+k+')">NEXT HINT</button>\
  ';
}

function reloadPage(){
 	location.reload();
 }