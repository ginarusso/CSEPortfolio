// Initialize the canvas and context
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

var myName = "Let's Create!"; // Your name or text to animate
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

// Track the initial positions of the letters
var initialPositions = [];

// Hover effect - make the text shake when hovering
canvas.addEventListener('mouseenter', startShaking);  // Start shaking on hover
canvas.addEventListener('mouseleave', stopShaking);   // Stop shaking when mouse leaves

// Variables to control the shaking effect
let shakeInterval;
let shaking = false;

// Function to draw the name on canvas (now handles centering)
function drawName(name, letterColors) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const fontSize = 20; // Match the font size used in shakeText for consistency
    const font = `${fontSize}px Chewy`;
    ctx.font = font;

    // Measure the total width of the text
    const textWidth = name.split('').reduce((acc, letter) => acc + ctx.measureText(letter).width, 0);
    const letterSpacing = 10; // Adjust as needed for spacing between letters
    const totalTextWidthWithSpacing = name.length > 0 ? textWidth + (name.length - 1) * letterSpacing : 0;

    // Calculate the starting x-coordinate to center the text horizontally
    const startX = (canvasWidth - totalTextWidthWithSpacing) / 2;
    let currentX = startX;

    // Calculate the vertical center
    const textBaseline = 'middle'; // Common baseline for vertical centering
    ctx.textBaseline = textBaseline;
    const startY = canvasHeight / 2; // Vertical center of the canvas

    // Clear the initialPositions array
    initialPositions.length = 0;

    name.split('').forEach((letter, index) => {
        ctx.fillStyle = `rgb(${letterColors[index % letterColors.length].join(',')})`; // Apply the color
        ctx.fillText(letter, currentX, startY);
        initialPositions.push({
            x: currentX,          // Store the centered x-position
            y: startY,              // Store the centered y-position
            offsetX: 0,          // X offset for shake (initially 0)
            offsetY: 0,          // Y offset for shake (initially 0)
        });
        currentX += ctx.measureText(letter).width + letterSpacing;
    });
}

// Function to start shaking
function startShaking() {
    if (!shaking) {
        shaking = true;
        shakeInterval = setInterval(() => {
            shakeText(); // Keep shaking the text
        }, 50); // Shake every 50ms
    }
}

// Function to stop shaking
function stopShaking() {
    if (shaking) {
        shaking = false;
        clearInterval(shakeInterval); // Stop the shaking
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
        drawName(myName, letterColors); // Redraw the text in its centered position
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startShaking() {
    if (!shaking) {
        shaking = true;
        // Shuffle the colors on each hover
        shuffleArray(letterColors);
        shakeInterval = setInterval(shakeText, 50);
    }
}



// Function to shake text
function shakeText() {
    const bounceIntensity = 50;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    initialPositions.forEach((pos, index) => {
        const offsetX = Math.random() * bounceIntensity - bounceIntensity / 2;
        const offsetY = Math.random() * bounceIntensity - bounceIntensity / 2;

        // Use the shuffled colors in sequence
        ctx.fillStyle = `rgb(${letterColors[index % letterColors.length].join(',')})`;

        ctx.font = "30px 'Chewy', cursive";
        ctx.fillText(myName[index], pos.x + offsetX, pos.y + offsetY);
    });
}

// Call drawName initially to center the text
drawName(myName, letterColors);

// Make the canvas dimensions responsive
function updateCanvasDimensions() {
    const parent = canvas.parentNode; // Assuming canvas-container is the parent
    canvas.width = parent.offsetWidth;
    canvas.height = 75; // Or your desired fixed height
    drawName(myName, letterColors); // Redraw the text centered on resize
}

window.addEventListener('resize', updateCanvasDimensions);

// Initial call to set up the canvas size and draw
updateCanvasDimensions();