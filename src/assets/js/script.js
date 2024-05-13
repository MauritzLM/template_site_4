// faq functionality
const faqItems = document.querySelectorAll("#faq .container .faq-item");
const faqAnswers = document.querySelectorAll("#faq .faq-item p");
const faqIcons = document.querySelectorAll("#faq .faq-item img");

// show / hide faq answer
for (let i = 0; i < faqItems.length; i++) {
    faqItems[i].addEventListener("click", () => {
        faqAnswers[i].classList.toggle("hidden");

        // toggle img src
        faqAnswers[i].classList.contains("hidden") ? faqIcons[i].src = "/assets/svgs/add.svg" : faqIcons[i].src = "/assets/svgs/remove.svg";
    });
};