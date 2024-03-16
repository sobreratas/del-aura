//FADE IN - LEFT
const fadeIn = document.querySelectorAll(".fade-in");

const fadeInObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Add show class when intersected
        fadeInObserver.unobserve(entry.target); // Stop observing once shown
      }
    });
  },
  {
    threshold: 0.5,
  }
);

fadeIn.forEach((fade) => {
  fadeInObserver.observe(fade);
});

//FADE IN 2 - MIDDLE
const fadeIn2 = document.querySelectorAll(".fade-in-2");

const fadeIn2Observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Add show class when intersected
        fadeIn2Observer.unobserve(entry.target); // Stop observing once shown
      }
    });
  },
  {
    threshold: 0.5,
  }
);

fadeIn2.forEach((fade2) => {
  fadeIn2Observer.observe(fade2);
});

//FADE IN 3 - MIDDLE
const fadeIn3 = document.querySelectorAll(".fade-in-3");

const fadeIn3Observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Add show class when intersected
        fadeIn3Observer.unobserve(entry.target); // Stop observing once shown
      }
    });
  },
  {
    threshold: 0.5,
  }
);

fadeIn3.forEach((fade3) => {
  fadeIn3Observer.observe(fade3);
});

//RELEASE CLASS INTERSECTION OBSERVER 
const releases = document.querySelectorAll(".release");

const releasesObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) releasesObserver.unobserve(entry.target)
    })
},
    {
        threshold: .5,
    })

releases.forEach(release => {
    releasesObserver.observe(release)
})

//FOOTER COPYRIGHT TEXT
const year = document.querySelector('.year');
const currentYear = new Date().getFullYear();


year.innerHTML = currentYear;

//CAROUSEL

document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  let currentIndex = 0;
  let currentPercentage = 0

  function showNextSlide() {
      if(currentIndex >= slides.length - 3){
          return;
      } else {
          console.log()
          currentPercentage -= 26.5
          carousel.style.transform = `translateX(${currentPercentage}%)`;
      }  
  }

  function showPrevSlide() {
      if(currentIndex < 0){
          return;
      } else {
          currentPercentage += 26.5
          carousel.style.transform = `translateX(${currentPercentage}%)`;
      }  
  }

  prevButton.addEventListener('click', function () {
    if(currentIndex === 1){
      prevButton.style.background = "gray"
    }
      if(currentIndex <= 0){
        prevButton.style.background = "gray"
          return;
      } else {
          currentIndex--;
          console.log(currentIndex)
          showPrevSlide();
          nextButton.style.background = "#fff"
      }
      
  });

  nextButton.addEventListener('click', function () {
    if(currentIndex === slides.length - 5){
      nextButton.style.background = "gray";

    }
      if (currentIndex >= 4) {
          return;
      } else {
          currentIndex++;
          console.log(currentIndex)
          prevButton.style.background = "#fff"
          showNextSlide();
      }

  });
});