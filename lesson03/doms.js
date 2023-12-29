var anchor = document.querySelector("a");
console.log(anchor);
console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href);
//passing the class
var forms = document.querySelector(".new-item-form");
console.log(forms === null || forms === void 0 ? void 0 : forms.children);
(forms === null || forms === void 0 ? void 0 : forms.children) &&
    Array.from(forms === null || forms === void 0 ? void 0 : forms.children).forEach(function (element, index) {
        console.log(element, index + 1);
    });
var types = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
forms === null || forms === void 0 ? void 0 : forms.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(types.value);
    console.log(tofrom.value);
    console.log(details.value);
    console.log(amount.value);
});
