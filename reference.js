// Reference Solution

// Step 1: Select the button and add event listener
const loadBtn = document.getElementById("loadBtn");
const messageText = document.getElementById("messageText");

loadBtn.addEventListener("click", fetchMessage);

// Step 2: Create async function to fetch message
async function fetchMessage() {
  try {
    // Step 3: Fetch data from the Bacon Ipsum API
    const response = await fetch("https://baconipsum.com/api/?type=meat-and-filler&paras=1");

    // Step 4: Convert the response to JSON
    const data = await response.json();

    // Step 5: Display the first paragraph of the response in the card
    messageText.textContent = data[0];
  } catch (error) {
    // Handle errors gracefully
    console.error("Fetch error:", error);
    messageText.textContent = "Something went wrong. Please try again.";
  }
}
