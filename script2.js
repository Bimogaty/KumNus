const answerPhotos = [
    "photo/photo1.png",
    "photo/photo2.png",
    "photo/photo3.png",
    "photo/photo4.png",
    "photo/photo5.png",
    "photo/photo6.png",
    "photo/photo7.png",
    "photo/photo8.png",
    "photo/photo9.png",
    "photo/photo10.png",
    "photo/photo11.png",
    "photo/photo12.png",
    "photo/photo13.png",
    "photo/photo14.png",
    "photo/photo15.png",
    "photo/photo16.png",
    "photo/photo17.png",
    "photo/photo18.png",
    "photo/photo19.png",
    "photo/photo20.png",
    "photo/photo21.png",
    "photo/photo22.png",
    "photo/photo23.png",
    "photo/photo24.png",
    "photo/photo25.png",
    "photo/photo26.png",
    "photo/photo27.png",
    "photo/photo28.png",
];

const questionPhotos = [
    "text/text1.png",
    "text/text2.png",
    "text/text3.png",
    "text/text4.png",
    "text/text5.png",
    "text/text6.png",
    "text/text7.png",
    "text/text8.png",
    "text/text9.png",
    "text/text10.png",
    "text/text11.png",
    "text/text12.png",
    "text/text13.png",
    "text/text14.png",
    "text/text15.png",
    "text/text16.png",
    "text/text17.png",
    "text/text18.png",
    "text/text19.png",
    "text/text20.png",
    "text/text21.png",
    "text/text22.png",
    "text/text23.png",
    "text/text24.png",
    "text/text25.png",
    "text/text26.png",
    "text/text27.png",
    "text/text28.png",
];

let currentIndex = 0;
let shuffledIndices = [];

const questionPhotoElement = document.getElementById("question-photo");
const answerPhotoElement = document.getElementById("answer-photo");
const showAnswerButton = document.getElementById("show-answer-button");
const nextButton = document.getElementById("next-button");
const resetButton = document.getElementById("reset-button");
const questionCountElement = document.getElementById("question-count");

document.getElementById("toggle-mode-button").addEventListener("click", toggleMode);
document.getElementById("back-button").addEventListener("click", goBack);
document.getElementById("start-button").addEventListener("click", start);
document.getElementById("show-answer-button").addEventListener("click", showAnswer);
document.getElementById("next-button").addEventListener("click", next);
document.getElementById("reset-button").addEventListener("click", reset);

function start() {
    const startButton = document.getElementById("start-button");
    startButton.classList.add("hidden");

    questionPhotoElement.classList.remove("hidden");
    showAnswerButton.classList.remove("hidden");
    questionCountElement.classList.remove("hidden");

    if (shuffledIndices.length === 0) {
        shuffledIndices = shuffleArray(questionPhotos.length);
    }

    questionPhotoElement.src = questionPhotos[shuffledIndices[currentIndex]];
    updateQuestionCount();
}

function updateQuestionCount() {
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
    answerPhotoElement.classList.remove("hidden");
    showAnswerButton.classList.add("hidden");
    nextButton.classList.remove("hidden");
    answerPhotoElement.src = answerPhotos[shuffledIndices[currentIndex]];
}

function next() {
    currentIndex++;
    if (currentIndex < questionPhotos.length) {
        questionPhotoElement.src = questionPhotos[shuffledIndices[currentIndex]];
        answerPhotoElement.src = "";
        showAnswerButton.classList.remove("hidden");
        nextButton.classList.add("hidden");
        resetButton.classList.add("hidden");
        updateQuestionCount();
    } else {
        questionPhotoElement.classList.add("hidden");
        answerPhotoElement.classList.add("hidden");
        showAnswerButton.classList.add("hidden");
        nextButton.classList.add("hidden");
        resetButton.classList.remove("hidden");
    }
}

function reset() {
    currentIndex = 0;
    shuffledIndices = shuffleArray(questionPhotos.length);
    questionPhotoElement.classList.remove("hidden");
    answerPhotoElement.classList.add("hidden");
    showAnswerButton.classList.remove("hidden");
    nextButton.classList.add("hidden");
    resetButton.classList.add("hidden");
    questionPhotoElement.src = questionPhotos[shuffledIndices[currentIndex]];
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

function preloadImages(images) {
    images.forEach((image) => {
        const img = new Image();
        img.src = image;
    });
}

preloadImages(questionPhotos);
preloadImages(answerPhotos);

