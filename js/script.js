$(function() {
    $('.header__mobile-menu').click(function(){
        $(this).toggleClass('open');
        $('.nav').toggleClass('show',3000);
        $('body').toggleClass('menu-open');
    });
});
jQuery(($) => {
    if ($(window).width() < 991) {
        // $('.nav__item-dropdown').append('<span class="nav__item-dropdown-mob"><svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 1L7.5 8L1 1" stroke="#D93C6C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>');
        $('.nav__item-dropdown .nav__item-dropdown-items').before('<span class="nav__item-dropdown-mob"><svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 1L7.5 8L1 1" stroke="#D93C6C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>');
    $('.nav__item-dropdown-mob').click(function(){
        $(this).toggleClass('show');
        $('.nav__item-dropdown-items').toggleClass('show');
    })    
    }
    if ($(window).width() < 424) {
        var bannerMob = $('.main-banner').attr('data-background-mob');
        console.log(bannerMob);
        $('.main-banner').css('background', 'url("' + bannerMob + '") no-repeat');
    }
});

$('.our-team__items').slick({
    infinite: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<div class="our-team__items-arrow our-team__items-prev"><svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.335684 13.7104C0.229277 13.814 0.144854 13.9371 0.0872521 14.0726C0.0296499 14.208 6.27403e-07 14.3533 6.33815e-07 14.5C6.40228e-07 14.6467 0.0296499 14.792 0.0872521 14.9274C0.144854 15.0629 0.229277 15.186 0.335684 15.2896L14.047 28.6729C14.2615 28.8824 14.5525 29 14.856 29C15.1594 29 15.4504 28.8824 15.6649 28.6729C15.8795 28.4635 16 28.1795 16 27.8833C16 27.5872 15.8795 27.3031 15.6649 27.0937L2.7603 14.5L15.6649 1.9063C15.8795 1.69688 16 1.41285 16 1.11668C16 0.820521 15.8795 0.536488 15.6649 0.327069C15.4504 0.11765 15.1594 -6.62637e-07 14.8559 -6.49374e-07C14.5525 -6.36111e-07 14.2615 0.11765 14.047 0.327069L0.335684 13.7104Z" fill="#D93C6C"/></svg></div>',
    nextArrow: '<div class="our-team__items-arrow our-team__items-next"><svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.6643 13.7104C15.7707 13.814 15.8551 13.9371 15.9127 14.0726C15.9704 14.208 16 14.3533 16 14.5C16 14.6467 15.9704 14.792 15.9127 14.9274C15.8551 15.0629 15.7707 15.186 15.6643 15.2896L1.95302 28.6729C1.73847 28.8824 1.44747 29 1.14405 29C0.840627 29 0.549634 28.8824 0.335082 28.6729C0.120531 28.4635 -1.23176e-06 28.1795 -1.21882e-06 27.8833C-1.20587e-06 27.5872 0.120531 27.3031 0.335082 27.0937L13.2397 14.5L0.335083 1.9063C0.120532 1.69688 -6.17576e-08 1.41285 -4.88119e-08 1.11668C-3.58661e-08 0.820521 0.120532 0.536488 0.335083 0.327069C0.549635 0.11765 0.840629 -6.62637e-07 1.14405 -6.49374e-07C1.44747 -6.36111e-07 1.73847 0.11765 1.95302 0.327069L15.6643 13.7104Z" fill="#D93C6C"/></svg>    </div>',
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: false,
                
            }
        },{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                arrows: false,
                slidesToScroll: 1
            }
        }
    ]
});

$('.main-gallery__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.main-gallery__slider-min',
    prevArrow: '<div class="main-gallery__slider-arrow main-gallery__arrow-prev"><svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.335684 13.7104C0.229277 13.814 0.144854 13.9371 0.0872521 14.0726C0.0296499 14.208 6.27403e-07 14.3533 6.33815e-07 14.5C6.40228e-07 14.6467 0.0296499 14.792 0.0872521 14.9274C0.144854 15.0629 0.229277 15.186 0.335684 15.2896L14.047 28.6729C14.2615 28.8824 14.5525 29 14.856 29C15.1594 29 15.4504 28.8824 15.6649 28.6729C15.8795 28.4635 16 28.1795 16 27.8833C16 27.5872 15.8795 27.3031 15.6649 27.0937L2.7603 14.5L15.6649 1.9063C15.8795 1.69688 16 1.41285 16 1.11668C16 0.820521 15.8795 0.536488 15.6649 0.327069C15.4504 0.11765 15.1594 -6.62637e-07 14.8559 -6.49374e-07C14.5525 -6.36111e-07 14.2615 0.11765 14.047 0.327069L0.335684 13.7104Z" fill="white"/></svg></div>',
    nextArrow: '<div class="main-gallery__slider-arrow main-gallery__arrow-next"><svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.6643 13.7104C15.7707 13.814 15.8551 13.9371 15.9127 14.0726C15.9704 14.208 16 14.3533 16 14.5C16 14.6467 15.9704 14.792 15.9127 14.9274C15.8551 15.0629 15.7707 15.186 15.6643 15.2896L1.95302 28.6729C1.73847 28.8824 1.44747 29 1.14405 29C0.840627 29 0.549634 28.8824 0.335082 28.6729C0.120531 28.4635 -1.23176e-06 28.1795 -1.21882e-06 27.8833C-1.20587e-06 27.5872 0.120531 27.3031 0.335082 27.0937L13.2397 14.5L0.335083 1.9063C0.120532 1.69688 -6.17576e-08 1.41285 -4.88119e-08 1.11668C-3.58661e-08 0.820521 0.120532 0.536488 0.335083 0.327069C0.549635 0.11765 0.840629 -6.62637e-07 1.14405 -6.49374e-07C1.44747 -6.36111e-07 1.73847 0.11765 1.95302 0.327069L15.6643 13.7104Z" fill="white"/></svg></div>'
  });
  $('.main-gallery__slider-min').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.main-gallery__slider',
    dots: false,
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: true,
                vertical: false,
                verticalSwiping: false,   
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: true,
                vertical: false,
                verticalSwiping: false,  
            }
        },
        {
            breakpoint: 374,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
                vertical: false,
                verticalSwiping: false,  
            }
        }
    ]
  });

  $('.catalog__category-items').slick({
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                
            }
        },{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,                
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});