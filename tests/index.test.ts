const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require('fs');
const path = require('path');
require('@testing-library/jest-dom');
import { fireEvent } from '@testing-library/dom';

const { Form } = require("../Form");
const { data } = require("../utils/utils");

describe("Form.", () => {
   let dom: typeof JSDOM;
   let document: Document;
   let login: typeof Form;
   let submitBtn: HTMLButtonElement;
   let input_names: string[];
   beforeAll(() => {
	  const html = fs.readFileSync(path.resolve(__dirname, "..", "dist", 'index.html'), 'utf8');
	  dom = new JSDOM(html, {runScripts: 'dangerously'});
	  document = dom.window.document;
	  input_names = ["name", "username", "password", "confirm_password", "email"];
	  login = new Form(document.forms[0], data => {
	     console.log(data);
	  });
	  submitBtn = login.submitBtn;
	  input_names.forEach((input_name, i) => {
		 login.inputs[i].value = data[input_name];
	  });
	  fireEvent.click(submitBtn);
   });
   describe("A Form in the document.", () => {
	  test("Should be in the document.", () => {
		 expect(login.form).toBeInTheDocument();
	  });
   });
   describe("A Form with the correct structure.", () => {
	  test("Should have more than one input.", () => {
		 expect(login.inputs).toHaveLength(5);
	  });
	  test("Should have as many inputs as name attributes.", () => {
		 expect(login.inputs).toHaveLength(input_names.length);
	  });
	  test("Should have name attributes with matching values.", () => {
		 expect(login.inputsNames).toHaveLength(input_names.length);
	  });
	  test("Should have a submit button.", () => {
		 expect(submitBtn).toBeInTheDocument();
	  });
	  test("Should have only one submit button.", () => {
		 let submitBtns: HTMLButtonElement[] = [];
		 for(let i = 0; i < login.btns.length; i++)
		 	if(login.btns[i].type == "submit")
			   submitBtns = [...submitBtns, login.btns[i]];
		 expect(submitBtns.length == 1).toBeTruthy();
	  });
   });
   describe("A Form with the correct output.", () => {
	  test("Should not output an empty object.", () => {
	  });
	  test.todo("Should output as many fields as there are inputs.");
	  test.todo("Should not have any fields that are empty.");
	  test.todo("Should output the data as an object.");
	  test.todo("Should output as an object of name/value pairs.");
   });
});
