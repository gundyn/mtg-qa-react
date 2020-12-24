# Wizardly Questions

An app for discustion over Magic the Gathering rules. 

Have you ever been playing a game of Magic and been uncertian on the ruling for a specific situation? If so you are not alone! This app is a place for players to post questions and have other players weigh in on how the rules should be interpreted. Odds are someone has run into the same situation you find yourself in!

- - - 

*Wizardly client repo*
(https://github.com/gundyn/mtg-qa-react)

*Wizardly client deployed*
(https://gundyn.github.io/mtg-qa-react/)

*Wizardly django api repo*
(https://github.com/gundyn/mtg-qa-app) 

*Wizardly django api deployed*
(https://mtg-qa-app.herokuapp.com/) 

- - -
## Installation
1. Fork and clone this repository.
2. Create a new branch for your work 
3. Checkout to the branch.
4. Install dependencies with ```npm install```. 

- - -
## Routes 
| HTTP Method   | URL Path     | Result            |
|:--------------|:-------------|:------------------|
| GET           | /questions/     | read list of questions   |
| GET           | /questions/questionId | read single question  |
| POST          | /questions/       | create question       |
| PATCH         | /questions/questionId | update question       |
| DELETE        | /questions/questionId | delete question      |

- - - 
## Planning Story
Given the Client Specifications I was able to breakdown the overall app into a series of smaller tasks to complete. The plan was to set up the API that I would be communicating with first. After the creation of the API the next step was to set up React and communication with the API. Following that my plan was to tackle the CRUD actions one at a time starting with CREATE. After Create was working I wanted to set up INDEX, PATCH, and DELETE.

Creating the question resource was planned to be first followed by creating the answer resource. I wanted users to have the ability to create mulitple questions and to be able to answer multiple questions while logged in.

-Client Specifications-  


- Use a front-end Javascript app to communicate with your API (both read and write) and render data that it receives in the browser.
- Have semantically clean HTML and CSS
- User must be able to create a new resource
- User must be able to update a resource
- User must be able to delete a resource
- User must be able to view a single or multiple resource(s)
- All resource actions that change data must only be available to a signed in user.
- Give feedback to the user after each action's success or failure.
- All forms must clear after submit success or failure
Protect against Cross-site Scripting

- - -
## User Stories
- as a user I want to post a question 

- as a user I want to see a question 

- as a user I want to see all questions 

- as a user I want to see my questions 

- as a user I want to post an answer

- as a user I want to see a answer

- as a user I want to see all answers for a question 

- as a user I want to see all my answers 

- - -
## Technologies used
- Javascript

- - -
## Unsolved Problem
- view all questions regarless of owner

- be able to vote on the best answer  

- add darkmode toggle

- let users see all questions

- let users see all answer a question has   

- - -
## Images

![Imgur Image](https://imgur.com/njF7o74.jpg)