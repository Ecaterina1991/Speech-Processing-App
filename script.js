const button = document.getElementById("button");
const bubble = document.getElementById("speech");

function renderJoke(joke) {
  bubble.textContent = joke;
}

async function getJokes() {
  const url =
    "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,racist,sexist,explicit";

  let joke;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.setup) {
      joke = `${data.setup}... ${data.delivery}`;
    } else {
      joke = data.joke;
    }
  } catch (e) {
    console.log(e);
  }

  renderJoke(joke);
}

button.addEventListener("click", getJokes);
