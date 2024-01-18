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
   test("Should be the form.", () => {
	  expect(login.form).toBeInTheDocument();
   });
});
