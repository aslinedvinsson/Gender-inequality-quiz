# Gender Inequality quiz
![alt-text](documentation/responsive.png)

## Introduction
The quiz is an interactive quiz about gender inequality, consisting of ten questions, each with three answer options. Once a user selects an option, they will receive instant feedback through color indicators on the options. If the chosen option is correct, it will turn green; if it is incorrect, it will turn red. If the user selects the wrong answer, not only will the chosen option turn red, but the other options will also turn red for wrong answers and green for the right answer. This provides users with immediate information on what the correct answer should be and helps them learn the facts.

At the end of the quiz, when the user has answered all the questions, the result, including the number of correct answers, will be displayed. Users have the option to create a username, which will be shown on the first page along with the quiz result. They can also choose to retake the quiz for a better result by clicking on the "Retake Quiz" button, which will take them back to the first question, or they can quit the game by clicking on the "Quit" button and return to the first page.

## Target user
The target audience for this quiz is anyone who wants to assess their understanding of gender inequality and, by taking the quiz, acquire additional knowledge on the topic. 

## Design

first pagexxxxxx
![alt-text](documentation/)

second page
![alt-text](documentation/)

last page
![alt-text](documentation/)

### Wireframes
![alt-text](documentation/wireframe_first_page.png)
![alt-text](documentation/wireframe_second_page.png)
![alt-text](documentation/wireframe_last_page.png)
![alt-text](documentation/wireframe_mobile.png)

### Fonts 
Poppins is a geometric sans-serif typeface. It was released as open-source and Indian Type Foundry describes Poppins as “an internationalist take on the geometric sans genre.” Poppins is available for free on Google Fonts. Poppins signalise a modern but seroiuse content, which matchtes the theam of the quiz. 

The fallback font is 

### Colors 
As the quiz have a serouis theam about gender inequality, the white and grey uttrycker neutrality, and not like a colorful page that can signal happiness and joy. 

Whitesmoke which is the most used color on the website, is a slightly gray shade of off white. Whitesmoke is a neutral shade and therefore goes with most colors. As the images are in color, with strong messages are used, both the whitesmoke and grey keep the text neutral, but it also goes well with most colors. 

When the user clicks on an options, the options turns light blue to signal the user which option they have clicked. When the user then click the Check answer button. the selected answer will turn green if it is the right answer or red if it is the wrong answer. The green and red color is chosen for recognition, as it is universal colors for right and wrong. The blue, green and red are syncronised with the grey color in the textsquares.

![alt-text](documentation/whitesmoke.png) 
![alt-text](documentation/grey.png) 
![alt-text](documentation/blue.png) 
![alt-text](documentation/green.png) 
![alt-text](documentation/red.png) 
![alt-text](documentation/white.png) 
![alt-text](documentation/black.png)

### Images
Images are sourced from [Unsplash](https://unsplash.com/), resized, to fit the website's design. The photographers are appropriately credited in the credit section.

### Text
Sources for the Facts used to generate questions and answers are found for the quiz are found in the Credits section. How they questions are formulated and any other text is written by the maker of the website. 

## Features xxx

### Existing features
- A Start quiz button when clicked takes the user to what looks like an other page, but is a seperate div which is hidden during the div for the first page is shown. 

- Three options buttons, which present three different answers on the quiz question. in javscript the options have different indexes, depending on if it is the right or wrong answer.

- Changing colors on option buttons. When the user clicks on an options, the options turns light blue to signal the user which option they have clicked. The user can still, change there mind and click on an other option and instead that on turns blue. When the user decide which option to select, they then press the Check answer button. The selected answer will then turn green if it is the right answer or red if it is the wrong answer. 

- A Check Answer button and Next question button. Once the Check answer button is clickd it is hidden and the Next question button is shown. 

- Alert message on the Check answer button which activates of the user clicks it before selecting an option. 

- A Show results button is shown instead of Next question button on the last question. The button takes the user to what looks like another page, which is a div which before is hidden and now shown. 

- A points counter which summarize the number of correct answer. The number of points a presented along with a message depending on hw many correct answers the users got. 

- A form the create a username. If the user wants to save the result, they can optionally create a username by just enter a username in the form and press the Save button. The first page will then be shown with a scoreboard with the username and number of points the user got. 

- Alert message if the user press the Save button before they enter an username. 

- A scoreboard which present the usernames and point of those users who have played at one time. When page is reloaded the scoreboard is reset.

- A Retake quiz button which takes the user to the first question of the quiz. The Retake button also resets the number of point from the last try. 

- A Quit button which takes the user to the first page without saving a username or points, and resets the quiz. 

- A Read More section with links to a number of sites to learn more about gender enequality.

### Future features

- Database that saves usernames and points over time even if the page is reloaded.

- A wider selection of question which randomly are presented. 

## Languages, programs and technologies
The quiz is created with HTML(Hypertext Markup Language), CSS (Cascading Style Sheet) and Javascript.

- [Balsamiq](https://balsamiq.com/) was used to create the wireframes.
- [Google Fonts](https://fonts.google.com/) was used for the fonts: Roboto and Bebas Neue.
- [Fontawesome](https://fontawesome.com/) was used for the social media icons.
- [Simple image resizer ](https://www.simpleimageresizer.com/) was used to resize the images.
- [Img tools](https://www.imgtools.co/) was used for cropping images.
- [Cloudconvert](https://cloudconvert.com/webp-converter) was used to convert image files to .webp format. 
- [Dirty Markup](https://www.10bestdesign.com/dirtymarkup/) was used to clean code.  

## Testing
**Validators**
- [HTML Validator](https://validator.w3.org/) 
- [CSS Validator](https://jigsaw.w3.org/css-validator/) 
- xxxxJS test was used to detect syntax errors, which were then fixed. 

**Lighthouse results**
![alt-text](documentation/lighthouse_desktop.png)
![alt-text](documentation/lighthouse_mobile.png)
### Responsiveness
### Bugs
xxxxx

### Unfixed bugs
xxxxx

## Deployment
# Credits
**Mentor**

**Photos**
- protest.webp by <a href="https://unsplash.com/@mettyunuabona?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ehimetalor Akhere Unuabona</a> on <a href="https://unsplash.com/photos/a-crowd-of-people-holding-signs-and-flags-UIat6pw8S7A?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- talk_about_it.webp by <a href="https://unsplash.com/@mbaumi?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mika Baumeister</a> on <a href="https://unsplash.com/photos/woman-in-yellow-and-red-crew-neck-t-shirt-kyPfAreO7lI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- times_up.webp by <a href="https://unsplash.com/@elyssarenae?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Elyssa Fahndrich</a> on <a href="https://unsplash.com/photos/person-carrying-rally-poster-gizHA4cM3Zs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  

**Facts references:**

Facts used to generate questions and answers for the quiz are sourced from the following references.

Question 1, 2, 3 [UN Women](https://www.unwomen.org/sites/default/files/Headquarters/Attachments/Sections/Library/Publications/2019/POWW-2019-Infographic-Chapter-6-Violence-against-women-and-girls-en.pdf)

Question 4 [Raliance](https://www.raliance.org/wp-content/uploads/2018/05/Full-Report-2018-National-Study-on-Sexual-Harassment-and-Assault.pdf)

Question 5 [fokus2030](https://focus2030.org/Overview-of-data-resources-on-gender-equality-across-the-world)

Question 6 [CordAid](https://www.cordaid.org/en/news/why-we-still-need-womens-movements-in-2023-and-beyond/?gclid=CjwKCAjwv-2pBhB-EiwAtsQZFHB2EzOBHkAQADXFI4vAet3KqMZuVEoIp6gvma-V5eIOZzJ3YNjHghoCsB0QAvD_BwE)

Question 7, 8 [WeForum](https://www.weforum.org/publications/global-gender-gap-report-2023/digest)  

Question 9, 10 [UN Women](https://www.un.org/sustainabledevelopment/blog/2023/09press-release-the-world-is-failing-girls-and-women-according-to-new-un-report/) 

**Favicon** xxxx
## Code from somewhere else
**Inspired by**
When structuring the README file, I found inspiration in both Siobhan Gorman's README for the Sourdough Bakes project and the README for the Love Running project.

Links to the original README files: 

https://github.com/siobhanlgorman/Sourdough-Bakes/blob/master/README.md
https://github.com/Code-Institute-Solutions/readme-template 