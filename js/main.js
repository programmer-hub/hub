(function(i,s,o,g,r,a,m) {
	i['GoogleAnalyticsObject']=r;
	i[r]=i[r]||function() {
	(i[r].q=i[r].q||[]).push(arguments)}, i[r].l=1*new Date();
	a=s.createElement(o), m=s.getElementsByTagName(o)[0];
	a.async=1;a.src=g; m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-76075660-1', 'auto');
ga('send', 'pageview');
$(document).ready(function() {
    $('.empty').height($("#H").innerHeight());
    window.onresize = empty;
    $(window).scroll(function() {
		if ($(document).scrollTop() >= $("#H").innerHeight() - 100) {
			$(".navbar-fixed-top").css("background-color", "#393939");
		} 
		else {
			$(".navbar-fixed-top").css("background-color", "transparent");
		}
	});
});
function empty(){
    $('.empty').height($("#H").innerHeight());
}
$(document).ready(function(){
   $('li img').on('click',function(){
        var src = $(this).attr('src');
        var img = '<img src="' + src + '" class="img-responsive"/>';
        $('#myModal').modal();
        $('#myModal').on('shown.bs.modal', function(){
            $('#myModal .modal-body').html(img);
        });
        $('#myModal').on('hidden.bs.modal', function(){
            $('#myModal .modal-body').html('');
        });
   });
})