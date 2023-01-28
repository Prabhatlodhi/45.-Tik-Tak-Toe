const FirstName = document.querySelector('#nameone');
const NameTwo = document.querySelector('.nametwo');
const startGame = document.querySelector('.startgameBtn')


startGame.addEventListener('click', nextPage)

function nextPage (e) {
    e.preventDefault();
    let nOne = FirstName.value;
    let nTwo = NameTwo.value;
    if( nOne == "" && nTwo == "" ){
        // console.log('555')
        // console.log(nOne)
        // alert("Please Enter Player One Name")
        nOne = 'Player 1'
        nTwo = 'Player 2'
    } else if( nOne == "" || nOne == " "){
        // console.log('444')
        // alert( "Please Enter Player Two Name")
        nOne = 'Player 1'
    }else if( nTwo == "" || nTwo == " ")  {
        nTwo = 'Player 2'
    }
    localStorage.setItem('playerOneName', nOne )
    localStorage.setItem('playerTwoName', nTwo )
    window.location.href = "page.html"
}