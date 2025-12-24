// Change background color to a random color
function changeBackgroundColor() {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0FF33', '#FF33F0', '#33FFF0'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// Reset background color (clear style completely)
function resetBackgroundColor() {
  document.body.style.backgroundColor = '';
}

// Display the key pressed
function displayKeyPress(event) {
  const keyDisplay = document.getElementById('keyPressDisplay');
  keyDisplay.textContent = `Key pressed: ${event.key}`;
}

// Display real-time user input
function displayUserInput() {
  const inputField = document.getElementById('textInput');
  const inputDisplay = document.getElementById('textInputDisplay');
  inputDisplay.textContent = `You typed: ${inputField.value}`;
}

// Setup event listeners
function setupEventListeners() {
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor);

  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor);

  document.addEventListener('keydown', displayKeyPress);

  document.getElementById('textInput').addEventListener('input', displayUserInput);
}

// Initialize when DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners);
}

// Export functions for Jest
module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};
