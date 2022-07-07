(function($) {
    "use strict";

    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Sticky Navbar
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });


    // Dropdown on mouse hover
    $(document).ready(function() {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function() {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function() {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        animateIn: 'slideInDown',
        animateOut: 'slideOutDown',
        items: 1,
        smartSpeed: 450,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ]
    });

    // Banner carousel
    $(".banner-carousel").owlCarousel({
        autoplay: true,
        animateIn: 'slideInRight',
        animateOut: 'slideOutDown',
        items: 1,
        smartSpeed: 100,
        dots: true,
        loop: true,
        nav: false
    });

    // Blogs carousel
    $(".blog-carousel").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // service-carousel
    $(".service-carousel").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav: false,
        autoWidth:true
    });

    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });


    new WOW().init();

    $('.floatingButton').on('click',
        function(e) {
            e.preventDefault();
            $(this).toggleClass('open');
            if ($(this).children('.fas').hasClass('fa-plus')) {
                $(this).children('.fas').removeClass('fa-plus');
                $(this).children('.fas').addClass('fa-times');
            } else if ($(this).children('.fas').hasClass('fa-times')) {
                $(this).children('.fas').removeClass('fa-times');
                $(this).children('.fas').addClass('fa-plus');
            }
            $('.floatingMenu').stop().slideToggle();
        }
    );
    $(this).on('click', function(e) {

        var container = $(".floatingButton");
        if (!container.is(e.target) && $('.floatingButtonWrap').has(e.target).length === 0) {
            if (container.hasClass('open')) {
                container.removeClass('open');
            }
            if (container.children('.fas').hasClass('fa-times')) {
                container.children('.fas').removeClass('fa-times');
                container.children('.fas').addClass('fa-plus');
            }
            $('.floatingMenu').hide();
        }

        if (!container.is(e.target) && ($('.floatingMenu').has(e.target).length > 0)) {
            $('.floatingButton').removeClass('open');
            $('.floatingMenu').stop().slideToggle();
        }
    });

    const floatingButtonWrap = $('.floatingButtonWrap');
    $(window).on('scroll', function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            $(floatingButtonWrap).css('opacity', '1');
        } else {
            $(floatingButtonWrap).css('opacity', '0');
        }
    });

    $('.navbar-nav a').on('click', function(e) {
        if (this.hash != '') {
            e.preventDefault()
            const hash = this.hash
            $('html, body').animate({ scrollTop: $(hash).offset().top }, 800)
            $('ul.nav-links').removeClass('active')
        }
    })


    let perPage = 6;
    $('.pagination-container').each(function(idx){
        let items = $(this).prev('.list-wrapper').find('.list-item');
        let numItems = items.length;
        items.slice(perPage).hide();
        $(this).pagination({
            items: numItems,
            itemsOnPage: 6,
            prevText: `<i class="fas fa-arrow-left"></i>`,
            nextText: `<i class="fas fa-arrow-right"></i>`,
            onPageClick: function(pageNumber) {
                var showFrom = perPage * (pageNumber - 1);
                var showTo = showFrom + perPage;
                items.hide().slice(showFrom, showTo).fadeIn();
            }
        });
    })
  

    $(".jarallax").jarallax({
        speed: 0.1
    });

    $('a[data-fancybox="gallery"]').fancybox({
        buttons : [ "close" ]
    });

    $("#accordion").on("hide.bs.collapse show.bs.collapse", e => {
        $(e.target)
          .prev()
          .find("i:last-child")
          .toggleClass("fa-minus fa-plus");
      });      

})(jQuery);

[].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function () {
        img.removeAttribute('data-src');
    };
});  