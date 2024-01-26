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
* No need to write handlers for the reset and submit buttons.
* Can get the data from the form automatically.
* Reset the form on click the reset button.

## Setup
Import the class into your project in the usual way.
```
const { Form } = require("../Form/Form");
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
Within the constructor, a submit event listener is added to the form.
It is possible to gain access to the various components that are returned from the form. For example, in testing the form functionality of a project, it would be necessary to be able to test the components pof a particular form.

We can access the underlying form that was passed to the constructor through the getter method. A use case, here, might be one in which we don't know the particular configuration of the dom elements.
```
const my_form_element = form.form;
```
We can also gain access to all the inputs and buttons in the form. The inputs we have access to are of any type. The inputs and buttons are each returned as an array of the necessary type, HTMLFormElement or HTMLButtonElement, respectively. Just access them through their getter methods.
```
const inputs = form.inputs;

const buttons = form.btns;
```
As there should be only one submit button for any form, we can find that element by using the getter method.
```
const submitBtn = form.submitBtn;
```
, which is just a special instance of one of the buttons made available to us that is constituent of the form.
Also, we have access to the reset button, but, of course, this will mainly be used for testing purposes.mAnd a method is available so that you can reset the form at any time.
```
form.reset();
```
The entire purpose of creating this class was to get an easy way to access the data submitted by the form. As such, we can access the name/value pairs that constitute the data be outputted. There exist getter methods for each of the names and values that come from the inputs that make up the data. These arrays are simply string arrays containing those elements.
```
const names = form.inputsNames;

const values = form.values;
```
These, above, methods are generally only useful for testing purposes, however. A more useful method would be to get the data that is output. For that purpose, the getter data function exists
```
const data = form.data;
```
The type of the data is an object that contains as keys, the elements of the array returned by the inputNames getter method above and as values, the elements of the array returns by the values getter method.
## Project Status
This project may be updated with further operations and other supporting functions as the need arises to work with other projects or as time comes available, so the project, like so many, is a work in progress.

## Room for Improvement
There is always room for improvement in any coding project as skills and possibilities for further functionality may come along.

## Contact
Feel free to contact me @micrjamesjr on twitter or on github @micrjames
