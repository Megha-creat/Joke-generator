function getJoke() {
  const jokeBox = document.getElementById('joke');

  fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    jokeBox.innerText = data.joke;
  })
  .catch(error => {
    jokeBox.innerText = "Oops! Something went wrong. Try again.";
    console.error("Error fetching joke:", error);
  });
}
