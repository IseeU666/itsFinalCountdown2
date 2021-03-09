const quizData = [
    {
        question: 'How old is Ilya',
        a: '10',
        b: '7',
        c: '44',
        d: '33',
        correct: 'd'
    },
    {
        question: 'What is the most popular programming language in 2019',
        a: 'Java',
        b: 'Python',
        c: 'C',
        d: 'JavaScript',
        correct: 'a'
    },
    {
        question: 'Who is the president of US',
        a: 'Ilya Osver',
        b: 'Osver Ilya',
        c: 'Validir Putin',
        d: 'Pens Biden',
        correct: 'd'
    },
    {
        question: 'What does HTML stnad for?',
        a: 'Hypertext Markup Language',
        b: 'Haotic Time CSS',
        c: 'New World Order',
        d: 'None of the above',
        correct: 'a'
    }, {
        question: 'What year was JavaScript laucnhed?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: '1997',
        correct: 'b'
    }
]

//соединяем массис с вопросами с айдишками из хтмеэля//
const quiz = document.getElementById("quiz");//
const answerEls = document.querySelectorAll(".answer");//
const questionEl = document.getElementById("question");//

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0; //обнуляет вопрос начиная с начала
let score = 0;

loadQuiz(); //грузит функцию ниже

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            console.log('HI');
            quiz.innerHTML = `<h2>Good Job you answered correctly at ${score}/${quizData.length} questions.</h2> <button onClick="location.reload()">Relaod</button>`;
        }
    }
});
