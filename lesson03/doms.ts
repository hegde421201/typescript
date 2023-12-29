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
