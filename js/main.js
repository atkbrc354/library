// Slider
const images = Array.from(document.querySelectorAll('.About-cards-img .image'));
const circles = Array.from(document.querySelectorAll('.block-circle-cards .circle'));
const circlesTable = Array.from(document.querySelectorAll('.block-circle-cards-table .circle-table'));
const circlesMobile = Array.from(document.querySelectorAll('.block-circle-cards-mobile .circle-mobile'));
const slider = document.querySelector('.About-cards-img');

let activeSlide = 0;
let slideWidth = images[0].getBoundingClientRect().width + 25;

function setPosition(slide, index) {
  slide.style.left = (slideWidth + 20) * index + 'px';
}

images.forEach(setPosition);


function resizeSlider() {
  slideWidth = images[0].getBoundingClientRect().width + 20;
  images.forEach(setPosition);
  moveToSlide(slider, activeSlide);
}

window.addEventListener('resize', resizeSlider);

function moveToSlide(slider, activeSlide) {
  slider.style.transform = 'translateX(-' + slideWidth * activeSlide + 'px)';
}

circles.forEach((circle, index) => {
  circle.addEventListener('click', () => {
    circles.forEach(circle => {
      circle.classList.remove('active');
    });

    circle.classList.add('active');

    activeSlide = index;
    moveToSlide(slider, activeSlide);
  });

});

circlesTable.forEach((circle, index) => {
    circle.addEventListener('click', () => {
      circlesTable.forEach(circle => {
        circle.classList.remove('active-table');
      });
  
      circle.classList.add('active-table');
  
      activeSlide = index;
      moveToSlide(slider, activeSlide);
    });
  
  });

  circlesMobile.forEach((circle, index) => {
    circle.addEventListener('click', () => {
      circlesMobile.forEach(circle => {
        circle.classList.remove('active-mobile');
      });

      circle.classList.add('active-mobile');
  
      activeSlide = index;
      moveToSlide(slider, activeSlide);
    });
  
  });


// Tab
const tab = document.querySelectorAll('.Favorites-cards');
const labelRadio = document.querySelectorAll('.label-radio');

// Function to hide tabs
function hideTabContent(a) {
  for (let i = a; i < tab.length; i++) {
    tab[i].classList.remove('show');
    tab[i].classList.add('hide');
  }
}

// Function to show tabs
function showTabContent(b) {
  if (tab[b].classList.contains('hide')) {
    tab[b].classList.remove('hide');
    tab[b].classList.add('show');
  }
}

// Initially hide all tabs except the first one
hideTabContent(1);

// Add event listeners to labels
for (let i = 0; i < labelRadio.length; i++) {
  labelRadio[i].addEventListener('click', function() {
    // When a label is clicked, hide all tabs
    hideTabContent(0);
    // And then show the clicked tab
    showTabContent(i);
  });
}






  