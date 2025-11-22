function calculateTax(price, discount = .0475, category) {
    discount = (category == 'groceries') ? .03 : discount;
    return price * discount;
}
export {};
//# sourceMappingURL=taxCalculator.js.map