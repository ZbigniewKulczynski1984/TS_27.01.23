import { Invoice } from './classes/Invoices.js';
import { Payment } from './classes/Payments.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('yoshi', 'webwork', 250);
docTwo = new Payment('mario', 'plumbing', 200);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
	console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
});

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
	e.preventDefault();

	console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
