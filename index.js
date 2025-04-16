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


//   blinking LED for sections

// const ledDivider = document.querySelector('.led-divider');
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'pink', 'cyan', 'lime']; // Array of colors

// // Function to create and append an LED element with a specific color class
// function createLed(color) {
//   const led = document.createElement('div');
//   led.classList.add('led', color);
//   ledDivider.appendChild(led);
//   return led; // Return the created LED for the blinking animation
// }

// const leds = colors.map(color => createLed(color)); // Create LEDs based on the color array

// leds.forEach(led => {
//   const blink = () => {
//     led.style.opacity = '0.2';
//     setTimeout(() => {
//       led.style.opacity = '1';
//     }, 300);

//     const nextBlink = Math.random() * 5000 + 5000;
//     setTimeout(blink, nextBlink);
//   };

//   const initialDelay = Math.random() * 5000;
//   setTimeout(blink, initialDelay);
// });

////////////

// document.addEventListener('DOMContentLoaded', () => {
//     const ledDividers = document.querySelectorAll('.led-divider');
//     const possibleColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'pink', 'cyan', 'lime'];
  
//     function getRandomColor() {
//       return possibleColors[Math.floor(Math.random() * possibleColors.length)];
//     }
  
//     function createLed(parent) {
//       const led = document.createElement('div');
//       led.classList.add('led');
//       led.style.backgroundColor = getRandomColor();
//       parent.appendChild(led);
//       return led;
//     }
  
//     ledDividers.forEach(divider => {
//       const numberOfLEDs = 10; // Or determine dynamically if needed
//       const leds = Array.from({ length: numberOfLEDs }, () => createLed(divider));
  
//       leds.forEach(led => {
//         const blinkAndChangeColor = () => {
//           led.style.opacity = '0.2';
//           setTimeout(() => {
//             led.style.opacity = '1';
//             led.style.backgroundColor = getRandomColor();
//           }, 600);
  
//           const nextBlink = Math.random() * 5000 + 5000;
//           setTimeout(blinkAndChangeColor, nextBlink);
//         };
  
//         const initialDelay = Math.random() * 3000;
//         setTimeout(blinkAndChangeColor, initialDelay);
//       });
//     });
//   });


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