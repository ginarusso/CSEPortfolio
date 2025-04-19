const starContainer = document.getElementById('starContainer');
const flowers = [];
const flowerImageSrc = '/images/flower.png'; // Replace with the actual path to your image
const flowerSize = 30; // Adjust the size of the flower image
const flowerLifespan = 200;
const dropSpeed = 1;
const flowerCreationInterval = 10;
let mouseMoveCounter = 0;

// Function to create a flower image element
function createFlower(x, y) {
    const flowerImg = document.createElement('img');
    flowerImg.src = flowerImageSrc;
    flowerImg.style.position = 'absolute';
    flowerImg.style.width = `${flowerSize}px`;
    flowerImg.style.height = `${flowerSize}px`;
    flowerImg.style.left = `${x - flowerSize / 2}px`;
    flowerImg.style.top = `${y - flowerSize / 2}px`;
    flowerImg.style.opacity = 1;
    flowerImg.lifespan = flowerLifespan;
    flowerImg.velocityY = dropSpeed;
    flowerImg.style.pointerEvents = 'none'; // Prevent image from interfering with mouse events

    starContainer.appendChild(flowerImg);
    flowers.push(flowerImg);
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    for (let i = flowers.length - 1; i >= 0; i--) {
        const flower = flowers[i];
        flower.style.top = `${parseInt(flower.style.top) + flower.velocityY}px`;
        flower.lifespan--;
        flower.style.opacity = flower.lifespan / flower.lifespan;

        if (flower.lifespan <= 0) {
            flower.remove();
            flowers.splice(i, 1);
        }
    }
}

// Event listener for mouse movement within the container
starContainer.addEventListener('mousemove', (event) => {
    mouseMoveCounter++;
    if (mouseMoveCounter % flowerCreationInterval === 0) {
        const containerRect = starContainer.getBoundingClientRect();
        const localX = event.clientX - containerRect.left;
        const localY = event.clientY - containerRect.top;
        createFlower(localX, localY);
        mouseMoveCounter = 0;
    }
});

// Event listeners to start and stop the animation on hover
starContainer.addEventListener('mouseenter', () => {
    animate();
    flowers.forEach(flower => flower.remove());
    flowers.length = 0;
});

starContainer.addEventListener('mouseleave', () => {
    // Let flowers fade out
});