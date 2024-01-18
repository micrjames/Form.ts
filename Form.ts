export class Form {
   private formEl: HTMLFormElement;
   private fieldInputs: HTMLFormElement[];
   private submitButton: HTMLButtonElement;
   
   constructor(form: HTMLFormElement) {
	  this.formEl = form;
	  this.fieldInputs = this.inputs;
	  this.submitButton = this.submitBtn;

	  this.formEl.addEventListener("submit", event => {
		 event.preventDefault();
	  });
   }
   get inputs(): HTMLFormElement[] {
	  const fieldEls: HTMLFormControlsCollection = this.formEl.elements;
	  let fieldInputs: Element[] = [];
	  for(let i = 0; i < fieldEls.length; i++) {
		 if(fieldEls[i].nodeName === "INPUT")
			fieldInputs = [...fieldInputs, fieldEls[i]];
	  }
	  return fieldInputs as HTMLFormElement[];
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
