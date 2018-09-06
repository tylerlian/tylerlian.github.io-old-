/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
function myMove() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
$(document).ready(function () {
    var $slide1 = $('#slide1');
    var $slide2 = $('#slide2');
    var $slide3 = $('#slide3');
    var $s1 = $('#s1');
    var $s2 = $('#s2');
    var $s3 = $('#s3');

    masLoad($slide1,'.post-box',$s1);

    $s1.click(function(){
    	masLoad($slide1,'.post-box',$s1);
    });
    $s2.click(function(){
    	masLoad($slide2,'.post-box2',$s2);
    });
    $s3.click(function(){
    	masLoad($slide3,'.post-box3',$s3);
    });

    $(window).resize(function () {
		masLoad($slide1,'.post-box',$s1);
		masLoad($slide2,'.post-box2',$s2);
		masLoad($slide3,'.post-box3',$s3);
	});

    $('.carousel').carousel({
	    pause: true,
	    interval: false
	});

});

function masLoad(slide,box,id) {
	slide.masonry('destroy');
	slide.imagesLoaded(function(){
	    slide.masonry({
	        itemSelector: box,
	        columnWidth: box,
	        transitionDuration: 2,
	        isAnimated: true,
	        isFitWidth: true
	    });
	 });

	$('.clink').removeClass('active');
    id.addClass('active');
};
