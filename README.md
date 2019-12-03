# Health helper
Milestone Project Two: Interactive Frontend Development - Code Institute

This is a website for a service that provides information for recipes and meal plans, named 'Health helper'. The website includes information for the 3 different services they provide, a section for each service and a contact form for easier communication. 


## Demo 
A demo of the website can  be found [here](https://diovcharova.github.io/milestoneproject2/).

## UX
The website is targeted at people, interested in nutrition and diets. It is also intended to make it easier for users to come up with ideas on what to cook. 
The design on the website is very simple and stripped of complicated structures. That is because it is vital for users to be able to easy navigate and find the information they are looking for. The structure of the different sections is the same for further accommodate ease of use. The colors, typography and pictures are as neutral as possible, and only complement the main content.  

### User stories
* As a user with a specific intolerance, I want to be able to find recipes, based on a different type of cuisine, such as Italian or Thai. 
* As a user, I want to find recipes that combine the ingredients I already have in stock.
* As a person trying to watch my weight, I want to follow a healthy and diverse diet, but with a specific target of daily caloric intake. A daily meal planner is a easy way of sticking to my goal, while not struggling to come up with recipes.
* As a vegetarian, I would like to be able to easily find recipes that do not involve foods I am intolerant to. 

### UX based design
Based on the user stories, I got a clearer idea of the required features on the website. As part of the design process, I developed a wireframe, which can be viewed [here](https://github.com/diovcharova/milestoneproject2/blob/master/assets/mockups%26wireframes/Health%20helper%20wireframe.png), and a mockup, which can be viewed [here](https://github.com/diovcharova/milestoneproject2/blob/master/assets/mockups%26wireframes/Health%20helper%20mockup.png).

## Features

### Existing Features
The header and footer give a general structure to the website. The navbar is in the form of a dropdown menu and is always collapsed. The footer consists of links to the different sections, as well as links to social media accounts. In the 'Our Story' section, there are cards with links to the three services provided, which appear horizontally on a medium to large screen. At smaller sized screens, they are displayed vertically after each other. Each section contains a form with a submit button, which, when pressed, triggers a call to the Spoonacular API. The results are displayed in the form of 5 cards with a links to the recipes and an image of the dish as a background. The contact page is a form, which enables the user to contact the company more easily and is linked to EmailJS, which automatically sends the company an email whenever someone fills in the form. 

### Features left to implement
In the future, more features can be added on the website. For instance, recipes can be displayed based on price of the meal, number of servings, etc. It would have to be determined what other features the users want to see on the website. 


## Technologies Used
1. HTML5
2. CCS3
3. Bootstrap (v4.0.0)
4. JavaScript
5. jQuery
6. Spoonacular API


## Testing
The access to the different sections of the website is clear and straightforward as both the header and footer provide links to them. The different user story achieve the intended outcome. In the 'Meal plan' section, an user is able to create a daily meal plan, based on the different criteria they might have. The next section, 'What's in the fridge search' provides recipes, based on a specified list of ingredients, which achieves the second user story. The first and last user stories' goals are achieved in the section 'Dish inspiration'. There, different combinations of requirements can be input and it provides 5 relevant recipes. 
On the contact page, the contact form provides the users with the opportunity to easily contact the company, without leaving the website. When the form is filled in, an email is sent to my email address, using an EmailJS template, I have created. The links in the footer to the social media accounts of represented by Font Awesome icons and currently redirect the user to the homepage of the corresponding social media. The form on the website is validated and does not allow submission with invalid input. For example, the email address has to include a '@' sign and if it does not, an error message is displayed, indicating the user is trying to submit an invalid email address. All the fields in the forms are required and the user cannot submit the form with an empty field. The social links in the bottom of the page use a 'target="_blank"', so they open in a new tab. It has all been manually tested to make sure it displays what is expected. There are no broken links and it has been manually checked they all point to where they are supposed to. 
Different screen sizes have been tested to ensure responsiveness, in the developer tools and on [Responsinator](https://www.responsinator.com/). The website has also been run on various web browsers, such as Chrome, Safari, Internet Explorer and Microsoft Edge, leading to the conclusion the website is compatible with all of them. It does not perform well in most of the Firefox versions, as tested on [Browsershots](http://browsershots.org/). The HTML, CSS and JavaScript codes have been validated by [HTML validator](https://validator.w3.org/), [CSS Validation service - Jigsaw](https://jigsaw.w3.org/css-validator/) and [JSHint](https://jshint.com/) respectively.

## Deployment
The site is hosted on GitHub pages, deployed from the master branch. The site automatically updates whenever there is a new commit on the master branch through the terminal at Cloud9. The landing page is named 'index.html' to ensure the website deploys properly.

To run locally, the repository is cloned into the editor of choice by pasting git clone https://github.com/diovcharova/milestoneproject2/ into your terminal. To unlink the site from the GitHub repository, type git remote rm origin into the terminal. The source code can be found at https://github.com/diovcharova/milestoneproject2/.

## Credits

### Content
All of the content on the website is written by me. The results displayed from the search in sections 'Meal plan', 'What's in the fridge search' and 'Dish inspiration' are a result to a call to the [Spoonacular API](https://spoonacular.com/food-api).
### Media
The photos used in this site were obtained from [Pixabay](https://pixabay.com). The picture in the callout section, as well as the picture in the contact section have an opacity filter applied to make them more neutral to the eye.
### Acknowledgements 
The JavaScript functions, used to consume the API are inspired by Rosie's Resume project, built in the Interactive Frontend Development module of the course at Code Institute. 
