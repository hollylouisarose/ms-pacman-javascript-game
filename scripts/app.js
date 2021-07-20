// * DOM Variables

const grid = document.querySelector('.grid')
const gameScore = document.getElementById('#score')

// * Game Variables

const width = 20
const gridCellCount = width * width
const cells = []

// * CSS Classes

const pacmanClass = 'pacman'
const wallClass = 'wall'
const foodPointClass = 'foodpoint'
const superFoodPointClass = 'superfoodpoint'
const portalClass = 'portal'
const ghostHomeClass = 'ghosthome'
const redGhostClass = 'redghost'
// const orangeGhostClass = 'orangeghost'
// const blueGhostClass = 'blueghost'
// const pinkGhostClass = 'pinkghost'

// * Scores and positions

let pacmanPosition = 248
let totalGameScore = 0
let redGhostPosition = 132
// let blueGhostPosition = 190
// let pinkGhostPosition = 208
// let orangeGhostPosition = 210


// * Functions

function addPacman(){
  cells[pacmanPosition].classList.add(pacmanClass)
}

function removePacman(){
  cells[pacmanPosition].classList.remove(pacmanClass)
}

function addRedGhost(){
  cells[redGhostPosition].classList.add(redGhostClass)
}

function removeRedGhost(){
  cells[redGhostPosition].classList.remove(redGhostClass)
}

console.log(redGhostPosition)

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

  // * border walls

  for (let index = 0; index <= 380; index += 20) {
    cells[index].classList.add(wallClass)
  }

  for (let index = 19; index <= 399; index += 20) {
    cells[index].classList.add(wallClass)
  }

  for (let index = 0; index <= 19; index++) {
    cells[index].classList.add(wallClass)  
  }

  for (let index = 381; index <= 398; index++) {
    cells[index].classList.add(wallClass)  
  }

  // * horizontal walls

  for (let index = 103; index <= 117; index++) {
    cells[index].classList.add(wallClass)   
  }

  for (let index = 141; index <= 143; index++) {
    cells[index].classList.add(wallClass)  
  }

  for (let index = 155; index <= 158; index++) {
    cells[index].classList.add(wallClass) 
  }

  for (let index = 201; index <= 205; index++) {
    cells[index].classList.add(wallClass)  
  }

  for (let index = 213; index <= 218; index++) {
    cells[index].classList.add(wallClass)  
  }

  for (let index = 221; index <= 225; index++) {
    cells[index].classList.add(wallClass)
  }

  for (let index = 233; index <= 238; index++) {
    cells[index].classList.add(wallClass) 
  }

  for (let index = 227; index <= 231; index++) {
    cells[index].classList.add(wallClass)
  }

  for (let index = 268; index <= 271; index++) {
    cells[index].classList.add(wallClass) 
  }

  for (let index = 308; index <= 311; index++) {
    cells[index].classList.add(wallClass)  
  }

  // * top section blocks

  for (let index = 42; index <= 46; index++) {
    cells[index].classList.add(wallClass)   
  }

  for (let index = 62; index <= 66; index++) {
    cells[index].classList.add(wallClass)   
  }

  for (let index = 53; index <= 57; index++) {
    cells[index].classList.add(wallClass)  
  }

  for (let index = 73; index <= 77; index++) {
    cells[index].classList.add(wallClass)
  }

  // * bottom section blocks

  for (let index = 262; index <= 264; index++) {
    cells[index].classList.add(wallClass)
  }

  for (let index = 275; index <= 277; index++) {
    cells[index].classList.add(wallClass)
  }

  for (let index = 342; index <= 346; index++) {
    cells[index].classList.add(wallClass)    
  }

  for (let index = 353; index <= 357; index++) {
    cells[index].classList.add(wallClass)  
  }

  // * vertical walls

  for (let index = 9; index <= 69; index += 20) {
    cells[index].classList.add(wallClass)   
  }

  for (let index = 10; index <= 70; index += 20) {
    cells[index].classList.add(wallClass)  
  }

  for (let index = 105; index <= 165 ; index += 20) {
    cells[index].classList.add(wallClass)   
  }

  for (let index = 113; index <= 173; index += 20) {
    cells[index].classList.add(wallClass)   
  }

  for (let index = 167; index <= 207; index += 20) {
    cells[index].classList.add(wallClass)   
  }

  for (let index = 171; index <= 211; index += 20) {
    cells[index].classList.add(wallClass)   
  }

  for (let index = 266; index <= 346; index += 20 ) {
    cells[index].classList.add(wallClass)   
  }

  for (let index = 273; index <= 333; index += 20) {
    cells[index].classList.add(wallClass)
  }

  for (let index = 263; index <= 303; index += 20) {
    cells[index].classList.add(wallClass) 
  }
  
  for (let index = 264; index <= 304; index += 20) {
    cells[index].classList.add(wallClass) 
  }

  for (let index = 275; index <= 315 ; index += 20) {
    cells[index].classList.add(wallClass) 
  }

  for (let index = 276; index <= 316; index += 20) {
    cells[index].classList.add(wallClass) 
  }

  for (let index = 309; index <= 349; index += 20) {
    cells[index].classList.add(wallClass) 
  }

  for (let index = 310; index <= 350; index += 20) {
    cells[index].classList.add(wallClass) 
  }
}


function makeGhostHome(){
  for (let index = 188; index <= 190; index++) {
    cells[index].classList.add(foodPointClass)
  }
  for (let index = 208; index <= 210; index++) {
    cells[index].classList.add(ghostHomeClass) 
  }
}

function makePortals(){
  for (let index = 160; index <= 180; index += 20) {
    cells[index].classList.remove(wallClass)  
    cells[index].classList.add(portalClass)  
  }
  for (let index = 179; index <= 199; index += 20) {
    cells[index].classList.remove(wallClass)  
    cells[index].classList.add(portalClass) 
  }
}

function makeFoodPoints(){
  const foodPoints = cells.map(cell =>{
    if (!cell.classList.contains(wallClass) 
    && !cell.classList.contains(portalClass)
    && !cell.classList.contains(pacmanClass))
      cell.classList.add(foodPointClass)
  })
  return foodPoints
}

function makeSuperFoodPoints(){
  cells[61].classList.remove(foodPointClass)
  cells[58].classList.remove(foodPointClass)
  cells[302].classList.remove(foodPointClass)
  cells[358].classList.remove(foodPointClass)
  cells[61].classList.add(superFoodPointClass)
  cells[58].classList.add(superFoodPointClass)
  cells[302].classList.add(superFoodPointClass)
  cells[358].classList.add(superFoodPointClass)
}

let travelDirection = 0

function moveGhosts(){
  setInterval(() => {
    removeRedGhost()
    ghostWallCheck()
    console.log('checking for walls')
    if (cells[redGhostPosition].classList.contains(foodPointClass) && travelDirection === 1){
      redGhostPosition ++
      addRedGhost()
    } else if (cells[redGhostPosition].classList.contains(foodPointClass) && travelDirection === 2){
      redGhostPosition --
      addRedGhost()
    } else if (cells[redGhostPosition].classList.contains(foodPointClass) && travelDirection === 3){
      redGhostPosition -= 20
      addRedGhost()
    } else if (cells[redGhostPosition].classList.contains(foodPointClass) && travelDirection === 4){
      redGhostPosition += 20
      addRedGhost()
    }
  }, 1000)
} 

function ghostWallCheck(){
  if (cells[redGhostPosition + 1].classList.contains(wallClass)){
    travelDirection = Math.floor(Math.random() * 4)
    console.log('changing direction')
  } else if (cells[redGhostPosition - 1].classList.contains(wallClass)){
    travelDirection = Math.floor(Math.random() * 4)
    console.log('changing direction')
  } else if (cells[redGhostPosition - 20].classList.contains(wallClass)){
    travelDirection = Math.floor(Math.random() * 4)
    console.log('changing direction')
  } else if (cells[redGhostPosition + 20].classList.contains(wallClass)){
    travelDirection = Math.floor(Math.random() * 4)
    console.log('changing direction')
  }
}

console.log(cells[redGhostPosition])
console.log(cells[redGhostPosition - 1])

function handleKeyUp(event){
  removePacman()
  const x = pacmanPosition % width
  const y = Math.floor(pacmanPosition / width) 
  gameScore.innerHTML = totalGameScore
  switch (event.keyCode) {
    case 39:
      if (x < width - 2 && wallCheck(pacmanPosition + 1)){
        pacmanPosition ++ 
        scoreCheck(pacmanPosition)
      } 
      break
    case 37: 
      if (x > 1 && wallCheck(pacmanPosition - 1)){
        pacmanPosition --
        scoreCheck(pacmanPosition)
      } 
      break
    case 38:
      if (y > 1 && wallCheck(pacmanPosition - 20)) {
        pacmanPosition -= width
        scoreCheck(pacmanPosition)
      }
      break 
    case 40:
      if (y < width - 2 && wallCheck(pacmanPosition + 20)){
        pacmanPosition += width
        scoreCheck(pacmanPosition)
      }
      break
  }
  addPacman()
}

function wallCheck(position) { 
  return !cells[position].classList.contains(wallClass)
}


function scoreCheck(position) {
  if (cells[position].classList.contains(foodPointClass)){
    cells[pacmanPosition].classList.remove(foodPointClass)
    totalGameScore = totalGameScore + 10 
  } else if (cells[position].classList.contains(superFoodPointClass)){
    cells[pacmanPosition].classList.remove(superFoodPointClass)
    totalGameScore = totalGameScore + 50 
    console.log('superpoint!')
  } else if (!cells[position].classList.contains(foodPointClass) ||
            !cells[position].classList.contains(superFoodPointClass)){
    return
  }
}


createGrid()
addPacman()
addRedGhost()
makeWalls()
makeGhostHome()
makePortals()
makeFoodPoints()
makeSuperFoodPoints()
// moveGhosts()

// * Events
window.addEventListener('keydown', handleKeyUp)

