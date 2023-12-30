import { Invoice2 } from "./classes/Invoice2.js";

const anchor = document.querySelector("a");
console.log(anchor);

console.log(anchor?.href);

//passing the class
const forms = document.querySelector(".new-item-form");
console.log(forms?.children);

forms?.children &&
  Array.from(forms?.children).forEach((element, index) => {
    console.log(element, index + 1);
  });

const types = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;

const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

forms?.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(types.value);
  console.log(tofrom.value);

  console.log(details.value);

  console.log(amount.value);
});

class Invoice {
  readonly client: string;
  private details: string;
  public amount: number;

  constructor(c: string, d: string, i: number) {
    this.client = c;
    this.details = d;
    this.amount = i;
  }

  format() {
    return `${this.client} owes ₹${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("mannu", "design mobile app", 1200);
const invTwo = new Invoice("nanu", "design ios screens", 1650);

console.log(invOne, invTwo);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

invoices.forEach((inv) => {
  console.log(inv.amount, inv.format(), inv.client);
});

const inv3 = new Invoice2("zarine", "design website", 1400);
const inv4 = new Invoice2("pokemon", "design jetpacks", 1750);

console.log(inv3.format());
console.log(inv4.format());
