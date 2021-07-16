// * DOM Variables

const grid = document.querySelector('.grid')
// const gameScore = document.getElementById('#score')

// * Game Variables

const width = 20
const gridCellCount = width * width
const cells = []
const pacmanClass = 'pacman'
let pacmanPosition = 150
let totalGameScore = 0


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

function makeWalls(){

  // *border wall

  for (let index = 0; index <= 380; index += 20) {
    cells[index].classList.add('wall')
  }

  for (let index = 19; index <= 399; index += 20) {
    cells[index].classList.add('wall')
  }

  for (let index = 0; index <= 19; index++) {
    cells[index].classList.add('wall')  
  }

  for (let index = 381; index <= 398; index++) {
    cells[index].classList.add('wall')  
  }

  // * horizontal wall

  for (let index = 103; index <= 117; index++) {
    cells[index].classList.add('wall')   
  }

  for (let index = 141; index <= 143; index++) {
    cells[index].classList.add('wall')  
  }

  for (let index = 155; index <= 158; index++) {
    cells[index].classList.add('wall') 
  }

  for (let index = 201; index <= 205; index++) {
    cells[index].classList.add('wall')  
  }

  for (let index = 213; index <= 218; index++) {
    cells[index].classList.add('wall')  
  }

  for (let index = 221; index <= 225; index++) {
    cells[index].classList.add('wall')
  }

  for (let index = 233; index <= 238; index++) {
    cells[index].classList.add('wall') 
  }

  for (let index = 167; index <= 171; index++) {
    cells[index].classList.add('wall') 
  }

  for (let index = 227; index <= 231; index++) {
    cells[index].classList.add('wall')
  }

  for (let index = 268; index <= 271; index++) {
    cells[index].classList.add('wall') 
  }

  for (let index = 308; index <= 311; index++) {
    cells[index].classList.add('wall')  
  }

  // * top section blocks

  for (let index = 42; index <= 46; index++) {
    cells[index].classList.add('wall')   
  }

  for (let index = 62; index <= 66; index++) {
    cells[index].classList.add('wall')   
  }

  for (let index = 53; index <= 57; index++) {
    cells[index].classList.add('wall')  
  }

  for (let index = 73; index <= 77; index++) {
    cells[index].classList.add('wall')
  }

  // * bottom section blocks

  for (let index = 262; index <= 264; index++) {
    cells[index].classList.add('wall')
  }

  for (let index = 275; index <= 277; index++) {
    cells[index].classList.add('wall')
  }

  for (let index = 342; index <= 346; index++) {
    cells[index].classList.add('wall')    
  }

  for (let index = 353; index <= 357; index++) {
    cells[index].classList.add('wall')  
  }

  // * vertical wall

  for (let index = 9; index <= 69; index += 20) {
    cells[index].classList.add('wall')   
  }

  for (let index = 10; index <= 70; index += 20) {
    cells[index].classList.add('wall')  
  }

  for (let index = 105; index <= 165 ; index += 20) {
    cells[index].classList.add('wall')   
  }

  for (let index = 113; index <= 173; index += 20) {
    cells[index].classList.add('wall')   
  }

  for (let index = 167; index <= 207; index += 20) {
    cells[index].classList.add('wall')   
  }

  for (let index = 171; index <= 211; index += 20) {
    cells[index].classList.add('wall')   
  }

  for (let index = 266; index <= 346; index += 20 ) {
    cells[index].classList.add('wall')   
  }

  for (let index = 273; index <= 333; index += 20) {
    cells[index].classList.add('wall')
  }

  for (let index = 263; index <= 303; index += 20) {
    cells[index].classList.add('wall') 
  }
  
  for (let index = 264; index <= 304; index += 20) {
    cells[index].classList.add('wall') 
  }

  for (let index = 275; index <= 315 ; index += 20) {
    cells[index].classList.add('wall') 
  }

  for (let index = 276; index <= 316; index += 20) {
    cells[index].classList.add('wall') 
  }

  for (let index = 309; index <= 349; index += 20) {
    cells[index].classList.add('wall') 
  }

  for (let index = 310; index <= 350; index += 20) {
    cells[index].classList.add('wall') 
  }
}


function makeGhostHome(){
  for (let index = 188; index <= 190; index++) {
    cells[index].classList.add('ghosthome')
  }
  for (let index = 208; index <= 210; index++) {
    cells[index].classList.add('ghosthome') 
  }
}

function makePortals(){
  for (let index = 160; index <= 180; index += 20) {
    cells[index].classList.remove('wall')  
    cells[index].classList.add('portal')  
  }
  for (let index = 179; index <= 199; index += 20) {
    cells[index].classList.remove('wall')  
    cells[index].classList.add('portal') 
  }
}

function handleKeyUp(event){
  removePacman()
  const x = pacmanPosition % width
  const y = Math.floor(pacmanPosition / width) 
  switch (event.keyCode) {
    case 39:
      if (x < width - 2 && wallCheck(pacmanPosition + 1)){
        pacmanPosition ++  
        console.log(totalGameScore = totalGameScore + 10)
        cells[pacmanPosition].classList.remove('foodpoint')
      } 
      break
    case 37: 
      if (x > 1 && wallCheck(pacmanPosition - 1)){
        pacmanPosition --
        console.log(totalGameScore = totalGameScore + 10)
        cells[pacmanPosition].classList.remove('foodpoint')
      } 
      break
    case 38:
      if (y > 1 && wallCheck(pacmanPosition - 20)) {
        pacmanPosition -= width
        console.log(totalGameScore = totalGameScore + 10)
        cells[pacmanPosition].classList.remove('foodpoint')
      }
      break 
    case 40:
      if (y < width - 2 && wallCheck(pacmanPosition + 20)){
        pacmanPosition += width
        console.log(totalGameScore = totalGameScore + 10)
        cells[pacmanPosition].classList.remove('foodpoint')
      }
      break
  }
  addPacman()
}

function wallCheck(position) { 
  return !cells[position].classList.contains('wall')
}

function makeFoodPoints(){
  const foodPoints = cells.map(cell =>{
    if (!cell.classList.contains('wall') 
    && !cell.classList.contains('portal')
    && !cell.classList.contains(pacmanClass)
    && !cell.classList.contains('ghosthome'))
      cell.classList.add('foodpoint')
  })
  return foodPoints
}

createGrid()
addPacman()
makeWalls()
makeGhostHome()
makePortals()
makeFoodPoints()


// * Events
window.addEventListener('keydown', handleKeyUp)
