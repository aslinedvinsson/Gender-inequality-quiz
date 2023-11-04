


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
    let firstPage = document.querySelector('#first_page');
    let secondPage = document.querySelector('#second_page');
    let lastPage = document.querySelector('#last_page');
    firstPage.style.display = 'flex';
    secondPage.style.display = 'none'
    lastPage.style.display = 'none';
}

//Calling function to only show the first div (first page) with information about the quiz
showStartPage();

//Getting the start quiz button
let startBtn = document.getElementById('start_quiz_btn');

function startQuizBtn() {
    //Function startQuizBtn on the first page hides the divs first_page and last_page and shows second_page
    let firstPage = document.querySelector('#first_page');
    let secondPage = document.querySelector('#second_page');
    let lastPage = document.querySelector('#last_page');
    firstPage.style.display = 'none';
    secondPage.style.display = 'flex';
    lastPage.style.display = 'none';
    console.log('startquizbtn function');
    currentQuestionIndex = 0;
    displayQuestion();
    console.log('display question function');
}

//Call function startQuizBtn when onlick on "start quiz" button
startBtn.onclick = startQuizBtn;

/*Function displayQuestion displays one question at the time including three option where one is the correct answer. 
When user chose the correct answer the points variable add by 1.*/
function displayQuestion() {
    let questionText = document.getElementById('question_text');
    let optionsDiv = document.getElementById('options');
    let optionBtns = document.querySelectorAll('.btn_opt');
    //Check if the current question index is lower than the lenght of the list of questions.
    if (currentQuestionIndex < questions.length) {
        questionText.textContent = questions[currentQuestionIndex].question;
        for (let i = 0; i < optionBtns.length; i++) {
            optionBtns[i].textContent = questions[currentQuestionIndex].options[i];
        }
    optionBtns.addEventListener('click',);
//optionsDiv.addEventListener('click', ); TODO: Where best to put the eventlistner?
    }
    

}




