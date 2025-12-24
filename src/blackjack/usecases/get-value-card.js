
/**
 * 
 * @param {string} card one card
 * @returns {number} value of the card
 */
export const getValueCard = (card) =>{
    const value = card.substring(0, card.length-1);
    return (isNaN(value)) ? (value ==='A') ? 11 : 10 : value * 1;
}