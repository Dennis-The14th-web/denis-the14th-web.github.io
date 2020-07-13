$('a.scroll-control[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: (target.offset().top - 50)
            }, 1000);
            return false;
        }
    }
});

// Closes responsive menu when a scroll trigger link is clicked
$('.scroll-control').click(function () {
    $('.navbar-collapse').collapse('hide');
});

//console.log(innerHeight)

// Activate scrollspy to add active class to navbar items on scroll
$('body').scrollspy({
    target: '#sticky-nav',
    offset: $(".navbar").innerHeight() + 10
});


const scroll = window.requestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60)
};

const elementsToShow = document.querySelectorAll("#header");

function loop() {
    // console.log("loop")
    elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });

    scroll(loop);
}


function isElementInViewport(el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 &&
            rect.bottom >= 0) ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}

loop();