// const anchor = document.querySelector('a')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#toform') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// if(anchor) {
//     console.log(anchor.href);
// }

form.addEventListener('submit', (e: Event) => {
	e.preventDefault();

	console.log(
        type.value, 
        tofrom.value, 
        details.value, 
        amount.valueAsNumber
        );
});
