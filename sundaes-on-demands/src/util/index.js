/**
 * @function formatPrice
 * Format a number as currency (usd)
 *
 * @param {number} amount
 * @returns {string} formatted currency
 *
 * @example
 *  formatPrice(100) // => '$100.00'
 *
 * @example
 *  formatPrice(1.5) // => '$1.50'
 *
 */

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(price)
}
export default formatPrice
