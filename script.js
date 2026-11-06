// Keep the celebration options together so it's easy to add more.
const tinyWins = [
  "You got out of bed. The bed has filed an appeal.",
  "You remembered a thing. Your brain gets a tiny hat.",
  "You made it through today without becoming a houseplant.",
  "You did the hard thing. Please accept this imaginary kazoo.",
  "You took a break. Productivity has been informed.",
  "You found the thing that was in your hand. A classic triumph.",
];

const awardButton = document.querySelector("#award-button");
const awardMessage = document.querySelector("#award-message");

// Pick a random win and show it on the certificate when the button is pressed.
awardButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * tinyWins.length);
  awardMessage.textContent = tinyWins[randomIndex];
});
