"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateWeeklyTotal = (expenses) => {
    if (expenses.length === 0) {
        return 0;
    }
    const sum = expenses.reduce((total, expense) => total + expense);
    return sum;
};
console.log(calculateWeeklyTotal([200, 450, 100]));
console.log(calculateWeeklyTotal([1000, 250]));
console.log(calculateWeeklyTotal([]));
//# sourceMappingURL=problem-3.js.map