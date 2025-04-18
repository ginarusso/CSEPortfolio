const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const outerRadius = 7;
const innerRadius = 3;
const starLifespan = 300; // Increased lifespan for even slower fading
const dropSpeed = 0.05; // Further reduced drop speed
const starCreationInterval = 3; // Create a new star every N mousemove events
let mouseMoveCounter = 0;

// Function to generate a random color in rgba format
function getRandomColor() {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    return `rgba(${r}, ${g}, ${b}, `;
}

// Function to draw a star shape with a random color
function drawStarShape(star) {
    const points = 5;
    const outerX = star.x;
    const outerY = star.y;

    ctx.beginPath();
    for (let i = 0; i < 2 * points; i++) {
        const radius = (i % 2 === 0) ? outerRadius : innerRadius;
        const angle = Math.PI * i / points - Math.PI / 2;
        const x = outerX + radius * Math.cos(angle);
        const y = outerY + radius * Math.sin(angle);
        ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = `${star.color}${star.opacity})`;
    ctx.fill();
}

// Function to create a star object with a random color
function createStar(x, y) {
    stars.push({
        x: x,
        y: y,
        outerRadius: outerRadius,
        innerRadius: innerRadius,
        lifespan: starLifespan,
        opacity: 1,
        velocityY: dropSpeed,
        color: getRandomColor()
    });
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = stars.length - 1; i >= 0; i--) {
        const star = stars[i];
        star.y += star.velocityY || 0;
        drawStarShape(star);

        star.lifespan--;
        star.opacity = star.lifespan / starLifespan;

        if (star.lifespan <= 0) {
            stars.splice(i, 1);
        }
    }
}

// Event listener for mouse movement
canvas.addEventListener('mousemove', (event) => {
    mouseMoveCounter++;
    if (mouseMoveCounter % starCreationInterval === 0) {
        createStar(event.clientX, event.clientY);
        mouseMoveCounter = 0; // Reset the counter
    }
});

// Start the animation loop
animate();

// Handle canvas resizing
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});