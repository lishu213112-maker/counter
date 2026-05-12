// new code

let cells = document.querySelectorAll(".cell")

let statusText = document.querySelector("#status")

let restartBtn = document.querySelector("#button")

let currentPlayer = "X"

let gameRunning = true


let winPatterns = [

    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]

]



cells.forEach(function(cell){

    cell.addEventListener("click", cellClicked)

})



function cellClicked(){


    if(this.textContent != "" || !gameRunning){

        return

    }


    this.textContent = currentPlayer



    if(currentPlayer == "X"){

        this.style.color="light"

    }

    else{

        this.style.color = "hotpink"

    }



    checkWinner()

}



function checkWinner(){

    let roundWon = false



    for(let i = 0; i < winPatterns.length; i++){


        let pattern = winPatterns[i]


        let cell1 = cells[pattern[0]].textContent
        let cell2 = cells[pattern[1]].textContent
        let cell3 = cells[pattern[2]].textContent



        if(cell1 == "" || cell2 == "" || cell3 == ""){

            continue

        }



        if(cell1 == cell2 && cell2 == cell3){


            cells[pattern[0]].style.backgroundColor = "lime"

            cells[pattern[1]].style.backgroundColor = "lime"

            cells[pattern[2]].style.backgroundColor = "lime"


            roundWon = true

            break

        }

    }



    if(roundWon){

        statusText.textContent = `Player ${currentPlayer} Wins`

        statusText.style.color = "lime"

        gameRunning = false

        return

    }



    let filled = true



    cells.forEach(function(cell){

        if(cell.textContent == ""){

            filled = false

        }

    })



    if(filled){

        statusText.textContent = "Match Draw"

        statusText.style.color = "orange"

        gameRunning = false

        return

    }



    changePlayer()

}



function changePlayer(){


    if(currentPlayer == "X"){

        currentPlayer = "O"

    }

    else{

        currentPlayer = "X"

    }



    statusText.textContent = `Player ${currentPlayer} Turn`

}



button.addEventListener("click", restartGame)



function restartGame(){


    cells.forEach(function(cell){


        cell.textContent = ""

        cell.style.backgroundColor = ""

    })



    currentPlayer = "X"

    gameRunning = true


    statusText.textContent = "Player X Turn"

    statusText.style.color = "white"

}