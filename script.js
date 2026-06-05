const button= document.getElementById("btn");
const quotes =["Keep going, you're doing great!",
    "Every expert was once a beginner.",
    "Small progress is still progress.",
    "Success comes from consistency.",
    "Believe in yourself."
];
button.addEventListener("click", ()=>{
     const randomIndex =
        Math.floor(Math.random() * quotes.length);

    document.getElementById("message").innerText =
        quotes[randomIndex];

});
