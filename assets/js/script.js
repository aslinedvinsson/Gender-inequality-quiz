const firstPage = document.querySelector('#first_page');
const secondPage = document.querySelector('#second_page');
const lastPage = document.querySelector('#last_page');
const startBtn = document.getElementById('start_quiz_btn');
let currentQuestionIndex = 0;
const optionBtn = document.getElementById('options');
const checkAnsBtn = document.getElementById('btn_check');
let selectedOptionIndex;
const nextQuestionBtn = document.getElementById('btn_next');
const inputUsername = document.getElementById('input_username');
let points;

//Fictitious quiz takers who have previously taken the quiz
let scoreboard =
    [
        {
            username: 'Nils',
            points: 2
        },
        {
            username: 'Anna',
            points: 5
        }
    ];

//Questions, options and correct answers for the quiz
//Code from https://www.youtube.com/watch?v=BWR-MDQc65s 
let questions = [
    //Question 1
    {
        question: 'Question 1: How many countries have not laws specifically protecting women from domestic violence?',
        options: ['20 countries', '45 countries', '60 countries'],
        correctAns: '1'
    },
    //Question 2
    {
        question: 'Question 2: How many women across the world are killed by a member of their own family every day?',
        options: ['68 women', '93 women', '137 women'],
        correctAns: '2'
    },
    //Question 3
    {
        question: 'Question 3: How many million women and girls in the world today were married before age 18?',
        options: ['440 million', '650 million', '820 million'],
        correctAns: '1'
    },
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
        question: 'In the past five years, how many percent of the peace mediators were woman?',
        options: ['6 % of the peace mediators', '11 % of the peace mediators', '15 % of the peace mediators'],
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
        options: ['70 million', '90 million', '110 million'],
        correctAns: '2'
    },
    //Question 10
    {
        question: 'How many percent of prime working age women and men are in the labour force?',
        options: ['Woman: 45% Men: 80%', 'Woman: 61% Men: 90%', 'Woman: 70% Men: 85%'],
        correctAns: '1'
    }
];

/*Using a function showStartPage instead of making three pages in html, the two divs (instead of two other pages) for 
questions and result and retake quiz are set to display='none' using querySelector.*/
function showStartPage() {
    console.log('first page/start page');
    firstPage.style.display = 'flex';
    secondPage.style.display = 'none';
    lastPage.style.display = 'none';
    createScoreboard();
}

//Calling function to only show the first div (first page) with information about the quiz
showStartPage();

//Function to create a scoreboard
function createScoreboard() {
    //Get the tablebody element to hold the table rows
    let tBody = document.querySelector('tbody');
    //Check if the tBody contains any children elements from earlier
    if (tBody) {
        while (tBody.firstChild) {
            // This will remove all children within tbody 
            tBody.removeChild(tBody.firstChild);
            console.log('empties');
        }
        // Points are sorted, placing the username with the highest amount at the top of the scoreboard.
        scoreboard.sort(function (a, b) {
            return b.points - a.points;
        });

        //Get the table element
        let table = document.getElementById('table');

        //Loop through the scoreboard list
        for (let i = 0; i < scoreboard.length; i++) {
            //Create a tablerow element for each user
            let tRow = document.createElement('tr');
            // Create two tabledata to display the user's username and points
            let userNameSpace = document.createElement('td');
            let pointsSpace = document.createElement('td');
            //Writing out the username and points on the scoreboard
            userNameSpace.innerHTML = scoreboard[i].username;
            pointsSpace.innerHTML = scoreboard[i].points;
            // Append the 'userNameSpace' and 'pointsSpace' to the 'tRow', the 'tRow' to the 'tBody' and the 'tBody' to the 'table'
            tRow.appendChild(userNameSpace);
            tRow.appendChild(pointsSpace);
            tBody.appendChild(tRow);
            table.appendChild(tBody);
        }
    }
}

//Function startQuizBtn on the first page hides the divs first_page and last_page and shows second_page
function startQuizBtn() {
    firstPage.style.display = 'none';
    secondPage.style.display = 'flex';
    lastPage.style.display = 'none';
    points = 0;
    console.log('startquizbtn function');
    displayQuestion();
}

//Call function startQuizBtn when onlick on'tart quiz' button
startBtn.onclick = startQuizBtn;

/*Function displayQuestion displays one question at the time including three option where one 
is the correct answer. When user chose the correct answer the points variable add by 1.*/
function displayQuestion() {
    console.log('display question function');
    let questionText = document.getElementById('question_text');
    let optionBtns = document.querySelectorAll('.btn_opt');
    //Check if the current question index is lower than the lenght of the list of questions.
    if (currentQuestionIndex < questions.length) {
        questionText.textContent = questions[currentQuestionIndex].question;
        //Display options for the question
        for (let i = 0; i < optionBtns.length; i++) {
            optionBtns[i].textContent = questions[currentQuestionIndex].options[i];
            console.log('display options');
        }
        optionBtn.addEventListener('click', addAnswer);
        console.log("optionbtn click");
        checkAnsBtn.addEventListener('click', checkAns);
        console.log("click on the checkAnsBtn");
        //Display 'check answer' button and hide 'next question' button, until 'check answer' button is clicked.
        checkAnsBtn.style.display = 'block';
        nextQuestionBtn.style.display = 'none';
        console.log('hide next question btn');
    }
}

/*Function to make an option blue when user click on it, to show the user what they have clicked on. 
If they click on another option, maybe change their mind, that option will turn blue*/
function addAnswer(event) {
    if (event.target.classList.contains('btn_opt')) {
        // Get the selected option index
        selectedOptionIndex = event.target.getAttribute('data-index');
        //console.log('Get the selected option index');
        let selectedOption = document.querySelectorAll('.selected_blue');
        console.log("add blue");
        // Remove the 'selected_blue' class from all elements with the class
        for (let option of selectedOption) {
            option.classList.remove('selected_blue');
            console.log('remove blue');
        }
        // Add the 'selected_blue' class to the currently selected option
        event.target.classList.add('selected_blue');
        console.log('Add blue again');
    }
}

// Function to check if the selected option is the correct answer 
function checkAns() {
    let selectedOption = document.querySelector('.selected_blue');
    let correctAns = questions[currentQuestionIndex].correctAns;
    if (selectedOption) {
        // Remove the 'selected_blue' class from the selected option
        selectedOption.classList.remove('selected_blue');
        //Check if the users selected option is the correct answer
        if (selectedOptionIndex === correctAns) {
            // User selected the correct answer and option turns green
            selectedOption.classList.add('right_green');
            //One point is added to points
            points++;
            console.log(`Total points: ${points}`);
        } else {
            // User selected the wrong answer and option turns red
            selectedOption.classList.add('wrong_red');
            console.log(`Total points: ${points}`);
        }
        /*After the user clicked on the 'Check Answer' button, the button is hidden and the 'Next Question' 
        button is shown.*/
        checkAnsBtn.style.display = 'none';
        nextQuestionBtn.style.display = 'block';
        // After the user checks if they answered correctly, the optionBtns are disabled
        optionBtn.removeEventListener('click', addAnswer);
    } else {
        // Alert message in case the user did not select an option
        alert('Please select an option before checking the answer.');
        console.log('Please select an option before checking.');
    }
}

function nextQuestion() {
    let selectedAnswer = document.querySelectorAll('.right_green, .wrong_red');
    if (selectedAnswer) {
        //Remove the 'right_green' class from all answer buttons
        let answerOptionsGreen = document.querySelectorAll('.right_green');
        for (let option of answerOptionsGreen) {
            option.classList.remove('right_green');
        }
        // Remove the 'wrong_red' class from all answer buttons
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
            console.log('showlastpage function called');
        }
    }
}

//Add click on the nextQuestionBtn and call the nextQuestion function
nextQuestionBtn.addEventListener('click', nextQuestion);
console.log('nextquestion function called');

//Variable for the last question in the quiz
let lastQuestionIndex = questions.length - 1;
/*Function to check if the current question is the last question, and if it is, change the text on the 
nextQuestionBtn to 'View result'*/
function afterLastQuestionBtn() {
    if (currentQuestionIndex === lastQuestionIndex) {
        nextQuestionBtn.innerText = 'View results';
    }
}

// Function to show last page and hide the other two pages/divs
function showLastPage() {
    //When 'View result' button on last question is clicked, the last page is shown
    secondPage.style.display = 'none';
    lastPage.style.display = 'flex';
    displayResults();
    console.log('displayResults function called');
}

//Function to display results on the last page and give the user feedback on how well they did on the quiz
function displayResults() {
    let results = document.getElementById('results');
    if (points <= 3) {
        results.innerHTML = `You got ${points} points out of ${questions.length}. Good effort! More studying will lead to even greater knowledge and awareness!`;
    } else if (points >= 4 && points <= 7) {
        results.innerHTML = `You got ${points} points out of ${questions.length}. You're on the right track! Embrace the journey of knowledge – every step you take brings you closer to taking action for equality!`;
    } else {
        results.innerHTML = `You got ${points} points out of ${questions.length}. Great job! Your support adds strength to the feminist movement. Keep standing up for equality!`;
    }
}

//Get the save button 
let saveBtn = document.getElementById('save_btn');
//Add click event on the save button
saveBtn.addEventListener('click', saveToScoreBoard);
//Get the form element
let form = document.getElementById('form');
//Add submit to form to enable Enter click as a submit, it the user press Enter instead of Svae button
/*This stackoverflow helped me to write the code to prevent Enter click to reload page
https://stackoverflow.com/questions/71189314/my-preventdefault-is-not-working-when-submit-is-pressed*/
form.addEventListener('submit', function (e) {
    e.preventDefault();
    saveToScoreBoard();
});

function saveToScoreBoard() {
    let existingUser;
    // Find out if the username already exists in the scoreboard
    for (let i = 0; i < scoreboard.length; i++) {
        if (scoreboard[i].username === inputUsername.value) {
            existingUser = scoreboard[i];
            break; // Exit the loop if the username is found
        }
    }
    if (existingUser) {
        // If the username exists, update their score
        existingUser.points = points;
    } else {
        // If the username doesn't exist, add a new user
        let newUser = { username: inputUsername.value, points: points };
        scoreboard.push(newUser);
    }
    showStartPage();
    currentQuestionIndex = 0;
    nextQuestionBtn.innerText = 'Next question';
    console.log('showStartPage function run inside saveToScoreBoard function');
}

/*Function to reset number of points, empties the username field, start the quiz on the first question and change 
text on the button from Show result to Next question*/
function resetQuiz() {
    points = 0;
    currentQuestionIndex = 0;
    document.getElementById('input_username').value = '';
    nextQuestionBtn.innerText = 'Next question';
}

//Function to retake quiz which takes the user directly to the first question instead of firstPage
let retakeQuizBtn = document.getElementById('retake');
function retakeQuiz() {
    resetQuiz();
    console.log('resetQuiz function called inside retakeQuiz function')
    startQuizBtn();
    console.log('startquizbtn function called inside retakeQuiz function');
}

//Call the function 'retakeQuizBtn'
retakeQuizBtn.addEventListener('click', retakeQuiz);

// Funtion 'quit' resets the data and return the user to the first page 
let quitBtn = document.getElementById('quit_btn');
function quit() {
    resetQuiz();
    showStartPage();
}
//Add click event on quitbutton and call the function 'quit'
quitBtn.addEventListener('click', quit);
