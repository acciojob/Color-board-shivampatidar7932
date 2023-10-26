//your JS code here. If required.
// Wait for the DOM to be fully loaded before running JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Get all square elements
    const squares = document.querySelectorAll('.square');

    // Add an event listener to each square
    squares.forEach(square => {
        square.addEventListener('mouseenter', () => {
            // Change the background color on hover
            square.style.backgroundColor = getRandomColor();
        });

        square.addEventListener('mouseleave', () => {
            // Smoothly transition back to the initial color after 1 second
            setTimeout(() => {
                square.style.backgroundColor = '#e0e0e0';
            }, 1000);
        });
    });

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
