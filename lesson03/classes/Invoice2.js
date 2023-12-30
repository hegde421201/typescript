"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice2 = void 0;
var Invoice2 = /** @class */ (function () {
    function Invoice2(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice2.prototype.format = function () {
        return "".concat(this.client, " owes \u20B9").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice2;
}());
exports.Invoice2 = Invoice2;
