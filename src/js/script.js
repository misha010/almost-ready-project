// ====== Mobile Menu Start
const menuBtn = $('.menu-button');
const darkOverlay = $('.dark-overlay');
const mobileMenu = $('.mobile-menu');

$(document).on('click', '.menu-button', handleMenu);
$(document).on('click', '.is-submenu', handleToggleSubMenu);
$(document).on('click', '.dark-overlay', closeMenu);


function closeMenu() {
  if (mobileMenu.hasClass('visible')) {
    closeMobileMenu();
  }
}

function handleToggleSubMenu(e) {
  e.preventDefault();
  const $this = $(this);
  $this.parent('.has-submenu').toggleClass('opened').siblings('li').removeClass('opened').find('ul').hide()
  $this.next('ul').slideToggle(700)
}

function handleMenu(e) {
  e.preventDefault();
  darkOverlay.toggleClass('visible');
  mobileMenu.toggleClass('visible');
  if (!mobileMenu.hasClass('visible')) {
    closeMobileMenu()
  }
}

function closeMobileMenu() {
    darkOverlay.removeClass('visible');
    mobileMenu.removeClass('visible');
  $('.mobile-navigation .has-submenu').removeClass('opened').find('ul').hide();
}

function initMobile() {
  console.log("is-mobile");
}

function initDesktop() {
  closeMobileMenu()
  console.log("is-desktop");
}

ssm.addStates([
  {
    id: "mobile",
    query: "(max-width: 992px)",
    onEnter: function () {
      initMobile();
    },
  },
  {
    id: "desktop",
    query: "(min-width: 992px)",
    onEnter: function () {
      initDesktop();
    },
  },
]);
// ====== Mobile Menu End

// ====== Main Slider Start
$('#slider').slick({
  arrows: true,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  infinite: true,
  speed: 1500,
  autoplaySpeed: 8000,
  prevArrow: '<span class="prev-arrow"><i class="fa-solid fa-chevron-left fa-2xl"></i></span>',
  nextArrow: '<span class="next-arrow"><i class="fa-solid fa-chevron-left fa-rotate-180 fa-2xl"></i></span>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        speed: 700,
    }
  }
  ]
}).slickAnimation();
// ====== Main Slider End

// ====== Second Slider Start
$('#second-slider').slick({
  arrows: false,
  dots: true,
  mobileFirst: true,
  autoplay: true,
  infinite: true,
  speed: 800,
  autoplaySpeed: 2000,
  lazyLoad: 'progressive',
  responsive: [
    {
      breakpoint: 320,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
      }
    },  
    { 
      breakpoint: 768,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,

      }
    }
  ]
});
// ====== Second Slider End

// ====== Counter Start
$('.counter').counterUp({
  delay: 10,
  time: 3000,
});
// ====== Counter End

// ===== Feature Projects Line Start
const lineBox = document.querySelector('.featured-projects');
const line = document.querySelectorAll('.animate-line');

window.onscroll = function () {
  if (window.scrollY >= lineBox.offsetTop) {
    line.forEach((l) => {
      l.style.width = l.dataset.count;
    })
  }
};
// ===== Feature Projects Line End

// =====  Video Start
const linkVideo = document.getElementById('link-video');
const trailer = document.querySelector('.trailer');
const closeVideo = document.querySelector('.close-video');
const video = document.querySelector('video');

linkVideo.addEventListener('click', handleToggleVideoButton);
closeVideo.addEventListener('click', handleToggleVideoCloseButton);

function handleToggleVideoButton() {
  trailer.classList.add('active')
}
  
function handleToggleVideoCloseButton() {
  trailer.classList.remove('active')
  video.pause();
  video.currentTime = 0;
}
// ===== Video End

// ===== Accordeon Start
	$('#dl-box dd').hide();

	$(document).on('click', 'dt', function({target}) {
    const $this = $(target);
    $this.toggleClass('act')
    if ($this.hasClass('act')) {
      $this.siblings('.dl-box__dt').removeClass('act')
    }
    $this.next('.dl-box__dd').slideToggle().siblings('.dl-box__dd').slideUp();
  })
// ===== Accordeon End

// ===== Validation Footer Form Start
const myForm = document.querySelector('[name="wishform"]')
const feedback = document.querySelector('.feedback')

document.addEventListener('submit', handleSubmit)
document.addEventListener('keyup', handleKeyUp)

function handleSubmit(e) {
  const target = e.target;
  if (target.name !== "wishform") {
    return;
  }
  let isValid = true;
  
  [...target.elements].forEach((el) => {
    if (el.classList.contains("form-input")) {
      const val = el.value.trim().length;
      if (val < 5) {
        isValid = false;
        el.style.border = '1.3px solid rgb(245, 70, 70)';
        feedback.classList.add('feedback-form')
      }
      if (val >= 5) {
        el.value = '';
        el.style.border = '1px solid #323643'
        feedback.classList.remove('feedback-form')

      }
    }
  });

  if (!isValid) {
      e.preventDefault();
  }

  if (isValid) {
    e.preventDefault();
    console.log('Send on server :)');
  }
}

function handleKeyUp({target}) {
  if(!target.classList.contains('form-input')) {
    return;
  }
        
  if(target.value.trim().length >= 5) {
    target.style.border = '1px solid rgb(115, 240, 115)'
    feedback.classList.remove('feedback-form')
    return;
  }
    target.style.border = '1px solid rgb(245, 70, 70)'
    feedback.classList.add('feedback-form')
}
// ===== Validation Footer Form Start

// ===== Top Content Hide Start
const leftSecond = document.querySelector('.right-second__item')
const showEl = document.querySelector('.hide-form')

leftSecond.addEventListener('click', function () {
  if (!showEl.classList.contains('show')) {
    showEl.classList.add('show')
  } else {
    showEl.classList.remove('show')
  }
})

// document.addEventListener('click', ({ target }) => {
//   if (target === leftSecond) {
//     showEl.classList.toggle('show')
//     return
//   }
//   showEl.classList.remove('show')

//   if (showEl.classList.contains('show')) {
//     return;
//   }
// })


const leftThird = document.querySelector('.third-link')
const showElSearch = document.querySelector('.hide-form-search')

leftThird.addEventListener('click', function () {
  if (!showElSearch.classList.contains('show')) {
    showElSearch.classList.add('show')
  } else {
    showElSearch.classList.remove('show')
  }
})


const leftFourth = document.querySelector('.right-fourth__link')
const showElItem = document.querySelector('.hide-items')

leftFourth.addEventListener('click', function () {
  if (!showElItem.classList.contains('show')) {
    showElItem.classList.add('show')
  } else {
    showElItem.classList.remove('show')
  }
})
// ===== Top Content Hide End