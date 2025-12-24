
import _ from "underscore";


/**
 * 
 * @param {array<string>} types  like ['C', 'D', 'H', 'S'];
 * @param {array <string>} specials like ['A', 'J', 'Q', 'K'];
 * @returns {array<string>}  return new deck
 */
export const createDeck = (types, specials) =>{

    if(!types || types.length === 0)
        throw new Error('Type of card is must, like array string');

    if (!specials || specials.length === 0)
        throw new Error('Special of card is must, like array string');


    let deck = [];

    for(let i = 2; i <= 10; i++){
        for(let tipo of types){
            deck.push(i + tipo);
        }
    }

    for(let spec of specials){
        for (let tipo of types ){
            deck.push(spec+tipo);
        }
    } 

    return _.shuffle(deck);
}