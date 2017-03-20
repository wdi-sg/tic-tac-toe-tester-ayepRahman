




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
var turn = ''


function playTurn(index) {

  if (box[index]) {
    return false
   } else {
     box[index] = turn
     if (turn === '' )
     turn = ''
     return true
   }
}
