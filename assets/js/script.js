let firstPage = document.querySelector('#first_page');
let secondPage = document.querySelector('#second_page');
let lastPage = document.querySelector('#last_page');
let startBtn = document.getElementById('start_quiz_btn');
let currentQuestionIndex = 0;
//let optionBtns = document.getElementById('options');
//let optionBtns = document.querySelectorAll('.btn_opt');
//let optionBtn = document.getElementById('options');
//let selectedOption = document.querySelectorAll('.selected_blue');

//let selectedOption = null;
//let selectedOptionIndex;
//let checkAnsBtn = document.getElementById('btn_check');
let points = [];
let nextQuestionBtn = document.getElementById('btn_next')


//Question and answers for the quiz
let questions = [
    //Question 1
    {
        question: 'Question 1: How many countries have not laws specifically protecting women from domestic violence?',
        options: ['20', '45', '60'],
        correctAns: '1'
    },
    //Question 2
    {
        question: 'Question 2: How many women across the world are killed by a member of their own family every day?',
        options: ['68', '93', '137'],
        correctAns: '2'
    },
    //Question 3
    {
        question: 'Question 3: How many million women and girls in the world today were married before age 18?',
        options: ['440', '650', '820'],
        correctAns: '1'
    },
    /*
    //Question 4
    {
        question: 'Question 4: How many woman and men reported experiencing some form of sexual harassment and/or assault in their lifetime.',
        options: ['81% of women and 43% of men', '75% of women and 53% of men', '63% of women and 58% of men'],
        correctAns: '0'
    },

    //Question 5
    {
        question: 'Question 5: How many millions of girls and women have suffered female genital mutilation (in 31 countries for which representative data is available.',
        options: ['200 million', '250 million', '150 million'],
        correctAns: '1'
    },

    //Question 6
    {
        question:'In the past five years, how many percent of the peace mediators were woman?',
        options: ['6%', '11%', '15%'],
        correctAns: '1'
    },

    //Question 7

    {
        question: 'Which is the top and bottom country in the Global gender gap index ranking 2023?',
        options: ['Top: Norweig Bottom: Ethiopa', 'Top: Sweden Bottom: Angola', 'Top: Island Bottom: Afganisthan'],
        correctAns: '2' 
    },

    //Question 8

    {
        question: 'At the current pace, in how many years is the global gender gap closed?',
        options: ['108 years', '123 years', '131 years'],
        correctAns: '2'
    },

    //Question 9

    {
        question: 'At the current rates of progress in gender inequality. How many million girls and young women will be out of school in 2030?',
        options: ['70 millions', '90 millions', '110 millions'],
        correctAns: '2'
    },

    //Question 10

    {
        question: 'How many percent of prime working age women and men are in the labour force?',
        options: ['Woman: 45% Men: 80%', 'Woman: 61% Men: 90%', 'Woman:70% Men: 85%'],
        correctAns: '1'
    }
    */
];




/*Using a function showStartPage instead of making three pages in html, the two divs (instead of two other pages) for 
questions and result and retake quiz are set to display='none' using querySelector.*/
function showStartPage() {
    console.log('first page/start page');

    firstPage.style.display = 'flex';
    secondPage.style.display = 'none'
    lastPage.style.display = 'none';
}

//Calling function to only show the first div (first page) with information about the quiz
showStartPage();


//Function startQuizBtn on the first page hides the divs first_page and last_page and shows second_page
function startQuizBtn() {
    let firstPage = document.querySelector('#first_page');
    let secondPage = document.querySelector('#second_page');
    let lastPage = document.querySelector('#last_page');
    firstPage.style.display = 'none';
    secondPage.style.display = 'flex';
    lastPage.style.display = 'none';
    points = 0;
    console.log('startquizbtn function');
    //currentQuestionIndex = 0;
    displayQuestion();
}

//Call function startQuizBtn when onlick on "start quiz" button
startBtn.onclick = startQuizBtn;

/*Function displayQuestion displays one question at the time including three option where one is the correct answer. 
When user chose the correct answer the points variable add by 1.*/
function displayQuestion() {
    console.log('display question function');
    let questionText = document.getElementById('question_text');
    let optionBtns = document.querySelectorAll('.btn_opt')

    //Check if the current question index is lower than the lenght of the list of questions.
    if (currentQuestionIndex < questions.length) {
        questionText.textContent = questions[currentQuestionIndex].question;
        for (let i = 0; i < optionBtns.length; i++) {
            optionBtns[i].textContent = questions[currentQuestionIndex].options[i];
            console.log('display options')
        }
        optionBtn.addEventListener('click', addAnswer);
        console.log("optionbtn click");
        checkAnsBtn.addEventListener('click', checkAns);
        console.log("click on the checkAnsBtn");
        //Display 'check answer' button and hide 'next question' button, until 'check answer' button is clicked.
        checkAnsBtn.style.display = 'block';
        nextQuestionBtn.style.display = 'none';
        console.log('hide next question btn')
    }
}

let optionBtn = document.getElementById('options');
//let selectedOption = document.querySelectorAll('.selected_blue');
let checkAnsBtn = document.getElementById('btn_check');

//Function to make option blue when user click on it, to show the user what they have selected.
//TODO:Not working right now
function addAnswer(event) {
    if (event.target.classList.contains('btn_opt')) {
        // Get the selected option index
        //let selectedOptionIndex = event.target.getAttribute('data-index');
        //console.log('Get the selected option index');

        let selectedOption = document.querySelectorAll('.selected_blue');
        console.log("add blue");
        // Remove the "selected_blue" class from all elements with the class
        for (let option of selectedOption) {
            option.classList.remove('selected_blue');
            console.log('remove blue');
        };

        // Add the "selected_blue" class to the currently selected option

        event.target.classList.add('selected_blue');
        console.log('Add blue again');
    }
}

// Function to check if the selected option is the correct answer 
function checkAns() {
    // Find the selected option
    let selectedOption = document.querySelector('.selected_blue');
    let correctAns = questions[currentQuestionIndex].correctAns;
    selectedOption.classList.remove('selected_blue');
    if (selectedOption) {
        if (selectedOption.getAttribute('data-index') === correctAns) {
            // User selected the correct answer
            selectedOption.classList.add('right_green');
            points++;
            console.log(`Correct, total points: ${points}`);
        } else {
            // User selected the wrong answer
            selectedOption.classList.add('wrong_red');
            console.log(`Wrong, total points: ${points}`);
        }

        //After the user clicked on the checkAnsBtn, the button is hidden and the nextQuestionBtn is shown.
        checkAnsBtn.style.display = 'none';
        nextQuestionBtn.style.display = 'block';
        //After the user checks if they answered correctly, the optionBtns are disabled
        optionBtn.removeEventListener('click', addAnswer);
        console.log('remove click on optionBtn');
    } else {
        // Alert message in case the user did not select an option 
        alert('Please select an option before checking the answer.');
        console.log('Please select an option before checking.');
    }
}

function nextQuestion() {
    let selectedAnswer = document.querySelectorAll('.right_green, .wrong_red');
    if (selectedAnswer) {
        //Remove the "right_green" class from all answer buttons
        let answerOptionsGreen = document.querySelectorAll('.right_green');
        for (let option of answerOptionsGreen) {
            option.classList.remove('right_green');
        }
        // Remove the "wrong_red" class from all answer buttons
        let AnswerOptionsRed = document.querySelectorAll('.wrong_red');
        for (let option of AnswerOptionsRed) {
            option.classList.remove('wrong_red');
            console.log('remove red');
        }
        //As long as the current question is not the last question, the displayQuestion function is called.
        if (currentQuestionIndex < lastQuestionIndex) {
            currentQuestionIndex++;
            displayQuestion();
            afterLastQuestionBtn();
        } else {
            showLastPage();
            console.log('show last page function called');
        }
    }
}

 
//Add click on the nextQuestionBtn and call the nextQuestion function
nextQuestionBtn.addEventListener('click', nextQuestion);
console.log('nextquestion function');

//Variable for the last question in the quiz
let lastQuestionIndex = questions.length - 1;
function afterLastQuestionBtn() {
    //Check if the current question is the last question, and if it is, change the text on the nextQuestionBtn to 'View result'
    if (currentQuestionIndex === lastQuestionIndex) {
        nextQuestionBtn.innerText = 'View results';
    }
}

// Function to show last page and hide the other two pages/divs
function showLastPage() {
    //When 'View result' button on last question is clicked, the last page is shown
    //let firstPage = document.querySelector('#first_page');
    let secondPage = document.querySelector('#second_page');
    let lastPage = document.querySelector('#last_page');
   // firstPage.style.display = 'none';
    secondPage.style.display = 'none';
    lastPage.style.display = 'flex';
    console.log('show last page function run');
    displayResults();
    console.log('displayResults function called');
}

//Function to display results on the last page and give the user feedback on how well they did on the quiz
function displayResults() {
    let results = document.getElementById('results');
    if (points <= 3) {
        results.innerHTML = `You got ${points} points. You need to study more.`;
    } else if (points >= 4 && points <= 7) {
        results.innerHTML = `You got ${points} points. There is room for improvement`;
    } else {
        results.innerHTML = `You got ${points} points. Great job! The feminsit movement can count on you!`;
    }
}