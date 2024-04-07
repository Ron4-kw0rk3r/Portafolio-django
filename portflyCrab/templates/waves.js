// waves.js

// Get the canvas element and its context
const canvas = document.getElementById('wavesCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set wave properties
const waveCount = 3; // Number of waves
const waveSpeed = 0.02; // Speed of waves
const waveAmplitude = 50; // Amplitude of waves
const waveFrequency = 0.01; // Frequency of waves

// Function to draw waves
function drawWaves() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < waveCount; i++) {
        const yOffset = i * 100; // Adjust vertical position of waves

        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);

        for (let x = 0; x < canvas.width; x++) {
            const y = canvas.height / 2 + Math.sin(x * waveFrequency + i * Math.PI * 2 / waveCount) * waveAmplitude;
            ctx.lineTo(x, y + yOffset);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();

        ctx.fillStyle = `rgba(0, 128, 255, 0.2)`;
        ctx.fill();
    }
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    drawWaves();
}

// Start animation
animate();
