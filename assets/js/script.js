let firstPage = document.querySelector('#first_page');
let secondPage = document.querySelector('#second_page');
let lastPage = document.querySelector('#last_page');
let startBtn = document.getElementById('start_quiz_btn');
let currentQuestionIndex = 0;
//let optionBtns = document.getElementById('options');
let optionBtns = document.querySelectorAll('.btn_opt');
optionBtn = document.getElementById('options');
let selectedOption = document.querySelectorAll('.selected_blue');

//let selectedOption = null;
let selectedOptionIndex;
let checkAnsBtn = document.getElementById('btn_check');
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



function startQuizBtn() {
    //Function startQuizBtn on the first page hides the divs first_page and last_page and shows second_page
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
   
    //Check if the current question index is lower than the lenght of the list of questions.
    if (currentQuestionIndex < questions.length) {
        questionText.textContent = questions[currentQuestionIndex].question;
        for (let i = 0; i < optionBtns.length; i++) {
            optionBtns[i].textContent = questions[currentQuestionIndex].options[i];
        
        }
        optionBtn.addEventListener('click', addAnswer);
        console.log("optionbtn click");
        checkAnsBtn.addEventListener('click', checkAns);
        //Display 'check answer' button and hide 'next question' button, until 'check answer' button is clicked.
        checkAnsBtn.style.display = 'block';
        nextQuestionBtn.style.display = 'none';
    }
}


//Function to make option blue when user click on it, to show the user what they have selected.
//TODO:Not working right now
function addAnswer(event) {
   // let selectedOptionIndex;
    if (event.target.classList.contains('btn_opt')) {
        selectedOptionIndex = event.target.getAttribute('data-index');
        console.log("addAnswerEvent");
        let selectedOption = document.querySelectorAll('selected_blue');
        for (let option of selectedOption) { //TODO: Denna körs ej.
            option.classList.remove('selected_blue');
            console.log('remove blue');
        };
    }
    event.target.classList.add('selected_blue');
}

/*
// Function to check if the selected option is the correct answer 
function checkAns() {
    console.log('checkAns');
    let selectedOption = document.querySelectorAll('selected_blue');
    let correctAns = questions[currentQuestionIndex].correctAns;
    
    selectedOption.classList.remove('selected_blue');
    if (selectedOptionIndex === correctAns) {
        // User selected the correct answer
        selectedOption.classList.add('right_green');
        points++;
        console.log(`Correct, total points: ${points}`);
    } else {
        // User selected the wrong answer
        selectedOption.classList.add('wrong_red');
        console.log(`Wrong, total points: ${points}`);
    }
    //After the user clicked on the checkAnsBtn, the button is hidden  and the nextQuestionBnt is shown.
    checkAnsBtn.style.display = 'none';
    nextQuestionBtn.style.display = 'block';
    //After user check if they answered correct, the optionBtns are disabled
    optionBtn.removeEventListener('click', addAnswer);
}

optionBtn.addEventListener('click', addAnswer);
/*
//let selectedOption; = null; // Initialize the reference to the selected option button
/*
// Function to make option blue when user clicks on it to show the user what they have selected.
function addAnswer(event) {
    let selectedOptionIndex;
    selectedOption = event.target;
    if (event.target.classList.contains('btn_opt')) {
        selectedOptionIndex = event.target.getAttribute('data-index');
        console.log("addAnswer function");

        // Remove the 'selected_blue' class from the previous selected option button
        if (selectedOption) {
            selectedOption.classList.remove('selected_blue');
        }

        // Add the 'selected_blue' class to the currently selected option button
        event.target.classList.add('selected_blue');

        // Update the reference to the currently selected option button
        selectedOption = event.target;
    }
}
*/

// Function to check if the selected option is the correct answer
function checkAns() {
    console.log('checkOptionsfunction');
    let selectedOptionIndex;
    let correctAns = questions[currentQuestionIndex].correctAns;

    // Remove the 'selected_blue' class from the selected option button
    selectedOption.classList.remove('selected_blue');

    if (selectedOptionIndex === correctAns) {
        // User selected the correct answer
        selectedOption.classList.add('right_green');
        points++;
        console.log(`Correct, total points: ${points}`);
    } else {
        // User selected the wrong answer
        selectedOption.classList.add('wrong_red');
        console.log(`Wrong, total points: ${points}`);
    }

    // After the user clicked on the checkAnsBtn, the button is hidden and the nextQuestionBnt is shown.
    checkAnsBtn.style.display = 'none';
    nextQuestionBtn.style.display = 'block';

    // After the user checks if they answered correctly, the optionBtns are disabled
    for (let option of optionBtn) { //TODO: ska det här vara optionBtn eller annat?
        option.removeEventListener('click', addAnswer);
    }
}
