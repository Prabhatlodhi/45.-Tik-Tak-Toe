const FirstName = document.querySelector('#nameone');
const NameTwo = document.querySelector('.nametwo');
const startGame = document.querySelector('.startgameBtn')


startGame.addEventListener('click', nextPage)

function nextPage (e) {
    e.preventDefault();
    let nOne = FirstName.value;
    let nTwo = NameTwo.value;
    if( nOne == "" ){
        console.log('555')
        // console.log(nOne)
        alert("Please Enter Player One Name")
    } else if( nTwo == "" ){
        console.log('444')
        alert( "Please Enter Player Two Name")
    }else{
        

        localStorage.setItem('playerOneName', nOne )
        localStorage.setItem('playerTwoName', nTwo )
        window.location.href = "page.html"
    }
}