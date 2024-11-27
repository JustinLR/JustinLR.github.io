const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define the code characters
const characters = "01"; // Feel free to customize this
const fontSize = 20; // Font size of the characters
const columns = canvas.width / fontSize; // Number of columns based on font size

// Array to hold the y-coordinate of each column
const drops = Array(Math.floor(columns)).fill(1);

// Function to draw the matrix
function draw() {
    // Dark background with slight transparency for fading effect
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Green color for the characters
    ctx.fillStyle = "#0f0";
    ctx.font = `${fontSize}px monospace`;

    // Loop through each column and draw the characters
    drops.forEach((y, x) => {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, x * fontSize, y * fontSize);

        // Reset drop to the top randomly or move it down
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[x] = 0;
        }

        drops[x]++;
    });
}

// Adjust the speed by controlling the interval of the draw function
setInterval(draw, 100); // Lower values make it faster, higher slows it down

// Resize canvas when the window is resized
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
