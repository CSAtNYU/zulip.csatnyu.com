// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

var domain = 'nyu.edu';

// http://stackoverflow.com/questions/280634/endswith-in-javascript
String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

// http://stackoverflow.com/questions/2507030/email-validation-using-jquery
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function validateEmail (email, domain) {
    return isEmail(email) && email.endsWith(domain);
}

$('#input-email .btn').on('click', function () {
    var email = $('#input-email input').val();

    console.log(email);

    $('#input-email .input-success').css('display', 'none');

    if (validateEmail(email, domain)) {
        console.log('success');
        $('#input-email input').val('');
        $('#input-email .input-error').css('display', 'none');
        $('#input-email .input-success').css('display', 'block');
    } else {
        console.log('fail');
        $('#input-email .input-error').css('display', 'block');
    }
});