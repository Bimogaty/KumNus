const answerPhotos = [
    "photo/photo1.webp",
    "photo/photo2.webp",
    "photo/photo3.webp",
    "photo/photo4.webp",
    "photo/photo5.webp",
    "photo/photo6.webp",
    "photo/photo7.webp",
    "photo/photo8.webp",
    "photo/photo9.webp",
    "photo/photo10.webp",
    "photo/photo11.webp",
    "photo/photo12.webp",
    "photo/photo13.webp",
    "photo/photo14.webp",
    "photo/photo15.webp",
    "photo/photo16.webp",
    "photo/photo17.webp",
    "photo/photo18.webp",
    "photo/photo19.webp",
    "photo/photo20.webp",
    "photo/photo21.webp",
    "photo/photo22.webp",
    "photo/photo23.webp",
    "photo/photo24.webp",
    "photo/photo25.webp",
    "photo/photo26.webp",
    "photo/photo27.webp",
    "photo/photo28.webp",
];

const questionPhotos = [
    "text/text1.webp",
    "text/text2.webp",
    "text/text3.webp",
    "text/text4.webp",
    "text/text5.webp",
    "text/text6.webp",
    "text/text7.webp",
    "text/text8.webp",
    "text/text9.webp",
    "text/text10.webp",
    "text/text11.webp",
    "text/text12.webp",
    "text/text13.webp",
    "text/text14.webp",
    "text/text15.webp",
    "text/text16.webp",
    "text/text17.webp",
    "text/text18.webp",
    "text/text19.webp",
    "text/text20.webp",
    "text/text21.webp",
    "text/text22.webp",
    "text/text23.webp",
    "text/text24.webp",
    "text/text25.webp",
    "text/text26.webp",
    "text/text27.webp",
    "text/text28.webp",
];

let currentIndex = 0;
let shuffledIndices = [];

function start() {
    document.getElementById("start-button").classList.add("hidden");
    document.getElementById("question-photo").classList.remove("hidden");
    document.getElementById("show-answer-button").classList.remove("hidden");
    document.getElementById("question-count").classList.remove("hidden");

    if (shuffledIndices.length === 0) {
        shuffledIndices = shuffleArray(questionPhotos.length);
    }

    document.getElementById("question-photo").src = questionPhotos[shuffledIndices[currentIndex]];
    updateQuestionCount();
}

function updateQuestionCount() {
    const questionCountElement = document.getElementById("question-count");
    questionCountElement.textContent = `Question ${currentIndex + 1} of ${questionPhotos.length}`;
}

function shuffleArray(length) {
    const array = Array.from({ length }, (_, index) => index);
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showAnswer() {
    document.getElementById("answer-photo").classList.remove("hidden");
    document.getElementById("next-button").classList.remove("hidden");
    document.getElementById("show-answer-button").classList.add("hidden");
    document.getElementById("answer-photo").src = answerPhotos[shuffledIndices[currentIndex]];
}

function next() {
    currentIndex++;
    if (currentIndex < questionPhotos.length) {
        document.getElementById("question-photo").src = questionPhotos[shuffledIndices[currentIndex]];
        document.getElementById("answer-photo").src = "";
        document.getElementById("show-answer-button").classList.remove("hidden");
        document.getElementById("next-button").classList.add("hidden");
        document.getElementById("reset-button").classList.add("hidden");
        updateQuestionCount();
    } else {
        document.getElementById("question-photo").classList.add("hidden");
        document.getElementById("answer-photo").classList.add("hidden");
        document.getElementById("show-answer-button").classList.add("hidden");
        document.getElementById("next-button").classList.add("hidden");
        document.getElementById("reset-button").classList.remove("hidden");
    }
}

function reset() {
    currentIndex = 0;
    shuffledIndices = shuffleArray(questionPhotos.length);
    document.getElementById("question-photo").classList.remove("hidden");
    document.getElementById("answer-photo").classList.add("hidden");
    document.getElementById("show-answer-button").classList.remove("hidden");
    document.getElementById("next-button").classList.add("hidden");
    document.getElementById("reset-button").classList.add("hidden");
    document.getElementById("question-photo").src = questionPhotos[shuffledIndices[currentIndex]];
}

function toggleMode() {
    const body = document.body;
    const button = document.getElementById('toggle-mode-button');

    body.classList.toggle('light-mode');
    body.classList.toggle('night-mode');

    if (body.classList.contains('night-mode')) {
        button.textContent = 'Light Mode';
    } else {
        button.textContent = 'Night Mode';
    }
}

function goBack() {
    window.location.href = "../KumNus/option.html";
}



