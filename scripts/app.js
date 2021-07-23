// * DOM Variables

const grid = document.querySelector('.grid')
const gameScore = document.getElementById('#score')
const livesDisplay = document.getElementById('#life-count')
const startGameMessage = document.querySelector('.start-game')
const gameOverMessage = document.querySelector('.game-over')
const winMessage = document.querySelector('.win')
const playAgainButton = document.querySelector('.game-over button')

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
const blueGhostClass = 'blueghost'
const orangeGhostClass = 'orangeghost'
const pinkGhostClass = 'pinkghost'

// * Scores and positions

let pacmanPosition = 247
let totalGameScore = 0
let isPathClear = true
let ghostMoves = [1, -1, -width, +width]
let level = 1
let blueGhostPosition = 170
let pinkGhostPosition = 168
let orangeGhostPosition = 210
let redGhostPosition = 208

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
    // cell.textContent = index
  }
}

function makeWalls(){
  if (level === 1){
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

    for (let index = 103; index <= 105; index++) {
      cells[index].classList.add(wallClass)   
    }

    for (let index = 108; index <= 111; index++) {
      cells[index].classList.add(wallClass)   
    }

    for (let index = 114; index <= 117; index++) {
      cells[index].classList.add(wallClass)   
    }

    for (let index = 141; index <= 143; index++) {
      cells[index].classList.add(wallClass)  
    }

    for (let index = 155; index <= 158; index++) {
      cells[index].classList.add(wallClass) 
    }

    for (let index = 202; index <= 205; index++) {
      cells[index].classList.add(wallClass)  
    }

    for (let index = 214; index <= 217; index++) {
      cells[index].classList.add(wallClass)  
    }

    for (let index = 222; index <= 225; index++) {
      cells[index].classList.add(wallClass)
    }

    for (let index = 234; index <= 237; index++) {
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
}

function handleStart(event){
  if (event.keyCode === 32){
    startGameMessage.style.display = 'none'
    createGrid()
    addPacman()
    addRedGhost()
    addBlueGhost()
    addOrangeGhost()
    addPinkGhost()
    makeWalls()
    makeGhostHome()
    makePortals()
    makeFoodPoints()
    makeSuperFoodPoints()
    youWin()
    setTimeout(() => {
      redGhostMove()
      blueGhostMove()
      orangeGhostMove()
      pinkGhostMove() 
    }, 500)
    playAudio()
  }
}

function playAudio(){
  const afterAudio = document.querySelector('#after')
  afterAudio.src = './sounds/Ready For The Floor.mp3'
  afterAudio.play()
}

function gameOver(){
  if (lives === 0){
    grid.style.display = 'none'
    gameOverMessage.style.display = 'block'
  } 
}

function youWin(){
  if (totalGameScore === 2170){
    grid.style.display = 'none' 
    winMessage.style.display = 'block'    
  }
}

function playAgain(event){
  if (event.type === 'click'){
    location.reload()
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
  for (let index = 179; index <= 180; index ++) {
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

function handleKeyDown(event){
  removePacman()
  gameScore.innerHTML = totalGameScore
  switch (event.keyCode) {
    case 39:
      if (wallCheck(pacmanPosition + 1)){
        pacmanPosition ++ 
        scoreCheck(pacmanPosition)
        superFoodCheck(pacmanPosition)
        ghostCheck(pacmanPosition)

      } 
      break
    case 37: 
      if ( wallCheck(pacmanPosition - 1)){
        pacmanPosition --
        scoreCheck(pacmanPosition)
        superFoodCheck(pacmanPosition)
        ghostCheck(pacmanPosition)
      } 
      break
    case 38:
      if (wallCheck(pacmanPosition - 20)) {
        pacmanPosition -= width
        scoreCheck(pacmanPosition)
        superFoodCheck(pacmanPosition)
        ghostCheck(pacmanPosition)
      }
      break 
    case 40:
      if (wallCheck(pacmanPosition + 20)){
        pacmanPosition += width
        scoreCheck(pacmanPosition)
        superFoodCheck(pacmanPosition)
        ghostCheck(pacmanPosition)
      }
      break
  }
  addPacman()
}

function wallCheck(position) { 
  return !cells[position].classList.contains(wallClass)
}

function scoreCheck(position) {
  if (totalGameScore > 2170){
    youWin()   
  }
  if (cells[position].classList.contains(foodPointClass)){
    cells[pacmanPosition].classList.remove(foodPointClass)
    totalGameScore = totalGameScore + 10 
  } else if (!cells[position].classList.contains(foodPointClass) ||
            !cells[position].classList.contains(superFoodPointClass)){
    return
  }
}


function superFoodCheck(position){
  if (cells[position].classList.contains(superFoodPointClass)){
    cells[pacmanPosition].classList.remove(superFoodPointClass)
    totalGameScore = totalGameScore + 50
  } 
}

let lives = 3
livesDisplay.innerHTML = lives

function ghostCheck(position){
  if (cells[position].classList.contains(redGhostClass) || 
  cells[position].classList.contains(blueGhostClass) || 
  cells[position].classList.contains(orangeGhostClass) ||
  cells[position].classList.contains(pinkGhostClass) 
  ){
    lives = lives - 1
    livesDisplay.innerHTML = lives
  } 
  if (lives === 0){
    gameOver()
  }
}

// * red ghost

function addRedGhost(){
  cells[redGhostPosition].classList.add(redGhostClass)
}

function removeRedGhost(){
  cells[redGhostPosition].classList.remove(redGhostClass)
}

function redGhostMove(){
  setTimeout(() => {
    let ghostPath = ghostMoves[Math.floor(Math.random() * ghostMoves.length)]
    removeRedGhost()
    setInterval(() => {
      redPathCheck(ghostPath)
      if (isPathClear === false){
        ghostPath = ghostMoves[Math.floor(Math.random() * ghostMoves.length)]
        redPathCheck(ghostPath)
      }
      if (isPathClear === true && ghostPath === 1){
        removeRedGhost()
        redGhostPosition += 1
        addRedGhost()
      } else if (isPathClear === true && ghostPath === -1){
        removeRedGhost()
        redGhostPosition -= 1
        addRedGhost()
      } else if (isPathClear === true && ghostPath === - width){
        removeRedGhost()
        redGhostPosition -= width
        addRedGhost()
      } else if (isPathClear === true && ghostPath === + width){
        removeRedGhost()
        redGhostPosition += width
        addRedGhost()
      } 
    } , 100)
    addRedGhost()
  }, 150)
}

function redPathCheck(ghostPath){
  if (cells[redGhostPosition + ghostPath].classList.contains(wallClass)){
    isPathClear = false
  } else {
    isPathClear = true
  }
}

// * blue ghost

function addBlueGhost(){
  cells[blueGhostPosition].classList.add(blueGhostClass)
}

function removeBlueGhost(){
  cells[blueGhostPosition].classList.remove(blueGhostClass)
}

function blueGhostMove(){
  setTimeout(() => {
    let ghostPath = ghostMoves[Math.floor(Math.random() * ghostMoves.length)]
    removeBlueGhost()
    setInterval(() => {
      bluePathCheck(ghostPath)
      if (isPathClear === false){
        ghostPath = ghostMoves[Math.floor(Math.random() * ghostMoves.length)]
        bluePathCheck(ghostPath)
      }
      if (isPathClear === true && ghostPath === 1){
        removeBlueGhost()
        blueGhostPosition += 1
        addBlueGhost()
      } else if (isPathClear === true && ghostPath === -1){
        removeBlueGhost()
        blueGhostPosition -= 1
        addBlueGhost()
      } else if (isPathClear === true && ghostPath === - width){
        removeBlueGhost()
        blueGhostPosition -= width
        addBlueGhost()
      } else if (isPathClear === true && ghostPath === + width){
        removeBlueGhost()
        blueGhostPosition += width
        addBlueGhost()
      } 
    } , 150)
    addBlueGhost()
  }, 600)
}

function bluePathCheck(ghostPath){
  if (cells[blueGhostPosition + ghostPath].classList.contains(wallClass)){
    isPathClear = false
  } else {
    isPathClear = true
  }
}

// * orange ghost

function addOrangeGhost(){
  cells[orangeGhostPosition].classList.add(orangeGhostClass)
}

function removeOrangeGhost(){
  cells[orangeGhostPosition].classList.remove(orangeGhostClass)
}

function orangeGhostMove(){
  setTimeout(() => {
    let ghostPath = ghostMoves[Math.floor(Math.random() * ghostMoves.length)]
    removeOrangeGhost()
    setInterval(() => {
      orangePathCheck(ghostPath)
      if (isPathClear === false){
        ghostPath = ghostMoves[Math.floor(Math.random() * ghostMoves.length)]
        orangePathCheck(ghostPath)
      }
      if (isPathClear === true && ghostPath === 1){
        removeOrangeGhost()
        orangeGhostPosition += 1
        addOrangeGhost()
      } else if (isPathClear === true && ghostPath === -1){
        removeOrangeGhost()
        orangeGhostPosition -= 1
        addOrangeGhost()
      } else if (isPathClear === true && ghostPath === - width){
        removeOrangeGhost()
        orangeGhostPosition -= width
        addOrangeGhost()
      } else if (isPathClear === true && ghostPath === + width){
        removeOrangeGhost()
        orangeGhostPosition += width
        addOrangeGhost()
      } 
    } , 300)
    addOrangeGhost()
  }, 900)
}

function orangePathCheck(ghostPath){
  if (cells[orangeGhostPosition + ghostPath].classList.contains(wallClass)){
    isPathClear = false
  } else {
    isPathClear = true
  }
}

// * pink ghost 

function addPinkGhost(){
  cells[pinkGhostPosition].classList.add(pinkGhostClass)
}

function removePinkGhost(){
  cells[pinkGhostPosition].classList.remove(pinkGhostClass)
}


function pinkGhostMove(){
  setTimeout(() => {
    let ghostPath = ghostMoves[Math.floor(Math.random() * ghostMoves.length)]
    removePinkGhost()
    setInterval(() => {
      pinkPathCheck(ghostPath)
      if (isPathClear === false){
        ghostPath = ghostMoves[Math.floor(Math.random() * ghostMoves.length)]
        pinkPathCheck(ghostPath)
      }
      if (isPathClear === true && ghostPath === 1){
        removePinkGhost()
        pinkGhostPosition += 1
        addPinkGhost()
      } else if (isPathClear === true && ghostPath === -1){
        removePinkGhost()
        pinkGhostPosition -= 1
        addPinkGhost()
      } else if (isPathClear === true && ghostPath === - width){
        removePinkGhost()
        pinkGhostPosition -= width
        addPinkGhost()
      } else if (isPathClear === true && ghostPath === + width){
        removePinkGhost()
        pinkGhostPosition += width
        addPinkGhost()
      } 
    } , 200)
    addPinkGhost()
  }, 750)
}

function pinkPathCheck(ghostPath){
  if (cells[pinkGhostPosition + ghostPath].classList.contains(wallClass)){
    isPathClear = false
  } else {
    isPathClear = true
  }
}

// * Events
window.addEventListener('keydown', handleKeyDown)
window.addEventListener('keydown',handleStart)
window.addEventListener('click', playAgain)
