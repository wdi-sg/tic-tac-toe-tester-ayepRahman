




function restart() {

}

function isGameOver() {
  return false
}

function whoWon() {
  return 0
}


var box = ['x', 'x', 'x',
           'x', 'x', 'x',
           'x', 'x', 'x']
var player = 1

//input: index
//sideEffectL swithc the variable player
//output: boolean (t/f)

function playTurn(index) {

  if (box[index]) {
    return false
   } else {
     box[index] = player
     if(player === 1){
     player = 2 //become player 2
     return true
   } else {
     player = 1
   }
 }
 }
