# Math game
## Code institute Milestone Project2

[Click here to launch a game](https://fatimagama20.github.io/Mathgame/)

This game is designed to generate random mulitplication questions and answers  which can be used to improve the times table and help make math enjoyable specially children can have fun and improve their math skills

![](https://github.com/fatimagama20/Mathgame/blob/main/assets/images/responsive%20design.png?raw=true)

# User Experience (UX)
* ## User stories
  * ### First time visitors goal
    * As a first time visitor, I want to easily understand the main purpose of the game and learn more about the feature of the game 
    * As a first time visitor, I want to look for help page to understand how to play a game
    * Everytime a correct answer is clicked score is incremented by 1
    * User can reset a game at any point and a timer is be reset to zero
    * User can play the game until 30 seconds
    * As a parent, can insist a child to play the game and improve the multiplication skills.
    * user can see the time remaining until the game is over
  * ### Frequent User Goals
    * As a frequent User, I want to see if more questions are added
    * As a Frequent User, I want to see if the developer can be contacted

* ## Design
  * ### Colour Scheme
    * Background colour - #9dd2ea, #f1ff92
    * score colour - #888e5f
    * Time remaining colour - rgba(27, 235, 138, 0.78)
    * questions colour - #4c9bf5

**Math game**

| Score | Background |Time remaining |Questions |
| :---: | :---: | :---: | :---: |
| ![#f1ff92](https://via.placeholder.com/15/f1ff92/f1ff92) | ![#9dd2ea](https://via.placeholder.com/15/9dd2ea/9dd2ea) |![#888e5f](https://via.placeholder.com/15/888e5f/888e5f) |![#4c9bf5](https://via.placeholder.com/15/4c9bf5/4c9bf5) |
| #f1ff92 | #9dd2ea |  #888e5f |#4c9bf5 |


  * ### Typography
    * Default fonts is used throughtout the website. I haven't use google fonts
  * ### Imagery
    * On the Homepage, I have used different colours to  suit the purpose of the game, which is providing a good impression and attracts for parents to visit the game.
  
* ## Wireframes
  * ### Page Load Wireframe - [View](https://github.com/fatimagama20/Mathgame/blob/main/assets/images/Pageload.jpg)
  * ### Start Game Wireframe - [View](https://github.com/fatimagama20/Mathgame/blob/main/assets/images/Startgame.jpg)
  * ### Game Over page Wireframe - [View](https://github.com/fatimagama20/Mathgame/blob/main/assets/images/gameover.jpg)


# Features

* Responsive on all device sizes
* Interactive elements

# Technologies Used

## Languages Used

  * [HTML5](https://en.wikipedia.org/wiki/HTML5)
  * [CSS3](https://en.wikipedia.org/wiki/CSS)
  * [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

  ##  Frameworks, Libraries & Programs Used
  1. [Font Awesome:](https://fontawesome.com/)
     *  Font Awesome is used to add help icon
  2. [Bootstrap5:](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
     * Bootstrap is used to create 404 page.
  3. [Hover:css:](https://ianlunn.github.io/Hover/)
     * Hover.css was used on the Social Media icons in the footer to add the float transition while being hovered over.
  4. [jQuery:](https://jquery.com/)
     * jQuery came with Bootstrap to make the navbar responsive but was also used for the smooth scroll function in JavaScript.
  5. [Git:](https://git-scm.com/)
     * Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
  6. [GitHub:](https://github.com/)
     * GitHub is used to store the projects code after being pushed from Git.
  7. [Balsamiq:](https://balsamiq.com/)
     * Balsamiq was used to create the [wireframes]() during the design process.
  8. [Am I reponsive:](https://ui.dev/amiresponsive)
     * Am I reponsive was used to create a mockup to add in a README.md file
     
# Testing
The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.
  * [W3C Markup Validator](https://validator.w3.org/#validate_by_input) - [Results](https://github.com/fatimagama20/Mathgame/blob/main/assets/images/htmlresults.jpg)
  * [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://github.com/fatimagama20/Mathgame/blob/main/assets/images/cssresults.jpg) 
  * [Javascript JSHint validator](https://jshint.com/)- [Results](https://github.com/fatimagama20/Mathgame/blob/main/assets/images/jsresults.jpg)

  ### Automated testing (TDD)
We can use code to test our code. which has several advantages over the manual testing method. Many hundreds of tests can be run against a project in a short space of time, and as tests are usually written by the  programmer during development, errors are picked up early. In other words, automated software testing is quicker, efficient, and specific.

However, tests are only as good as the questions we ask & tests can end up as purely decorative giving a false impression. Automated tests don't test the User Experience either, so the best testing strategy is a combination of both automated and user tests. 

### Jest
I have used the Jest JavaScript Testing Framework to develop automated test for the Math game. Test-Driven development is to develop code incrementally in the following way: write tests that we know will fail and then, we write just enough code to get the test to pass - without breaking any previous tests. Finally, to think about ways that we can improve or refactor our code.  This cycle is known as Red-Green-Refactor. Finally a suite of tests can be run for complete app, by typing one command into the terminal -  npm test.

I have used Jest as an introduction to automated testing to test code already written. The next stage in my development will be to implement this testing process as the product is being built.

### Testing the displayquestion works correctly 
Checks if operand1, operand2 and operator equal to 0 and x: 
1. Operand1 and Operand2 equal to 0.
![View](/assets/images/Displayfunctionworkscorrectly.jpg)
2. Operator equal to x.
![View](/assets/images/Displayfunctionworkscorrectly.jpg)

### Testing the number of specific elements contained within an html page 
1. span should exist.
2. Five buttons should exist.
![View](/assets/images/domtest.jpg)

## Manual testing (BDD)
Behaviour-Driven development is based on  the expected outcome of an action, to see if an app behaves as expected. BDD builds on the user stories, extending this by adding Given, Then, and When  - so given (a specific context), when (a specific action is carried out), then (a particular set of observable consequences should occur). The behaviour is now testable, and repeatable. Manual testing is time consuming
 
## BDD example with Math game
As a user, when I arrive at the webpage. 
- I want to be able to click on a start game button, so that questions and answers are generated.
- I want to able to choose an answers and the score is incremented on choosing correct answer.
- I want to able to see the time remaining.

# Testing User Stories from User Experience (UX) Section
 * First Time Visitor Goals

    1. As a First Time Visitor, I want to easily understand the main purpose of the game and learn more about the times table.

       * Upon launching a game, user can easily understand how to play the game by accessing the help icon. 

       ![](https://github.com/fatimagama20/Mathgame/blob/main/assets/images/Howtoplay.jpg?raw=true)
       
       * On click of the "Start Game" question will be generated with random numbers. 

       ![](https://github.com/fatimagama20/Mathgame/blob/main/assets/images/startgameq.jpg?raw=true)
       
       * Timer will be shown for the user to know how long to play. On choosing right answer, score will be incremented.

       ![](https://github.com/fatimagama20/Mathgame/blob/main/assets/images/timer.jpg?raw=true)

       * The moment timer reaches to zero game over message is displayed

       * Reset the game any time by clicking on the "Reset Game"

       ![](https://github.com/fatimagama20/Mathgame/blob/main/assets/images/gameoverwithfinalscore.jpg?raw=true)
       

# Further Testing
* The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
* The website was viewed on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhoneX.
* Friends and family members were asked to play the game and documentation to point out any bugs and/or user experience issues.
# Known Bugs
*  Game over popup overwrites the help page pop up if clicked after the timer expires.

![](https://github.com/fatimagama20/Mathgame/blob/main/assets/images/knownbug.jpg?raw=true)

*  After the timer expires and start the game again by clicking on the start Game button, the timer runs faster than normal
  * I tried fixing the bugs but unfortunately due to the short time I left them unfixed
 
# Deployment
GitHub Pages
The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/fatimagama20/Mathgame)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
   * Alternatively Click Here for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.
# Forking the GitHub Repository
By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/fatimagama20/Mathgame)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.
# Making a Local Clone
1. Log in to GitHub and locate the [GitHub Repository](https://github.com/fatimagama20/Mathgame)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type git clone, and then paste the URL you copied in Step 3.

   $ git clone https://github.com/fatimagama20/Mathgame
7. Press Enter. Your local clone will be created.

   $ git clone https://github.com/fatimagama20/Mathgame

> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
Click Here to retrieve pictures for some of the buttons and more detailed explanations of the above process.

# Credits
## Code
* [Bootstrap 5.0:](https://getbootstrap.com/docs/5.0/getting-started/introduction/) Bootstrap was used significantly throughout the project to make it responsive. I used the Grid system as well as inputting a fixed-top navbar, a progress bar and contact form.

* [Stack Overflow](https://stackoverflow.com/) was used to help me to generate the random answers.

* [W3Schools](https://www.w3schools.com/) was used to add the help popup.

* [Courses.Code Institute](https://learn.codeinstitute.net/ci_program/level5diplomainwebappdevelopment) was used to create the Math game as I used it as the base.

## Content
* [Google :](https://www.google.co.uk/) Some content was searched from google
* Some content by the developer.

## Media
* [Google:](https://www.google.co.uk/) Some game ideas were checked from google.

## Acknowledgements
* My Mentor for continuous helpful feedback.
* Tutor support at Code Institute for their support.








 
