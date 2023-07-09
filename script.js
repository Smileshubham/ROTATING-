const open1 = document.getElementById('open1')
const close1 = document.getElementById('close1')
const container1 = document.querySelector('.container1')

open1.addEventListener('click', () => container1.classList.add('show-nav'))

close1.addEventListener('click', () => container1.classList.remove('show-nav'))
window.onscroll=function(){myfunction()};
function myfunction(){
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
        container1.classList.remove('show-nav');
    }   
};
// day mode night mode button
const night=document.getElementById('butu')
night.addEventListener('click',() => container1.classList.toggle('darkmode'));

var typed = new Typed('#element', {
    strings: ['Web Developer &', 'Python Programmer'],
    typeSpeed: 50,
});


window.addEventListener('resize', function() {
    adjustBlackImageSize();
  });
  
  function adjustBlackImageSize() {
    const laptopComponent = document.querySelector('.about-me');
    const laptopImage = document.querySelector('#imgs2');
    const blackImage = document.querySelector('.black-image');
  
    const laptopWidth = laptopComponent.offsetWidth;
    const laptopHeight = laptopComponent.offsetHeight;
    const laptopRatio = laptopWidth / laptopHeight;
  
    const laptopImageWidth = laptopImage.offsetWidth;
    const laptopImageHeight = laptopImage.offsetHeight;
    const laptopImageRatio = laptopImageWidth / laptopImageHeight;
  
    if (laptopRatio > laptopImageRatio) {
      blackImage.style.width = '100%';
      blackImage.style.height = 'auto';
    } else {
      blackImage.style.width = 'auto';
      blackImage.style.height = '100%';
    }
  }
  
  // Call the function initially to set the black image size
  adjustBlackImageSize();
