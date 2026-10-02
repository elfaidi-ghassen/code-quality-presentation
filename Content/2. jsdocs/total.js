/**
 * Calculates the total price with tax.
 *
 * @param {number} price - Base price of the item
 * @param {number} taxRate - Tax rate as decimal (0.15 = 15%)
 * @returns {number} Total price including tax
 *
 * @example
 * const total = calculateTotal(100, 0.15); // 115
 */
function calculateTotal(price, taxRate) {
  return price * (1 + taxRate);
}
