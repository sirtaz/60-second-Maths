let problems = [];
let currentProblemIndex = 0;

function getRandomIntFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// function generateMultiplicationProblem() {
//     const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//     const numbers2 = [2, 5, 10];
//     const num1 = getRandomIntFromArray(numbers);
//     const num2 = getRandomIntFromArray(numbers);
//     return {num1, num2, answer: num1 * num2};
// }

function generateMultiplicationProblem(num1, num2) {
    return {num1, num2, answer: num1 * num2};
}

function generateProblems() {
    problems = [];
    const timesTables = [3, 4];
    for (let table of timesTables) {
        for (let i = 1; i <= 10; i++) { // Exclude multiplication by 0
            problems.push(generateMultiplicationProblem(table, i));
        }
    }
}

function showQuestion() {
    if (currentProblemIndex < problems.length) {
        const problem = problems[currentProblemIndex];
        document.getElementById('question').textContent = `What is ${problem.num1} x ${problem.num2}?`;
        currentProblemIndex++;
        setTimeout(showQuestion, 6000);
    } else {
        showResults();
    }
}

function showResults() {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '<h2>Quiz Results:</h2><ol>';
    problems.forEach((problem, index) => {
        resultsContainer.innerHTML += `<li>${problem.num1} x ${problem.num2} = ${problem.answer}</li>`;
    });
    resultsContainer.innerHTML += '</ol>';
    document.getElementById('question').textContent = 'Quiz completed!';
    document.getElementById('startButton').style.display = 'block';
}

function startQuiz() {
    generateProblems();
    currentProblemIndex = 0;
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('results').innerHTML = '';
    showQuestion();
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('startButton').addEventListener('click', startQuiz);
});
