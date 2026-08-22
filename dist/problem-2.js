"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatBookingConfirmation = (booking) => {
    const { name, guests, time } = booking;
    return `${name}'s table for ${guests} guests is confirmed at ${time}.`;
};
const booking = { name: "Aisha", guests: 4, time: "7:00 PM" };
console.log(formatBookingConfirmation(booking));
const booking2 = { name: "Rahim", guests: 2, time: "8:30 PM" };
console.log(formatBookingConfirmation(booking2));
//# sourceMappingURL=problem-2.js.map