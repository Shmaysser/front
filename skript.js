window.onscroll = function() {myFunction()};
var drop_down = document.getElementById("drop_down");
var indikator1 = document.getElementById("indikator1");
var indikator2 = document.getElementById("indikator2");
var indikator3 = document.getElementById("indikator3");
var indikator4 = document.getElementById("indikator4");
indikator1 = indikator1.offsetTop;
indikator2 = indikator2.offsetTop;
indikator3 = indikator3.offsetTop;
indikator4 = indikator4.offsetTop;

function myFunction() {
	if (window.pageYOffset >= indikator1+400) {
		drop_down.style = "margin-top:0%; transition: 0.7s ease-in-out;";
	} else {
		drop_down.style = "margin-top:40%; transition: 0.7s ease-in-out;";
	}
	
	if (window.pageYOffset >= indikator2) {
		document.getElementById("pic1").style = "left: 0%; transition: .7s ease-in-out;";
		document.getElementById("pic2").style = "right: 0%; transition: .7s ease-in-out;";
	} else {
		document.getElementById("pic1").style = "left: -50%; transition: .7s ease-in-out;";
		document.getElementById("pic2").style = "right: -50%; transition: .7s ease-in-out;";
	}
	
	if (window.pageYOffset >= indikator3) {
		document.getElementById("pic3").style = "left: 0%; transition: .7s ease-in-out;";
		document.getElementById("pic4").style = "right: 0%; transition: .7s ease-in-out;";
	} else {
		document.getElementById("pic3").style = "left: -50%; transition: .7s ease-in-out;";
		document.getElementById("pic4").style = "right: -50%; transition: .7s ease-in-out;";
	}
	
	if (window.pageYOffset >= indikator3+300) {
		document.getElementById("pic5").style = "bottom: 0%;transition: all 0.4s ease-in-out 0s;transition-delay:0.4s;";
		document.getElementById("pic6").style = "bottom: 0%;transition: all 0.4s ease-in-out 0s;transition-delay:0.6s;";
		document.getElementById("pic7").style = "bottom: 0%;transition: all 0.4s ease-in-out 0s;transition-delay:0.8s;";
		document.getElementById("pic8").style = "bottom: 0%;transition: all 0.4s ease-in-out 0s;transition-delay:1s;";
	} else {
		document.getElementById("pic5").style = "bottom: 100%;transition: all 0.4s ease-in-out 0s;transition-delay:0.4s;";
		document.getElementById("pic6").style = "bottom: 100%;transition: all 0.4s ease-in-out 0s;transition-delay:0.6s;";
		document.getElementById("pic7").style = "bottom: 100%;transition: all 0.4s ease-in-out 0s;transition-delay:0.8s;";
		document.getElementById("pic8").style = "bottom: 100%;transition: all 0.4s ease-in-out 0s;transition-delay:1s;";
	}
}
