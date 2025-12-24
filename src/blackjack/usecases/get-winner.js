
/**
 * 
 * @param {array{numeric}} pointsPlayer point of everyone players 
 */
export const getWinner = (pointsPlayers) =>{
    const [minpoints, pointsComputer] = pointsPlayers;

    setTimeout(() =>{ 
            if(pointsComputer === minpoints){
                alert('Esto es un empate');
            }else if(minpoints > 21){
                alert('La Computadora Gana');
            }else if(pointsComputer > 21){
                alert('Jugador gana');
            }else{
                alert('Computadora Gana')
            }
    }, 15);
}