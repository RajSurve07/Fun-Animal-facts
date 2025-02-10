const factDisplay = document.getElementById('fact-display');
const generateFactButton = document.getElementById('generate-fact');

generateFactButton.addEventListener('click', () => {
  // Here you'll add logic to fetch a fact (from an API or your data) 
  // and update the `factDisplay.textContent` with the retrieved fact.
  factDisplay.textContent = "Here's where the fact will appear!";
});
