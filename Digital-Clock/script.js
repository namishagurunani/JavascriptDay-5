// Get references to clock elements
const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minutes");
const secondElement = document.getElementById("seconds");
const ampmElement = document.getElementById("ampm");
const clockContainer = document.querySelector(".clock");

// Function to update the clock
function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Display time with leading zeros
  hourElement.textContent = hours.toString().padStart(2, "0");
  minuteElement.textContent = minutes.toString().padStart(2, "0");
  secondElement.textContent = seconds.toString().padStart(2, "0");
  ampmElement.textContent = ampm;

  // Add any additional features here
  // Example: Change background image based on time of day
  const currentHour = now.getHours();
  if (currentHour >= 6 && currentHour < 18) {
    document.body.style.backgroundImage = "url(morning.jpg)";
  } else {
    document.body.style.backgroundImage = "url(night.avif)";
  }
}

// Call updateClock initially and then every second
updateClock();
setInterval(updateClock, 1000);

// Add event listeners for interactive elements
// Example: Display a random time fact on button click
const factButton = document.getElementById("fact-button");
const factDisplay = document.getElementById("fact-display");

const timeFacts = [
  "The first mechanical clocks were invented in the 14th century.",
  "The longest time between two twins being born is 87 days.",
  "The concept of time travel is a popular theme in science fiction.",
  // Add more facts here
];

factButton.addEventListener("click", () => {
  const randomFact = timeFacts[Math.floor(Math.random() * timeFacts.length)];
  factDisplay.textContent = randomFact;
});
