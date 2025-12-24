
/**
 * 
 * @param {array<string>} deck array of the deck
 * @returns {string} one card of the deck
 */
export const getCard = (deck) =>{

    if(!deck || deck.length === 0){
        throw new Error('Deck empty or not valid');
    }

    if(deck.length === 0){
        throw 'No hay cartas en el Deck';
    }
    return deck.pop();
}