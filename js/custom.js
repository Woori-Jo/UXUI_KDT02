// clone menu and info elements
const menu = document.querySelector('.navi');
const info = document.querySelector('.info');
const newMenuBox = document.querySelector('.new-mobile-menu');

const newMenu = menu.cloneNode(true);
const newInfo = info.cloneNode(true);

newMenuBox.insertAdjacentElement('beforeend', newMenu);
newMenuBox.insertAdjacentElement('beforeend', newInfo);

// mobile menu toggle function
const mobileMenuIcon = document.querySelector('.mobile-icon');

mobileMenuIcon.addEventListener('click', (e) => {
  const target = e.currentTarget;

  target.classList.toggle('active');

  const menuHeight = document.querySelector('.new-mobile-menu').scrollHeight; //요소가 펼쳐졌을때의 높이

  if (target.classList.contains('active')) {
    target.classList.remove('not-active');
    newMenuBox.style.height = `${menuHeight}px`; //단위를 꼭 적어줘야 함
  } else {
    target.classList.add('not-active');
    newMenuBox.style.height = 0;
  }
});

// fixed header style change and meet section start animation when scrolling down
const header = document.querySelector('.header');
const meetSection = document.querySelector('.meet-section');
const meetSectionTop = meetSection.offsetTop;

const scrCtrl = () => {
  const scry = window.scrollY; //화면 최상단이 위치한 스크롤 위치값
  if (scry > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }

  if (scry > meetSectionTop - 200) {
    meetSection.classList.add('on');
  }
};

window.addEventListener('scroll', scrCtrl);
//스크롤 이벤트가 실행됐을때 scrCtrl 이라는 스크롤 컨트롤기능이 설정된 함수가 실행되는것임

// features section data
const features = [
  {
    image: '/soaply/images/about-icon-1.svg',
    title: 'For All Skin Types',
    text: '로션처럼 부드럽게 발려 흡수되며, 보습에 탁월한 갈대추출물과 케일잎추출물을 함유해 민감한 피부를 건강하게 가꿔줍니다.',
  },
  {
    image: '/soaply/images/about-icon-2.svg',
    title: '100% Organic',
    text: '식물 유래 보습 성분인 녹차추출물과 블랙커민씨오일이 수분과 영양을 전달해 건강하고 편안한 피부로 가꿔줍니다.',
  },

  {
    image: '/soaply/images/about-icon-3.svg',
    title: 'Cruelty Free',
    text: '건조한 피부에 밀도 있게 수분을 채우는 보습 세럼입니다. 대나무수를 가득 담은 빠른 흡수력의 세럼이 끈적임 없이 속 수분을 채우며',
  },
];

const featuresWrapper = document.querySelector('.features');

features.forEach((feature) => {
  const featureElm = `
  <div class="feature">
    <div class="feature-icon">
      <img src="${feature.image}" alt=""/>
     </div>
     <h4>${feature.title}</h4>
     <p>${feature.text}</p>
  </div>
  `;

  featuresWrapper.insertAdjacentHTML('beforeend', featureElm);
});

// Swiper Slider Codes
const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical', // 디폴트는 horiosental
  loop: true, //반복 여부

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
