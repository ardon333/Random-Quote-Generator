const quotes = [
  {
    quote: "I'm not here to be perfect, I'm here to be real",
    author: "Lady Gaga",
  },
  {
    quote: "I'm not interested in money. I just want to be wonderful",
    author: "Marilyn Monroe",
  },
  {
    quote:
      "The only thing that feels better than winning is winning when nobody thought you could",
    author: "Hank Aaron",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "If you can dream it, you can do it",
    author: " Walt Disney",
  },
  {
    quote: "If you want something done, ask a busy person to do it",
    author: "Laura Ingalls Wilder",
  },
  {
    quote:
      "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
    author: "John Quincy Adams",
  },
  {
    quote:
      "The best way to find out if you can trust somebody is to trust them.",
    author: "Ernest Hemingway",
  },
];

const btn=document.querySelector("#new-quote");
const person=document.querySelector(".person");
const quote=document.querySelector(".quote");


btn.addEventListener("click",function(){
    let random=Math.trunc(Math.random()*quotes.length);
    const obj=quotes.at(random);

    person.textContent=obj.author;
    quote.textContent=obj.quote;
})
