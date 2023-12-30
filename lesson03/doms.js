import { Invoice2 } from "./classes/Invoice2.js";
("use strict");
Object.defineProperty(exports, "__esModule", { value: true });
//var Invoice2_js_1 = require("./classes/Invoice2.js");
var anchor = document.querySelector("a");
console.log(anchor);
console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href);
//passing the class
var forms = document.querySelector(".new-item-form");
console.log(forms === null || forms === void 0 ? void 0 : forms.children);
(forms === null || forms === void 0 ? void 0 : forms.children) &&
  Array.from(
    forms === null || forms === void 0 ? void 0 : forms.children
  ).forEach(function (element, index) {
    console.log(element, index + 1);
  });
var types = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
forms === null || forms === void 0
  ? void 0
  : forms.addEventListener("submit", function (e) {
      e.preventDefault();
      console.log(types.value);
      console.log(tofrom.value);
      console.log(details.value);
      console.log(amount.value);
    });
var Invoice = /** @class */ (function () {
  function Invoice(c, d, i) {
    this.client = c;
    this.details = d;
    this.amount = i;
  }
  Invoice.prototype.format = function () {
    return ""
      .concat(this.client, " owes \u20B9")
      .concat(this.amount, " for ")
      .concat(this.details);
  };
  return Invoice;
})();
var invOne = new Invoice("mannu", "design mobile app", 1200);
var invTwo = new Invoice("nanu", "design ios screens", 1650);
console.log(invOne, invTwo);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invoices.forEach(function (inv) {
  console.log(inv.amount, inv.format(), inv.client);
});
var inv3 = new Invoice2_js_1.Invoice2("zarine", "design website", 1400);
var inv4 = new Invoice2_js_1.Invoice2("pokemon", "design jetpacks", 1750);
console.log(inv3.format());
console.log(inv4.format());
