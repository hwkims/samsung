// script.js

const hamburgerButton = document.querySelector('.hamburger-button');
const navBarUl = document.querySelector('.nav-bar ul');

hamburgerButton.addEventListener('click', () => { 
  // Toggle the active class on the hamburger button 
  hamburgerButton.classList.toggle('active');

  // Toggle the display property of the nav bar ul 
  navBarUl.style.display = navBarUl.style.display === 'block' ? 'none' : 'block'; });
const slideContainer = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;

function showSlide() {
  slides.forEach((slide, index) => {
    slide.style.opacity = index === currentSlide? 1 : 0;
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide();
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// 자동 슬라이드
setInterval(nextSlide, 3000); // 3초마다 다음 슬라이드로 넘어감

showSlide();

const searchButton = document.querySelector('.search-button');
const searchButton2 = document.querySelector('#search-button');
const searchModal = document.querySelector('#search-modal');
const searchInput = document.querySelector('#search-input');
const searchResults = document.querySelector('#search-results');

searchButton.addEventListener('click', () => {
    searchModal.style.display = 'block';  });


    searchButton2.addEventListener('click', () => {
const searchText = searchInput.value;
const searchUrl = `https://kwangdongmart.com/shop/search?searchText=${encodeURIComponent(searchText)}`;
window.open(searchUrl, '_blank');
});
searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) {
        searchModal.style.display = 'none';
    }
});

searchInput.addEventListener('input', () => {
    // Add your search logic here
    console.log('Search input changed:', searchInput.value);
});
searchInput.addEventListener('keypress', (e) => {
if (e.key === 'Enter') {
const searchText = searchInput.value;
const searchUrl = `https://kwangdongmart.com/shop/search?searchText=${encodeURIComponent(searchText)}`;
window.open(searchUrl, '_blank');
}
});