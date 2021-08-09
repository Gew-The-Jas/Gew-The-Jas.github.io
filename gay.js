
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};
	
window.addEventListener('scroll', function(e){
	//rip IE<9
	var scrolled = window.pageYOffset;
	//rip IE<8
	const background = document.getElementById('top_video_id');
	background.style.top =  -(scrolled * 0.2) +'px';
	if (scrolled > (window.innerHeight * 0.7)){
		//$('.not-in-view').addClass('in-view');
		document.getElementById('header_1').style.backgroundColor="rgb(220, 220, 220)";
		$('.nav-collapse a').css('color','#404040');
		$('a').css('color','#404040');
		$('nav-toggle').css('color','#404040');
		document.getElementsByClassName('nav-toggle')[0].classList.add("blacked");
		document.getElementsByClassName('nav-collapse')[0].classList.add("downed");
		document.getElementById('first_video').pause();
	} else {
		document.getElementsByClassName('nav-toggle')[0].classList.remove("blacked");
		document.getElementById('header_1').style.backgroundColor="inherit";
		document.getElementsByClassName('nav-collapse')[0].classList.remove("downed");
		$('.nav-collapse a').css('color','#fff');	
		$('a').css('color','#fff');	
		$('nav-toggle').css('color','#fff');
		document.getElementById('first_video').play();
	}
	$('.not-in-view').each(function () {
		if (window.innerHeight * 0.8 > $(this)[0].getBoundingClientRect().top) {
			$(this).addClass('in-view');
			if ($(this).attr('id') == "box_2") {
				console.log("trueeeee");
			setTimeout(function() {
				$('#box_2').each(function () {
					$(this).removeClass("delay_05");
				});
			},900);
			}
		}
	});
});

$(document).ready(function() {
	document.getElementsByTagName("html")[0].style.visibility = "visible";
});
$(function() {
$("#slideshow > div:gt(0)").hide();
//$("#slideshow div").hide();
setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1500)
    .next()
    .fadeIn(1500)
    .end()
    .appendTo('#slideshow');
},  5000);
});


