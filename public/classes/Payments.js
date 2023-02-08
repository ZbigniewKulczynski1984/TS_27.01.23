export class Payment {
    constructor(receipient, details, amount) {
        this.receipient = receipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.receipient} owed £${this.amount} for ${this.details}`;
    }
}
