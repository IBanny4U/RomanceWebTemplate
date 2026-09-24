console.log("JavaScript is connected!"); //just comfirmation

const character = document.getElementById("character");
const question = document.getElementById("question");

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");


// =========================
// YES BUTTON
// =========================

yesButton.addEventListener("click", function () {
      
    // Change character
    character.src = "/lib/img/TransparentCha/ExcitedTeanCat.png";

    // Change question
    question.textContent = "I knew it! ❤️";


        // Hide Yes / No buttons
    document.querySelector(".answer-buttons").style.display = "none";

    // Show input
    document.getElementById("love-input").style.display = "block";

});

submitAnswer.addEventListener("click", function () {

    const answer = loveAnswer.value.trim();

    if (answer === "အာဘွား") {

        // Go to next page
        window.location.href = "index.html";

    } else {

        inputMessage.textContent =
            "ဟယ်... အာဘွားလို့ ရိုက်ပါဆို 🥺❤️";

    }

});











// =========================
// NO BUTTON
// =========================
let noClickCount = 0;

const noCharacters = [
    "/lib/img/TransparentCha/SheckedTranCat.png",
    "/lib/img/TransparentCha/SadTranCat.png",
    "/lib/img/TransparentCha/SheckedTranCat.png",
    "/lib/img/TransparentCha/SadTranCat.png"

];

const noMessages = [
    "Do you love me? ❤️",
    "Really? 🥺",
    "Please don't say no 😭",
    "You can't escape me! 😂❤️"
];


noButton.addEventListener("click", function () {


    // Change question
    // Increase counter
     noClickCount++;

   // Restart after 4
    if (noClickCount >= noCharacters.length) {
        noClickCount = 0;
    }

    // Change character
    character.src = noCharacters[noClickCount];

    // Change text
    question.textContent = noMessages[noClickCount];

    //Moving Section
        const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = "fixed";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";





});