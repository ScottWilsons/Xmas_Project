const genButton = document.querySelector("#generateButton");
const stryTitle = document.querySelector("#storyTitle");
const stryText = document.querySelector("#storyText");
const stryAuthor = document.querySelector("#storyAuthor");
const stryMoral = document.querySelector("#storyMoral");

async function getStory() {
  const response = await fetch("https://shortstories-api.herokuapp.com/");
  const data = await response.json();
  stryTitle.innerText = data.title;
  stryText.innerText = data.story;
  stryAuthor.innerText = data.author;
  stryMoral.innerText = data.moral;
}
getStory();
genButton.addEventListener("click", getStory);
