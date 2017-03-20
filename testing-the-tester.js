




function restart() {
  var box = ['x', 'x', 'x',
             'x', 'x', 'x',
             'x', 'x', 'x']
  var player = 1
}

//out: boorlean (t/f) whether the game is over or not
function isGameOver() {
  return false
}

//input: nothing
//output: either 1,2,3 , or if it the start of the game
function whoWon() {
if (grid[0] && grid[0] === grid[1] && grid[0] === grid[2]) return grid[0]
if (grid[0] && grid[0] === grid[1] && grid[0] === grid[2]) return grid[0]
if (grid[0] && grid[0] === grid[1] && grid[0] === grid[2]) return grid[0]
if (grid[0] && grid[0] === grid[1] && grid[0] === grid[2]) return grid[0]
if (grid[0] && grid[0] === grid[1] && grid[0] === grid[2]) return grid[0]
if (grid[0] && grid[0] === grid[1] && grid[0] === grid[2]) return grid[0]
if (grid[0] && grid[0] === grid[1] && grid[0] === grid[2]) return grid[0]
if (grid[0] && grid[0] === grid[1] && grid[0] === grid[2]) return grid[0]
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
