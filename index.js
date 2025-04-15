const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

// navToggle.addEventListener('click', () => {
//     document.body.classList.toggle('nav-open');
// });

// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         document.body.classList.remove('nav-open');
//     })
// })

// Get the button
let arrowUp = document.getElementById('arrow-up');

// When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function () {
    scrollFunction()
}
function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        arrowUp.style.display = 'block'
    } else {
        arrowUp.style.display = 'none'
    }
}
// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   }

  arrowUp.addEventListener('click', function (e) {
    e.preventDefault(); // stop default jump
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  });