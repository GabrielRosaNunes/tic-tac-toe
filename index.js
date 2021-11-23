let isCircle = false;
let game = Array(9).fill(NaN);
let endGame = false

document.addEventListener('click', (event) => {
    if (event.target.innerHTML != '' || endGame) {
        return;
    }
    let sequencial = event.target.getAttribute('square');
    event.target.innerHTML = '<div class="response">' + (isCircle ? "O" : "X") + '</div>';
    game[parseInt(sequencial)] = isCircle ? "O" : "X";
    console.log(isCircle ? "O" : "X")
    console.log(isWinner())
    if (isWinner()) {
        endGame = true;
        declareWinner();
    }
    isCircle = !isCircle;
})

declareWinner = () => {
    document.querySelector('#winner').innerHTML = 'The winner is: '+isWinner()
}

resetGame = () => {
    console.log('teste');
    document.querySelector('#winner').innerHTML = ''
    game = Array(9).fill(NaN);
    document.querySelectorAll('.square').forEach((element) => {
        element.innerHTML = '';
    })
    endGame = false;
}

isWinner = () => {
    const winningGames = [
        [0,1,2],
        [0,4,8],
        [0,3,6],
        [1,4,7],
        [2,4,6],
        [2,5,8],
        [3,4,5],
        [6,7,8]
    ];

    for (winningGame of winningGames) {
        let newGame = Object.assign(game, new Array);
        let arrayValuesWinning = [newGame[winningGame[0]],newGame[winningGame[1]],newGame[winningGame[2]]]
        console.log(arrayValuesWinning);
        if (arrayValuesWinning.every(values => values == 'O')) {
            return 'O';
        } else if (arrayValuesWinning.every(values => values == 'X'))  {
            return 'X';
        }
    }
    return '';
}