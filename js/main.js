(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-76075660-1', 'auto');
ga('send', 'pageview');
$(document).ready(function(){
$(window).scroll(function() { // check if scroll event happened
if ($(document).scrollTop() > $("#H").innerHeight() ) { // check if user scrolled more than 50 from top of the browser window
$(".navbar-fixed-top").css("background-color", "#31989F"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
} else {$(".navbar-fixed-top").css("background-color", "transparent"); // if not, change it back to transparent
}
});
});