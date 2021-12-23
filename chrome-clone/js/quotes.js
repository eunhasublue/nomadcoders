const quotes = [
  {
    quote: "It is kind of fun to do the impossible",
    author: "Walt Disney",
  },
  {
    quote:
      "When you go through hardships and decide not to surrender, that is strength",
    author: "Arnold Schwarzenegger",
  },
  {
    quote: "There are better starters than me but I’m a strong finishe",
    author: "Usain Bolt",
  },
  {
    quote: "Tough times never last, but tough people do",
    author: "Robert H. Schuller",
  },
  {
    quote:
      "I’ve failed over and over and over again in my life and that is why I succeed",
    author: "Michael Jordan",
  },
  {
    quote:
      "But I know, somehow, that only when it is dark enough can you see the stars",
    author: "Martin Luther King, Jr",
  },
  {
    quote: "Grind Hard, Shine Hard. – Dwayne Johnson",
    author: "Dwayne Johnson",
  },
  {
    quote:
      "I didn’t get there by wishing for it or hoping for it, but by working for it",
    author: "Estée Lauder",
  },
  {
    quote:
      "You will face many defeats in life, but never let yourself be defeated",
    author: "Maya Angelou",
  },
  {
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years",
    author: "Abraham Lincoln",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;
