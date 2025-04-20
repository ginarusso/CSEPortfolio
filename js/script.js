// // Initialize the canvas and context
// const canvas = document.getElementById("myCanvas");
// const ctx = canvas.getContext("2d");

// var myName = "Let's Create!"; // Your name or text to animate
// var letterColors = [
//     [0, 100, 63],     // red
//     [40, 100, 60],    // orange
//     [55, 100, 50],    // yellow
//     [80, 100, 50],    // lime
//     [120, 100, 40],   // green
//     [180, 100, 40],   // teal
//     [180, 100, 60],   // cyan
//     [220, 100, 55],   // blue
//     [270, 100, 30],   // indigo
//     [300, 100, 50],   // violet
//     [330, 100, 50],   // magenta
//     [350, 100, 70],   // pink
//     [50, 100, 70],    // gold
//     [0, 0, 80],       // silver
//     [30, 60, 50],    // bronze
//     [0, 80, 50],     // deepRed
//     [100, 70, 40],   // forestGreen
//     [200, 90, 70],   // skyBlue
//     [220, 70, 40],   // darkBlue
//     [270, 60, 80],   // lavender
//     [330, 100, 70],   // hotPink
//     [16, 100, 70],    // coral
//     [6, 100, 80],     // salmon
//     [170, 100, 50],   // turquoise
//     [60, 80, 50],    // olive
//     [0, 70, 40],     // maroon
//     [240, 100, 30],   // navy
//     [90, 100, 70],    // lightGreen
//     [210, 100, 70],   // lightBlue
//     [350, 100, 90],   // lightPink
//     [30, 80, 30],    // brown
//     [40, 70, 90],    // beige
//     [45, 60, 95],    // cream
//     [0, 0, 50],       // slateGray
//     [0, 0, 70],       // lightGray
//     [0, 0, 30]        // darkGray
// ];

// // Track the initial positions of the letters
// var initialPositions = [];

// // Hover effect - make the text shake when hovering
// canvas.addEventListener('mouseenter', startShaking);  // Start shaking on hover
// canvas.addEventListener('mouseleave', stopShaking);   // Stop shaking when mouse leaves

// // Variables to control the shaking effect
// let shakeInterval;
// let shaking = false;

// // Function to draw the name on canvas (now handles centering)
// function drawName(name, letterColors) {
//     const canvas = document.getElementById("myCanvas");
//     const ctx = canvas.getContext("2d");
//     const canvasWidth = canvas.width;
//     const canvasHeight = canvas.height;
//     const fontSize = 20; // Match the font size used in shakeText for consistency
//     const font = `${fontSize}px Mystery Quest`;
//     ctx.font = font;

//     // Set the text shadow properties
//     ctx.shadowOffsetX = 2;   // Horizontal offset
//     ctx.shadowOffsetY = 2;   // Vertical offset
//     ctx.shadowBlur = 3;    // Blur amount
//     ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // Shadow color (semi-transparent black)

//     // Measure the total width of the text
//     const textWidth = name.split('').reduce((acc, letter) => acc + ctx.measureText(letter).width, 0);
//     const letterSpacing = 10; // Adjust as needed for spacing between letters
//     const totalTextWidthWithSpacing = name.length > 0 ? textWidth + (name.length - 1) * letterSpacing : 0;

//     // Calculate the starting x-coordinate to center the text horizontally
//     const startX = (canvasWidth - totalTextWidthWithSpacing) / 2;
//     let currentX = startX;

//     // Calculate the vertical center
//     const textBaseline = 'middle'; // Common baseline for vertical centering
//     ctx.textBaseline = textBaseline;
//     const startY = canvasHeight / 2; // Vertical center of the canvas

//     // Clear the initialPositions array
//     initialPositions.length = 0;

//     name.split('').forEach((letter, index) => {
//         ctx.fillStyle = `rgb(${letterColors[index % letterColors.length].join(',')})`; // Apply the color
//         ctx.fillText(letter, currentX, startY);
//         initialPositions.push({
//             x: currentX,          // Store the centered x-position
//             y: startY,              // Store the centered y-position
//             offsetX: 0,          // X offset for shake (initially 0)
//             offsetY: 0,          // Y offset for shake (initially 0)
//         });
//         currentX += ctx.measureText(letter).width + letterSpacing;
//     });
// }

// // Function to start shaking
// function startShaking() {
//     if (!shaking) {
//         shaking = true;
//         shakeInterval = setInterval(() => {
//             shakeText(); // Keep shaking the text
//         }, 50); // Shake every 50ms
//     }
// }

// // Function to stop shaking
// function stopShaking() {
//     if (shaking) {
//         shaking = false;
//         clearInterval(shakeInterval); // Stop the shaking
//         ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
//         drawName(myName, letterColors); // Redraw the text in its centered position
//     }
// }

// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

// function startShaking() {
//     if (!shaking) {
//         shaking = true;
//         // Shuffle the colors on each hover
//         shuffleArray(letterColors);
//         shakeInterval = setInterval(shakeText, 50);
//     }
// }



// // Function to shake text
// function shakeText() {
//     const bounceIntensity = 50;

//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//  // Set the text shadow properties (same as in drawName for consistency)
//     ctx.shadowOffsetX = 2;
//     ctx.shadowOffsetY = 2;
//     ctx.shadowBlur = 3;
//     ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';

//     initialPositions.forEach((pos, index) => {
//         const offsetX = Math.random() * bounceIntensity - bounceIntensity / 2;
//         const offsetY = Math.random() * bounceIntensity - bounceIntensity / 2;

//         // Use the shuffled colors in sequence
//         ctx.fillStyle = `rgb(${letterColors[index % letterColors.length].join(',')})`;

//         ctx.font = "30px 'Mystery Quest', cursive";
//         ctx.fillText(myName[index], pos.x + offsetX, pos.y + offsetY);
//     });
// }

// // Call drawName initially to center the text
// drawName(myName, letterColors);

// // Make the canvas dimensions responsive
// function updateCanvasDimensions() {
//     const parent = canvas.parentNode; // Assuming canvas-container is the parent
//     canvas.width = parent.offsetWidth;
//     canvas.height = 75; // Or your desired fixed height
//     drawName(myName, letterColors); // Redraw the text centered on resize
// }

// window.addEventListener('resize', updateCanvasDimensions);

// // Initial call to set up the canvas size and draw
// updateCanvasDimensions();

// Initialize the canvas and context
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

var correctPhrase = "Let's Create!";
var words = correctPhrase.split(" ");
var letterColors = [
    [0, 100, 63],     // red
    [40, 100, 60],    // orange
    [55, 100, 50],    // yellow
    [80, 100, 50],    // lime
    [120, 100, 40],   // green
    [180, 100, 40],   // teal
    [180, 100, 60],   // cyan
    [220, 100, 55],   // blue
    [270, 100, 30],   // indigo
    [300, 100, 50],   // violet
    [330, 100, 50],   // magenta
    [350, 100, 70],   // pink
    [50, 100, 70],    // gold
    [0, 0, 80],       // silver
    [30, 60, 50],    // bronze
    [0, 80, 50],     // deepRed
    [100, 70, 40],   // forestGreen
    [200, 90, 70],   // skyBlue
    [220, 70, 40],   // darkBlue
    [270, 60, 80],   // lavender
    [330, 100, 70],   // hotPink
    [16, 100, 70],    // coral
    [6, 100, 80],     // salmon
    [170, 100, 50],   // turquoise
    [60, 80, 50],    // olive
    [0, 70, 40],     // maroon
    [240, 100, 30],   // navy
    [90, 100, 70],    // lightGreen
    [210, 100, 70],   // lightBlue
    [350, 100, 90],   // lightPink
    [30, 80, 30],    // brown
    [40, 70, 90],    // beige
    [45, 60, 95],    // cream
    [0, 0, 50],       // slateGray
    [0, 0, 70],       // lightGray
    [0, 0, 30]        // darkGray
];

function shuffleString(str) {
    const a = str.split("");
    const n = a.length;
    for (let i = n - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a.join("");
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Initially jumble the words
var jumbledWords = words.map(word => shuffleString(word));
var currentName = jumbledWords.join(" ");

function drawText(text, colors) {
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const fontSize = 20;
    const font = `${fontSize}px Mystery Quest`;
    ctx.font = font;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.textBaseline = 'middle';
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    let currentX = 0;
    const letters = text.split("");
    const totalTextWidth = letters.reduce((sum, letter) => sum + ctx.measureText(letter).width, 0) + (letters.length - 1) * 10;
    const startX = (canvasWidth - totalTextWidth) / 2;
    currentX = startX;

    letters.forEach((letter, index) => {
        // Pick a random color from the colors array for each letter
        const randomIndex = Math.floor(Math.random() * colors.length);
        ctx.fillStyle = `rgb(${colors[randomIndex].join(',')})`;
        ctx.fillText(letter, currentX, canvasHeight / 2);
        currentX += ctx.measureText(letter).width + 10;
    });
}

let shakeInterval;
let shaking = false;

function startShaking() {
    if (!shaking) {
        shaking = true;
        shakeInterval = setInterval(shakeText, 50);
    }
}

function stopShaking() {
    if (shaking) {
        shaking = false;
        clearInterval(shakeInterval);
        shuffleArray(letterColors); // Shuffle the colors *before* drawing the final text
        drawText(correctPhrase, letterColors); // Draw the correctly spelled phrase with the shuffled colors
    }
}

// Get the audio element
const hoverSound = document.getElementById("hoverSound");

function startHover() {
    console.log("Mouse entered canvas");
    startShaking();
    hoverSound.play();
}

function stopHover() {
    console.log("Mouse left canvas");
    stopShaking();
    hoverSound.pause();
    hoverSound.currentTime = 0;
}

function shakeText() {
    const bounceIntensity = 30; // Increased bounce intensity
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';

    const letters = currentName.split("");
    const randomizedColors = shuffleArray([...letterColors]);

    let currentX = 0;
    const totalTextWidth = letters.reduce((sum, letter) => sum + ctx.measureText(letter).width, 0) + (letters.length - 1) * 10;
    const startX = (canvas.width - totalTextWidth) / 2;
    currentX = startX;

    letters.forEach((letter, index) => {
        const offsetX = Math.random() * bounceIntensity - bounceIntensity / 2;
        const offsetY = Math.random() * bounceIntensity - bounceIntensity / 2;
        ctx.fillStyle = `rgb(${randomizedColors[index % randomizedColors.length].join(',')})`;
        ctx.font = `30px 'Mystery Quest'`;
        ctx.fillText(letter, currentX + offsetX, canvas.height / 2 + offsetY);
        currentX += ctx.measureText(letter).width + 10;
    });
}

// Initial drawing
shuffleArray(letterColors);
drawText(currentName, letterColors);

function updateCanvasDimensions() {
    const parent = canvas.parentNode;
    canvas.width = parent.offsetWidth;
    canvas.height = 75;
    drawText(currentName, letterColors);
}

window.addEventListener('resize', updateCanvasDimensions);
updateCanvasDimensions();

canvas.addEventListener('mouseenter', startHover);
canvas.addEventListener('mouseleave', stopHover);