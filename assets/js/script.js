


//Question and answers for the quiz
let questions = [
    //Question 1
    {
        question: 'Question 1: How many countries have not laws specifically protecting women from domestic violence?',
        answers: ['20', '45', '60'],
        correctAns: '1'
    },
    //Question 2
    {
        question: 'Question 2: How many women across the world are killed by a member of their own family every day?',
        answers: ['68', '93', '137'],
        correctAns: '2'
    },
    //Question 3
    {
        question: 'Question 3: How many million women and girls in the world today were married before age 18?',
        answers: ['440', '650', '820'],
        correctAns: '1'
    },
    /*
    //Question 4
    {
        question: 'Question 4: How many woman and men reported experiencing some form of sexual harassment and/or assault in their lifetime.',
        answers: ['81% of women and 43% of men', '75% of women and 53% of men', '63% of women and 58% of men'],
        correctAns: '0'
    },

    //Question 5
    {
        question: 'Question 5: How many millions of girls and women have suffered female genital mutilation (in 31 countries for which representative data is available.',
        answers: ['200 million', '250 million', '150 million'],
        correctAns: '1'
    },

    //Question 6
    {
        question:'In the past five years, how many percent of the peace mediators were woman?',
        answers: ['6%', '11%', '15%'],
        correctAns: '1'
    },

    //Question 7

    {
        question: 'Which is the top and bottom country in the Global gender gap index ranking 2023?',
        answers: ['Top: Norweig Bottom: Ethiopa', 'Top: Sweden Bottom: Angola', 'Top: Island Bottom: Afganisthan'],
        correctAns: '2' 
    },

    //Question 8

    {
        question: 'At the current pace, in how many years is the global gender gap closed?',
        answers: ['108 years', '123 years', '131 years'],
        correctAns: '2'
    },

    //Question 9

    {
        question: 'At the current rates of progress in gender inequality. How many million girls and young women will be out of school in 2030?',
        answers: ['70 millions', '90 millions', '110 millions'],
        correctAns: '2'
    },

    //Question 10

    {
        question: 'How many percent of prime working age women and men are in the labour force?',
        answers: ['Woman: 45% Men: 80%', 'Woman: 61% Men: 90%', 'Woman:70% Men: 85%'],
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