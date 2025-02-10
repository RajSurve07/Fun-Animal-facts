const facts = [
  "Slugs have four noses.",
  "A group of owls is called a parliament.",
  "Dolphins can call each other out by name using unique whistles.",
  "A giraffe's tongue can be up to 20 inches long!",
  "Squirrels can't vomit or burp."
];

const factDisplay = document.getElementById('fact-display');
const generateFactButton = document.getElementById('generate-fact');
const shareFactButton = document.getElementById('share-fact');

function displayRandomFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factDisplay.textContent = facts[randomIndex];
}

generateFactButton.addEventListener('click', displayRandomFact);

shareFactButton.addEventListener('click', () => {
  const currentFact = factDisplay.textContent;
  if (navigator.share) {
    navigator.share({
      text: currentFact
    })
    .then(() => console.log('Fact shared successfully.'))
    .catch((error) => console.error('Error sharing fact:', error));
  } else {
    alert("Your browser doesn't support sharing. Copy and paste the fact!");
  }
});

// Display a fact on page load
displayRandomFact();

