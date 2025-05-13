document.addEventListener('DOMContentLoaded', () => {
  const ledDividers = document.querySelectorAll('.led-divider');
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'pink', 'cyan', 'lime']; // Array of color class names
  const alienHeadColor = 'lime';
  
  function createLed(parent, shape, colorClass) {
    const led = document.createElement('div');
    led.classList.add('led');
    if (shape) {
      led.classList.add(shape);
    } else {
      led.classList.add('rectangle');
    }
    if (shape === 'alien-head') {
      led.style.color = alienHeadColor; // Force lime green for alien heads
    } else if (colorClass) {
      led.classList.add(colorClass); // Add the specific color class for others
      led.style.color = colorClass; // Set the 'color' property for currentColor
    }
    parent.appendChild(led);
    return led;
  }

  ledDividers.forEach(divider => {
    const numberOfLEDs = colors.length;
    const ledShape = divider.dataset.ledShape;

    // Create LEDs with specific color classes
    for (let i = 0; i < numberOfLEDs; i++) {
      createLed(divider, ledShape, colors[i]);
    }

    const leds = divider.querySelectorAll('.led');

    leds.forEach(led => {
      const blink = () => { // Renamed to 'blink' since color isn't changing here
        led.style.opacity = '0.2';
        setTimeout(() => {
          led.style.opacity = '1';
        }, 600);

        const nextBlink = Math.random() * 5000 + 5000;
        setTimeout(blink, nextBlink);
      };

      const initialDelay = Math.random() * 3000;
      setTimeout(blink, initialDelay);
    });
  });
});

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default jump

        document.body.classList.remove('nav-open'); // Close the menu

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Smoothly scroll to the target section after a slight delay
        setTimeout(() => {
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 150); // Adjust the delay as needed
    });
});

// Get the button
let arrowUp = document.getElementById('arrow-up');

// When the user scrolls down 30px from the top of the document, show the button
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
function topFunction() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  arrowUp.addEventListener('click', function (e) {
    e.preventDefault(); // stop default jump
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  });


  function toggleReadMore(button) {
    const moreText = button.previousElementSibling.querySelector('.more-text');
    const isVisible = moreText.style.display === 'inline';

    moreText.style.display = isVisible ? 'none' : 'inline';
    button.textContent = isVisible ? 'Read More' : 'Read Less';
  }

function togglePlayGame(button) {
  // Toggle visibility of .game-image elements
  const images = document.querySelectorAll('.game-image');
  const currentlyVisible = images[0].style.display !== 'none';

  images.forEach(img => {
    img.style.display = currentlyVisible ? 'none' : 'inline'; // or 'block'
  });

  // Toggle visibility of the .play-game element
  const playGame = document.querySelector('.play-game');
  if (!playGame) return;

  const isGameVisible = playGame.style.display === 'block';
  playGame.style.display = isGameVisible ? 'none' : 'inline';

  // Update button text
  button.textContent = isGameVisible ? 'Play my whack-a-mole game' : 'Hide the game';
}

