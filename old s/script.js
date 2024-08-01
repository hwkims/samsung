// script.js

// 네비바
fetch('nav.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('nav').innerHTML = html;
  });

document.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    const page = e.target.dataset.page;
    fetch(`${page}.html`)
      .then(response => response.text())
      .then(html => {
        document.getElementById('page').innerHTML = html;
      });
  }
});

// 네비바 호버메뉴
// Add event listener to has-submenu elements
document.querySelectorAll('.has-submenu').forEach((element) => {
  element.addEventListener('mouseover', () => {
    // Get the submenu element
    const submenu = element.querySelector('.submenu');
    // Add class to show the submenu
    submenu.classList.add('show');
  });
  element.addEventListener('mouseout', () => {
    // Get the submenu element
    const submenu = element.querySelector('.submenu');
    // Remove class to hide the submenu
    submenu.classList.remove('show');
  });
});

// 모바일네비바
// Add event listener to nav-toggle button
document.querySelector('.nav-toggle').addEventListener('click', () => {
  // Toggle full-screen navigation menu
  document.querySelector('.nav-fullscreen').classList.toggle('show');
});

// Add event listener to nav-fullscreen menu
document.querySelector('.nav-fullscreen').addEventListener('click', (e) => {
  // Close full-screen navigation menu if clicked outside
  if (e.target === document.querySelector('.nav-fullscreen')) {
    document.querySelector('.nav-fullscreen').classList.remove('show');
  }
});


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


// for contact

const citySelect = document.getElementById('city');
const districtSelect = document.getElementById('district');

const cities = [
  '서울특별시',
  '부산광역시',
  '대구광역시',
  '인천광역시',
  '광주광역시',
  '대전광역시',
  '울산광역시',
  '세종특별자치시',
  '경기도',
  '강원도',
  '충청북도',
  '충청남도',
  '전라북도',
  '전라남도',
  '경상북도',
  '경상남도',
  '제주특별자치도'
];

const districts = {
  '서울특별시': [
    '강남구',
    '강동구',
    '강북구',
    '강서구',
    '관악구',
    '광진구',
    '구로구',
    '금천구',
    '노원구',
    '도봉구',
    '동대문구',
    '동작구',
    '마포구',
    '서대문구',
    '서초구',
    '성동구',
    '성북구',
    '송파구',
    '양천구',
    '영등포구',
    '용산구',
    '은평구',
    '종로구',
    '중구',
    '중랑구'
  ],
  '부산광역시': [
    '강서구',
    '금정구',
    '남구',
    '동구',
    '동래구',
    '부산진구',
    '북구',
    '사상구',
    '사하구',
    '서구',
    '수영구',
    '연제구',
    '영도구',
    '중구',
    '해운대구'
  ],
  '대구광역시': [
    '남구',
    '달서구',
    '달성군',
    '동구',
    '북구',
    '서구',
    '수성구'
  ],
  '인천광역시': [
    '강화군',
    '계양구',
    '남동구',
    '동구',
    '부평구',
    '서구',
    '연수구',
    '옹진군',
    '중구'
  ],
  '광주광역시': [
    '광산구',
    '남구',
    '동구',
    '북구',
    '서구'
  ],
  '대전광역시': [
    '대덕구',
    '동구',
    '서구',
    '유성구',
    '중구'
  ],
  '울산광역시': [
    '남구',
    '동구',
    '북구',
    '울주군',
    '중구'
  ],
  '세종특별자치시': [
    '세종시'
  ],
  '경기도': [
    '안산시',
    '안성시',
    '안양시',
    '부천시',
    '수원시',
    '의정부시',
    '파주시',
    '평택시',
    '포천시',
    '의왕시',
    '이천시',
    '김포시',
    '광명시',
    '광주시',
    '구리시',
    '군포시',
    '의정부시',
    '양주시',
    '양평군',
    '여주군',
    '연천군',
    '오산시',
    '용인시'
  ],
  '강원도': [
    '강릉시',
    '동해시',
    '삼척시',
    '속초시',
    '원주시',
    '춘천시',
    '태백시',
    '고성군',
    '양구군',
    '양양군',
    '영월군',
    '인제군',
    '정선군',
    '철원군',
    '평창군',
    '홍천군',
    '화천군',
    '횡성군'
  ],
  // ... add more cities and districts here
};

// Generate city options
cities.forEach(city => {
  const option = document.createElement('option');
  option.value = city;
  option.text = city;
  citySelect.appendChild(option);
});

// Generate district options
function updateDistricts() {
    const selectedCity = citySelect.value;
    districtSelect.innerHTML = ''; // clear previous options
    if (selectedCity) {
      const districtOptions = districts[selectedCity];
      districtOptions.forEach(district => {
        const option = document.createElement('option');
        option.value = district;
        option.text = district;
        districtSelect.appendChild(option);
      });
    }
  }

  // Initialize district options for the first city
  updateDistricts();

