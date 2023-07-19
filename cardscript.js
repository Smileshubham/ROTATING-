document.addEventListener('DOMContentLoaded', function () {
  const cardsContainer = document.querySelector('.cards');
  const cardHeight = document.querySelector('.card').offsetHeight; /* Use offsetHeight for vertical cards */
  const cards = cardsContainer.querySelectorAll('.card');
  const cardCount = cards.length;
  const cardToShow = all; // Adjust the number of cards to show in the carousel

  // Clone the initial set of cards
  for (let i = 0; i < cardToShow; i++) {
    const clone = cards[i].cloneNode(true);
    cardsContainer.appendChild(clone);
  }
});




// document.addEventListener('DOMContentLoaded', function () {
//   const carousel = document.querySelector('.carousel');
//   const cardsContainer = document.querySelector('.cards');
//   const cardWidth = document.querySelector('.card').offsetHeight;
//   const autoScrollInterval = 2000; // Adjust the interval as desired (in milliseconds)
//   let translateY = 0;
//   let autoScrollIntervalId;

//   // Clone the initial set of cards and append them to the carousel
//   const cards = cardsContainer.querySelectorAll('.card');
//   cardsContainer.innerHTML += cardsContainer.innerHTML;

//   function moveNext() {
//     translateY -= cardWidth;
//     cardsContainer.style.transition = 'transform 0.3s ease';
//     cardsContainer.style.transform = `translateY(${translateY}px)`;

//     // Reset the translation and transition properties when reaching the end
//     if (Math.abs(translateY) >= cardWidth * cards.length) {
//       setTimeout(() => {
//         cardsContainer.style.transition = 'ease';
//         translateY = 0;
//         cardsContainer.style.transform = `translateY(${translateY}px)`;
//       }, 300); // Adjust the delay (in milliseconds) to match the transition duration
//     }
//   }

//   function startAutoScroll() {
//     autoScrollIntervalId = setInterval(moveNext, autoScrollInterval);
//   }

//   function stopAutoScroll() {
//     clearInterval(autoScrollIntervalId);
//   }

//   carousel.addEventListener('mouseenter', stopAutoScroll);
//   carousel.addEventListener('mouseleave', startAutoScroll);

//   // Start auto-scrolling initially
//   startAutoScroll();
// });
