# Math game
## Code institute Milestone Project2

[Click here to launch a game](https://fatimagama20.github.io/Mathgame/)

This game is designed to generate random mulitplication questions and answers  which can be used to improve the times table and help make math enjoyable specially children can have fun and improve their math skills

![](https://fatimagama20-mathgame-f14h60y2ile.ws-eu104.gitpod.io/responsive design.png?raw=true)

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


  * ### Typography
    * Default fonts is used throughtout the website. I haven't use google fonts
  * ### Imagery
    * On the Homepage, I have used a professionally presented image to suit the purpose of the website, which is providing a good impression for parents to visit the website.
  
* ## Wireframes
  * ### Page Load Wireframe - [View](https://github.com/fatimagama20/TutorMilestoneProject1/blob/main/assets/image/hompage.jpg)
  * ### Start Game Wireframe - [View](https://github.com/fatimagama20/TutorMilestoneProject1/blob/main/assets/image/aboutpage.jpg)
  * ### Contact Page Wireframe - [View](https://github.com/fatimagama20/TutorMilestoneProject1/blob/main/assets/image/contactform.jpg)


# Features

* Responsive on all device sizes
* Interactive elements

# Technologies Used

## Languages Used

  * [HTML5](https://en.wikipedia.org/wiki/HTML5)
  * [CSS3](https://en.wikipedia.org/wiki/CSS)
  * [JavaScript](https://en.wikipedia.org/wiki/CSS)

  ##  Frameworks, Libraries & Programs Used
  1. [Bootstrap5:](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
     * Bootstrap was used to assist with the responsiveness and styling of the website.
  2. [Font Awesome:](https://fontawesome.com/)
     *  Font Awesome is used to add help icon
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
  * [W3C Markup Validator]() - [Results](https://github.com/fatimagama20/TutorMilestoneProject1/blob/main/assets/image/w3cmarkupvalidatorresult.jpg)
  * [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://github.com/fatimagama20/TutorMilestoneProject1/blob/main/assets/image/cssresult.jpg) 
  * []

  ### Automated testing (TDD)
We can use code to test our code. which has several advantages over the manual testing method. Many hundreds of tests can be run against a project in a short space of time, and as tests are usually written by the  programmer during development, errors are picked up early. In other words, automated software testing is quicker, efficient, and specific.

However, tests are only as good as the questions we ask & tests can end up as purely decorative giving a false impression. Automated tests don't test the User Experience either, so the best testing strategy is a combination of both automated and user tests. 

### Jest
I have used the Jest JavaScript Testing Framework to develop automated test for the Bug Match game. Test-Driven development is to develop code incrementally in the following way: write tests that we know will fail and then, we write just enough code to get the test to pass - without breaking any previous tests. Finally, to think about ways that we can improve or refactor our code.  This cycle is known as Red-Green-Refactor. Finally a suite of tests can be run for complete app, by typing one command into the terminal -  npm test.

I have used Jest as an introduction to automated testing to test code already written. The next stage in my development will be to implement this testing process as the product is being built.

### Requirements:
Before running the tests, a modification is required in script.js: comment out the EmailJS & modal scripts as well as line 15 appending the squares container to the DOM. 

### Testing the Array of Objects 
Checks if an array of objects: 
1. contains a specific value.
![View](/docs/jest_tests/jest-test-cardArray-contains-specific-value.png)
2. contains a specific object.
![View](/docs/jest_tests/jest-test-cardArray-contains-specific-value.png)

### Testing the number of specific elements contained within an html page 
1. h3 should exist.
2. three buttons should exist.
![View](/docs/jest_tests/total-tests-passed.png)

## Manual testing (BDD)
Behaviour-Driven development is based on  the expected outcome of an action, to see if an app behaves as expected. BDD builds on the user stories, extending this by adding Given, Then, and When  - so given (a specific context), when (a specific action is carried out), then (a particular set of observable consequences should occur). The behaviour is now testable, and repeatable. Manual testing is time consuming
 
## BDD example with Bug Match
As a user, when I arrive at the webpage. 
- I want to be able to click a maximum of two squares, so that each square flips and displays an image.
- I want the flipped squares if they don’t match to be flipped back in the game so I can have another go.
- I want the flipped squares if they do match to be flipped back and disabled, and be counted as a match on the scoreboard.

# Testing User Stories from User Experience (UX) Section
 * First Time Visitor Goals

    1. As a First Time Visitor, I want to easily understand the main purpose of the game and learn more about the times table.

       * Upon launching a game, user can easily understand how to play the game by accessing the help icon. 
       
       * On click of the "Start Game" question will be generated with random numbers. 
       
       * Timer will be shown for the user to know how long to play. On choosing right answer, score will be incremented.

       * The moment timer reaches to zero game over message is displayed

       * Reset the game any time by clicking on the "Reset Game"

       ![](?raw=true)
       
    2. As a First Time Visitor, I want to be able to easily be able to navigate throughout the site to find content.

        * The site has been designed to be fluid and never to entrap the user. At the top of each page there is a clean navigation bar, each link describes what the page they will end up at clearly.

        * At the bottom of the first 3 pages there is a redirection call to action to ensure      the  user always has somewhere to go and doesn't feel trapped as they get to the bottom of the page.
            
        * On the Contact Page, after a form response is submitted, the page refreshes and the user is brought to the top of the page where the navigation bar is.

        ![](?raw=true)
        
        ![](?raw=true)

    3. As a First Time Visitor, I want to look for testimonials to understand what their users think of them and see if they are trusted. I also want to locate their social media links to see their following on social media to determine how trusted and known they are.

        * Once the new visitor has read the About page and What I Do text, they will notice the qualification and use of online service.

        * The user can also scroll to the bottom of any page on the site to locate social media links in the footer.

        * At the bottom of the Contact page, the user is told underneath the form, that alternatively they can contact the person on social media which highlights the links to them.

        ![](?raw=true)

        ![](?raw=true)



 *  Frequent User Goals

    1. As a Frequent User, I want to check to see if there are any newly added reviews about the tutor.

       * The user would already be comfortable with the website layout and can easily check the reviews section.

    2. As a Frequent User, I want to check to see if there are any new subjects are added.

       * The user would already be comfortable with the website layout and can easily check the subjects.

# Further Testing
* The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
* The website was viewed on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhoneX.
* A large amount of testing was done to ensure that all pages were linking correctly.
* Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.
# Known Bugs
* Hover effects don't work on the navigation bar
  * I tried fixing hover effects on a nav bar but somehow Bootstrap is overriding the CSS. Since there is not much impact on the UX and there are clear redirection provided I left it unfixed
 
# Deployment
GitHub Pages
The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/fatimagama20/TutorMilestoneProject1)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
   * Alternatively Click Here for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.
# Forking the GitHub Repository
By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/fatimagama20/TutorMilestoneProject1)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.
# Making a Local Clone
1. Log in to GitHub and locate the [GitHub Repository](https://github.com/fatimagama20/TutorMilestoneProject1)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type git clone, and then paste the URL you copied in Step 3.

   $ git clone https://github.com/fatimagama20/TutorMilestoneProject1
7. Press Enter. Your local clone will be created.

   $ git clone https://github.com/fatimagama20/TutorMilestoneProject1

> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
Click Here to retrieve pictures for some of the buttons and more detailed explanations of the above process.

# Credits
## Code
* [Bootstrap 5.0:](https://getbootstrap.com/docs/5.0/getting-started/introduction/) Bootstrap was used significantly throughout the project to make it responsive. I used the Grid system as well as inputting a fixed-top navbar, a progress bar and contact form.

* [Stack Overflow](https://stackoverflow.com/) was used to help me style the navbar text colour and was used in HTML to close the navbar when a link is clicked on mobile.

* [W3Schools](https://www.w3schools.com/) was used to provide a smooth scroll to the website and to style the contact form and the submit button.

* [Courses.Code Institute](https://learn.codeinstitute.net/ci_program/level5diplomainwebappdevelopment) was used to style the progress bars and I used the demonstrated jQuery for the contact form.

## Content
* [Google :](https://www.google.co.uk/) Some content was searched from google
* Some content by the developer.

## Media
* [Google:](https://www.google.co.uk/) Some Images were downloaded from google.
* [Unsplash:](https://unsplash.com/) Some image are taken from Unsplash

## Acknowledgements
* My Mentor for continuous helpful feedback.
* Tutor support at Code Institute for their support.








 
