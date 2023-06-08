const images = [
  "./images/countriesImages/vanuatu_1.png",
  "./images/countriesImages/vanuatu_2.png",
  "./images/countriesImages/vanuatu_3.png",
  "./images/countriesImages/vanuatu_4.png",
  "./images/countriesImages/vanuatu_5.png",
  "./images/countriesImages/vanuatu_6.png",
  "./images/countriesImages/vanuatu_7.png",
  "./images/countriesImages/vanuatu_8.png",
  "./images/countriesImages/vanuatu_9.png",
  "./images/countriesImages/vanuatu_10.png",
  "./images/countriesImages/vanuatu_11.png",
  "./images/countriesImages/vanuatu_12.png",
  "./images/countriesImages/vanuatu_13.png",
  "./images/countriesImages/vanuatu_14.png",
  "./images/countriesImages/vanuatu_15.png",
  "./images/countriesImages/vanuatu_16.png",
  "./images/countriesImages/vanuatu_17.png",
  "./images/countriesImages/vanuatu_18.png",
  "./images/countriesImages/vanuatu_19.png",
  "./images/countriesImages/vanuatu_20.png",
];


  
  const slideshow = document.getElementById('slideshow');
  const dotsContainer = document.getElementById('dots');
  const dots = [];
  
  images.forEach((imageUrl, index) => {
    const img = document.createElement('img');
    img.src = imageUrl;
    slideshow.appendChild(img);
  
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
      setActiveSlide(index);
    });
    dotsContainer.appendChild(dot);
    dots.push(dot);
  });
  
  let currentSlide = 0;
  
  function setActiveSlide(slideIndex) {
    currentSlide = slideIndex;
    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }
  
  function showNextSlide() {
    currentSlide = (currentSlide + 1) % images.length;
    setActiveSlide(currentSlide);
  }
  
  setActiveSlide(currentSlide);
  setInterval(showNextSlide, 5000);
  