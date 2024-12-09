// Function to change the traffic light
function changeLight() {
    // Get all light elements
    const redLight = document.getElementById('red');
    const yellowLight = document.getElementById('yellow');
    const greenLight = document.getElementById('green');

    // Turn off all lights
    redLight.classList.remove('active');
    yellowLight.classList.remove('active');
    greenLight.classList.remove('active');

    // Cycle through lights in order: red -> yellow -> green
    setTimeout(() => {
        redLight.classList.add('active'); // Turn on red light
    }, 0);
    
    setTimeout(() => {
        redLight.classList.remove('active'); // Turn off red light
        yellowLight.classList.add('active'); // Turn on yellow light
    }, 3000); // Wait for 3 seconds

    setTimeout(() => {
        yellowLight.classList.remove('active'); // Turn off yellow light
        greenLight.classList.add('active'); // Turn on green light
    }, 5000); // Wait for 2 seconds

    setTimeout(() => {
        greenLight.classList.remove('active'); // Turn off green light
    }, 8000); // Wait for 3 seconds

}

// Start the traffic light cycle
setInterval(changeLight, 8000);
