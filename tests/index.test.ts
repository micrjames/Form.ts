const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require('fs');
const path = require('path');
require('@testing-library/jest-dom');
import { fireEvent } from '@testing-library/dom';

import { Form } from "../Form";
import { data } from "../utils/utils";

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
	  });
	  submitBtn = login.submitBtn;
	  input_names.forEach((input_name, i) => {
		 login.inputs[i].value = data[input_name];
	  });
	  fireEvent.click(submitBtn);
   });
   describe("A Form in the document.", () => {
	  test("Should be defined.", () => {
		 expect(login.form).toBeDefined();
	  });
	  test("Should be in the document.", () => {
		 expect(login.form).toBeInTheDocument();
	  });
   });
   describe("A Form with the correct structure.", () => {
	  describe("A Form with correctly structured inputs.", () => {
		 test("Should have each input be defined.", () => {
			login.inputs.forEach(input => {
			   expect(input).toBeDefined();
			});
		 });
		 test("Should have more than one input.", () => {
			expect(login.inputs).toHaveLength(5);
		 });
		 test("Should have as many inputs as name attributes.", () => {
			expect(login.inputs).toHaveLength(input_names.length);
		 });
		 test("Should have name attributes with matching values.", () => {
			expect(login.inputsNames).toHaveLength(input_names.length);
		 });
	  });
	  describe("A Form with correctly structured output control.", () => {
		 test("Should have a submit button that is defined.", () => {
			expect(submitBtn).toBeDefined();
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
   });
   describe("A Form with the correct output.", () => {
	  describe("A Form with the correct output should have that output.", () => {
		 test("Should be defined.", () => {
			expect(login.data).toBeDefined();
		 });
		 test("Should output the data as an object.", () => {
			expect(typeof login.data).toBe("object");
		 });
		 test("Should not output an empty object.", () => {
			expect(login.data).not.toEqual({});
		 });
		 test("Should not have any fields that are empty.", () => {
			Object.keys(login.data).forEach(field => {
			   expect(login.data[field]).not.toBeFalsy();
			});
		 });
	  });
	  describe("A Form with the correct output should have the correct structure.", () => {
		 test("Should output as many fields as there are inputs.", () => {
			const objArr = Object.keys(login.data);
			const arrSize = input_names.length;
			expect(objArr).toHaveLength(arrSize);
		 });
		 test("Should output the data as an object.", () => {
			expect(typeof login.data).toBe("object");
		 });
		 test("Should output as an object of name/value pairs.", () => {
			expect(login.data).toEqual(
				expect.objectContaining({
					name: expect.any(String),
					username: expect.any(String),
					password: expect.any(String),
					confirm_password: expect.any(String),
					email: expect.any(String)
				})
			);
		 });
	  });
	  describe("A Form with the correct output should output correctly.", () => {
		 test("Should have the correct output properties.", () => {
			Object.keys(login.data).forEach((field, i) => {
			   expect(field).toEqual(input_names[i]);
			});
		 });
		 test("Should output what was input.", () => {
			Object.keys(login.data).forEach((field, i)  => {
			   expect(login.data[field]).toEqual(login.values[i]);
			});
		 });
	  });
   });
});
