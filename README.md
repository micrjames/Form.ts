# Form
An implementation of a form that handles input for an html form and outputs the data without knowing anything about the structure of the form.

## Table Of Contents
* [General Info](#general-info)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)

## General Info
This project was developed to handle data from a form. The goal was to work with a form's elements without having to get dom elements for its elements each time. No knowledge of the inner workings of the form is needed. As long as the form has inputs and a submit button, the code will accept the data and create an object that contains that data.

## Technologies Used
This entire project is created as a Typescript class. It contains the necessary methods and fields to obtain access to the inputs and the name/value pairs that will be make up 

## Features
This project is fairly simple from the point of view of the user. The user only needs to instantiate the class and know what needs to be done with the data.
* No need to understand the structure of the form.
* Pass in the necessary form from the dom.
* Pass in a callback function to manipulate the data in some way.

## Setup
Import the class into your project in the usual way.
```
const { Form } = require("Form/Form");
```
Get the form from the DOM by its name, like:
```
const my_form = document.forms("my_form");
```
, or if known, by index
```
const my_form = document.forms[0];
```
as document.forms returns an HTMLCollection of all the forms on the document.
## Usage
Instantiate the Form class and pass the form from the DOM as its first argument and a callback which manipulates the form data as its second argument.
```
const form = new Form(my_form, data => {
  // use the data here
});
```

## Project Status
This project may be updated with further operations and other supporting functions as the need arises to work with other projects or as time comes available, so the project, like so many, is a work in progress.

## Room for Improvement
There is always room for improvement in any coding project as skills and possibilities for further functionality may come along.

## Contact
Feel free to contact me @micrjamesjr on twitter or on github @micrjames
