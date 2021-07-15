// * DOM Variables

const grid = document.querySelector('.grid')

// * Game Variables

const width = 20
const gridCellCount = width * width
const cells = []
const pacmanClass = 'pacman'
let pacmanPosition = cells / 2


// * Functions

function addPacman(){
  cells[pacmanPosition].classList.add(pacmanClass)
}

function removePacman(){
  cells[pacmanPosition].classList.remove(pacmanClass)
}

function createGrid() {
  for (let index = 0; index < gridCellCount; index++) {
    const cell = document.createElement('div')
    cell.setAttribute('data-index', index)
    cells.push(cell)
    grid.appendChild(cell)
    cell.textContent = index
  }
}



function handleKeyUp(event){
  console.log(event.keyCode)
  const x = pacmanPosition % width
  const y = Math.floor(pacmanPosition / width) 

  removePacman()

  switch (event.keyCode) {
    case 39:
      if (x < width - 2){
        pacmanPosition ++  
      }
      break
    case 37: 
      if (x > 1){
        pacmanPosition --
      } 
      break
    case 38:
      if (y > 1) {
        pacmanPosition -= width
      }
      break 
    case 40:
      if (y < width - 2){
        pacmanPosition += width
      }
      break
  }
  addPacman()   
}

createGrid()
addPacman()

// * Events
window.addEventListener('keydown', handleKeyUp)
