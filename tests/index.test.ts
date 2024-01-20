const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require('fs');
const path = require('path');
require('@testing-library/jest-dom');

const { Form } = require("../Form");

describe("Form.", () => {
   let dom: typeof JSDOM;
   let document: Document;
   let login: typeof Form;
   beforeAll(() => {
	  const html = fs.readFileSync(path.resolve(__dirname, "..", "dist", 'index.html'), 'utf8');
	  dom = new JSDOM(html, {runScripts: 'dangerously'});
	  document = dom.window.document;
	  login = new Form(document.forms[0]);
   });
   describe("A Form in the document.", () => {
	  test("Should be in the document.", () => {
		 expect(login.form).toBeInTheDocument();
	  });
   });
   describe("A Form with the correct structure.", () => {
	  const input_names = ["name", "username", "password", "confirm_password", "email"];
	  test("Should have more than one input.", () => {
		 expect(login.inputs).toHaveLength(5);
	  });
	  test("Should have as many inputs as name attributes.", () => {
		 expect(login.inputs).toHaveLength(input_names.length);
	  });
	  test("Should have name attributes with matching values.", () => {
		 expect(login.inputsNames).toHaveLength(input_names.length);
	  });
	  test.todo("Should have text inputs of matching types.");
	  test("Should have a submit button.", () => {
		 expect(login.submitBtn).toBeInTheDocument();
	  });
   });
   describe("A Form with the correct output.", () => {
	  test.todo("Should not output an empty object.");
	  test.todo("Should output as many fields as there are inputs.");
	  test.todo("Should not have any fields that are empty.");
	  test.todo("Should output the data as an object.");
	  test.todo("Should output as an object of name/value pairs.");
   });
});
