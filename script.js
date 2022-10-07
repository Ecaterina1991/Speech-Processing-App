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
  tellMeAJoke(joke);
}

function tellMeAJoke(joke) {
  VoiceRSS.speech({
    key: "0a83c2eec6ee43a8a9c5a51660bb6d4e",
    src: joke,
    hl: "en-us",
    v: "Mike",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

button.addEventListener("click", getJokes);
