function displayPlace(response) {
  new Typewriter("#place", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePlace(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instruction");
  let apiKey = "81a6fa4co08122d988ca3t732b0bd522";
  let prompt = `User instructions:Generate a beautiful place about ${instructionInput.value}`;
  let context =
    "You are a  skillful traveller and love to search interesting places. Your mission is to generate a 4 lines sentences in basic HTML and separte each line with a </br>. Make sure to follow the user instructions. Don't include the title of the paragraph. Sign the place with `SheCodes AI` inside a <strong> element at the end of the paragraph and Not at the beginning";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let placeElement = document.querySelector("#place");
  placeElement.classList.remove("hidden");
  placeElement.innerHTML = `<div class="generating">⏳Generating the place to travel about ${instructionInput.value}...</div>`;

  axios.get(apiUrl).then(displayPlace);
}
let placegeneratorElement = document.querySelector("#place-generator");
placegeneratorElement.addEventListener("submit", generatePlace);
