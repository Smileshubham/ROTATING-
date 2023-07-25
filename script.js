const open1 = document.getElementById('open1')
const close1 = document.getElementById('close1')
const container1 = document.querySelector('.container1')

open1.addEventListener('click', () => container1.classList.add('show-nav'))

close1.addEventListener('click', () => container1.classList.remove('show-nav'))
window.onscroll = function () { myfunction() };
function myfunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        container1.classList.remove('show-nav');
    }
};
// day mode night mode button
const night = document.getElementById('butu')
night.addEventListener('click', () => container1.classList.toggle('darkmode'));

var typed = new Typed('#element', {
    strings: ['Web Developer &', 'Python Programmer'],
    typeSpeed: 50,
});

