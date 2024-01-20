export class Form {
   private formEl: HTMLFormElement;
   private fieldInputs: HTMLFormElement[];
   private submitButton: HTMLButtonElement;
   
   constructor(form: HTMLFormElement, cb) {
	  this.formEl = form;
	  this.fieldInputs = this.inputs;
	  this.submitButton = this.submitBtn;

	  this.formEl.addEventListener("submit", event => {
		 event.preventDefault();

		 cb();
	  });
   }
   private formElements(type: string): Element[] {
	  const fieldEls: HTMLFormControlsCollection = this.formEl.elements;
	  let fieldElements: Element[] = [];
	  for(let i = 0; i < fieldEls.length; i++) {
		 if(fieldEls[i].nodeName === type)
			fieldElements = [...fieldElements, fieldEls[i]];
	  }
	  return fieldElements;
   }
   get inputs(): HTMLFormElement[] {
	  let fieldInputs: Element[] = this.formElements("INPUT");
	  return fieldInputs as HTMLFormElement[];
   }
   get btns(): HTMLButtonElement[] {
	  let btns: HTMLButtonElement[] = [];
	  btns = this.formElements("BUTTON") as HTMLButtonElement[];
	  return btns;
   }
   get submitBtn(): HTMLButtonElement {
	  let submitBtn: Element;
	  // there can only be one "submit" button in a form.
	  if(this.btns.length == 1 && this.btns[0].type == "submit")
		 submitBtn = this.btns[0];
	  return submitBtn as HTMLButtonElement;
   }
   get values(): (string | number)[] {
		 let values: (string | number)[] = [];
		 for(let i = 0; i < this.inputs.length; i++)
			values = [...values, this.inputs[i].value];
		 return values;
   }
   get inputsNames(): (string | undefined)[] {
	  return this.fieldInputs.map(fieldInput => {
		 return fieldInput.attributes.getNamedItem("name")?.value;
	  });
   }
   get form(): HTMLFormElement {
	  return this.formEl;
   }
}
