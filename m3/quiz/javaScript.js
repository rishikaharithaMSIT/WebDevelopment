function showHint() {
  var x = document.getElementById("alertbox1");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("hint").innerHTML = "HIDE HINT";
  } else {
    x.style.display = "none";
    document.getElementById("hint").innerHTML = "SHOW HINT";
  }
}

var data = {
	"quiz" : [
	{
		"question" : "HTML stands for Hyperlinks and Text Markup Language.",
		"answer" : "true",
		"hint1" : "this is hint 1",
		"hint2" : "this is hint 2"
	},
	{
		"question" : "h6 is the largest heading tag.",
		"answer" : "false",
		"hint1" : "this is hint 1",
		"hint2" : "this is hint 2"
	},
	{
		"question" : "break is the tag to break line.",
		"answer" : "false",
		"hint1" : "this is hint 1",
		"hint2" : "this is hint 2"
	},
	{
		"question" : "thead is the tag to give table headings.",
		"answer" : "false",
		"hint1" : "this is hint 1",
		"hint2" : "this is hint 2"
	},
	{
		"question" : "a is used for hyperlinks.",
		"answer" : "true",
		"hint1" : "this is hint 1",
		"hint2" : "this is hint 2"
	}

	]
};

var sobj = JSON.stringify(data);
var obj = JSON.parse(sobj);
var len = obj.quiz.length;

for(let i = 0; i < len; i++) {
	var para = document.createElement("div");
	para.innerHTML = ' \
	<div class = "row">\
        <div class="col-lg-9"> \
        	<div class="alert alert-success"> \
            	<strong id="question">QUESTION '+(i+1)+'</strong><br><br> \
            	<p id="question">'+obj.quiz[i].question+'</p><br> \
            	<ul> \
              		<li class="list-group-item"> \
                		<div class="radio"> \
                  			<label><input type="radio" name="optradio">TRUE</label> \
                		</div> \
              		</li> \
              		<li class="list-group-item"> \
                		<div class="radio"> \
                  			<label><input type="radio" name="optradio">FALSE</label> \
                		</div> \
              		</li> \
            	</ul> \
          	</div> \
        </div>' + '\
        <div class="col-lg-3"> \ 
\
        </div> \
    </div>';
        
      console.log("HI");
	document.getElementById("myDiv").appendChild(para);
}