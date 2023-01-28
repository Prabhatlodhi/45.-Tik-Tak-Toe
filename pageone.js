
const teamBakgrndCOlor = document.querySelector('.teamBg')
const teamBakgrndCOlorTwo = document.querySelector('.teamBg2')

let firstPlayerName = localStorage.getItem('playerOneName')
let secondPlayerName = localStorage.getItem('playerTwoName')

const NameOfPlayerOne = document.querySelector('#OnePlayer')
NameOfPlayerOne.innerText = firstPlayerName;

const NameOfPlayerTwo = document.querySelector('#TwoPlayer')
NameOfPlayerTwo.innerText = secondPlayerName;



function startGame()
{
    

    winner_name.style.display = 'none';
    for (var i = 1; i<= 9; i = i + 1)
    {
        clearBox(i);
    }

    document.turn = "X";
    setMessage( `Team-X gets to start.`);
   
    if (Math.random()< 0.5)
    {
        document.turn = "O";
        setMessage( `Team-O  gets to start.`);
    }

    document.winner = null;

    document.getElementById("s1").style.color = "#3FC80E ";
    document.getElementById("s2").style.color = "#3FC80E ";
    document.getElementById("s3").style.color = "#3FC80E ";
    document.getElementById("s4").style.color = "#3FC80E ";
    document.getElementById("s5").style.color = "#3FC80E ";
    document.getElementById("s6").style.color = "#3FC80E ";
    document.getElementById("s7").style.color = "#3FC80E ";
    document.getElementById("s8").style.color = "#3FC80E ";
    document.getElementById("s9").style.color = "#3FC80E ";
}

function setMessage(msg)
{
    document.getElementById("message").textContent = msg;
}

function nextMove(square)
{
    if (document.winner != null)
    {
        setMessage(document.winner + " Already Won the Game!" );
    }
    else if (square.textContent == "")
    {
        square.textContent = document.turn;
        switchTurn();
    }
    else
    {
        setMessage("That Square is Already Used.")
    }
}

const winner_name = document.querySelector('.display_box')
const pOneScore = document.querySelector('.playerOneScore')
const pTwoScore = document.querySelector('.playerTwoScore');

pOneScore.innerText = 0
pTwoScore.innerText = 0


let count = 0;
let num = 0;


const winElement = document.querySelector('.imageCont')

function switchTurn()
{
    if(checkForWinner(document.turn))
    {
       if(document.turn =='X'){
           pOneScore.innerText = count = count +1;
        //    console.log(count)
    }else{
        pTwoScore.innerText = num = num + 1;
        // console.log(num)
       }

       if(document.turn=='X'){


        winElement.classList.remove('hideThis');
        //read the value
        // store in local stro
        //fetch it
        //display kar

        let updatedName = NameOfPlayerOne.innerText;
        localStorage.setItem('newName', updatedName);
        let gygy = localStorage.getItem('newName');

        winnerNameHere.innerHTML = `<h1 class="headingHere">Congratulations  ${gygy} ! You Win!</h1>`
        // window.location.href = "winnerpage.html"

        // winner_name.innerHTML = `<h1>Congratulations  ${firstPlayerName} ! You Win!</h1>`
       }else{

        let updatedName2 = NameOfPlayerTwo.innerText;
        localStorage.setItem('newName2', updatedName2);
        let huhu = localStorage.getItem('newName2');


        winElement.classList.remove('hideThis');
        winnerNameHere.innerHTML = `<h1 class="headingHere">Congratulations  ${huhu} ! You Win!</h1>`
        // window.location.href = "winnerpage.html"
        // winner_name.innerHTML = `<h1>Congratulations  ${secondPlayerName} ! You Win!</h1>`
       }
       
        document.winner = document.turn;
        // winner_name.style.display = 'block';
        
        
         

    }
    else
    if(CheckforTie())
    {
        setMessage("Its a TIE..!! Play again...!!!");
    }
    else if (document.turn == "X")
    {
        NameOfPlayerOne.setAttribute('contenteditable', false)
        NameOfPlayerTwo.setAttribute('contenteditable', false);

        

        document.turn ="O";
        setMessage(`It's Team-O's turn!`);
        teamBakgrndCOlorTwo.style.backgroundColor = '#B8B8B8';
        teamBakgrndCOlor.style.backgroundColor = 'white';
    }
    else
    {
        NameOfPlayerOne.setAttribute('contenteditable', false)
        NameOfPlayerTwo.setAttribute('contenteditable', false);


        document.turn ="X";
        setMessage(`It's Team-X's turn!`);
        teamBakgrndCOlor.style.backgroundColor = '#B8B8B8';
        teamBakgrndCOlorTwo.style.backgroundColor = 'white';
    }
}

function checkForWinner(move)
{
    var result = false;
    if(checkRow(1,2,3, move) || checkRow(4,5,6, move) || checkRow(7,8,9, move) ||checkRow(1,4,7, move) ||checkRow(2,5,8, move) ||checkRow(3,6,9, move) ||checkRow(1,5,9, move) ||checkRow(3,5,7, move))
       {
        result = true;
       }
        return result;

}

function checkRow(a,b,c, move)
{
    var result = false;
    if (getBox(a)== move && getBox(b)== move && getBox(c)== move)
    {
    	result = true;
    }
    	return result;
}

function getBox(number)
{
  return document.getElementById("s" + number).textContent;
}

function clearBox(number)
{
    document.getElementById("s" + number).textContent = "";
}

function CheckforTie()
{
    for(var i=1;i<10;i++)
	{

  		if(getBox(i)=="")
   		return false;
	}
return true;
} 


const freshGame = document.querySelector('.but');

freshGame.addEventListener('click', newGameStart);

function newGameStart(){
    NameOfPlayerOne.setAttribute('contenteditable', true);
    NameOfPlayerTwo.setAttribute('contenteditable', true);


    teamBakgrndCOlor.style.backgroundColor = 'white';
    teamBakgrndCOlorTwo.style.backgroundColor = 'white';
}

const rediredtMainPage = document.querySelector('.mainPageBtn');

rediredtMainPage.addEventListener('click', toMainpage);

function toMainpage(){
    window.location.href = "index.html"
}


















const startNewGameBtn = document.querySelector('#startnew');
const winnerNameHere = document.querySelector('#wrap')

// const NameOfPlayerTwo = document.querySelector('#TwoPlayer')
// NameOfPlayerTwo.innerText = localStorage.getItem('playerTwoName')

// let firstPlayerName = localStorage.getItem('playerOneName')
// let secondPlayerName = localStorage.getItem('playerTwoName')

// window.addEventListener("load", (event) => {
//         winnerNameHere.innerHTML = `<h1 class="headingHere">Congratulations  ${firstPlayerName} ! You Win!</h1>`
//         // winner_name.innerHTML = `<h1>Congratulations  ${firstPlayerName} ! You Win!</h1>`
//   });

//   window.addEventListener("load", (event) => {
//     winnerNameHere.innerHTML = `<h1 class="headingHere">Congratulations  ${secondPlayerName} ! You Win!</h1>`
//     // winner_name.innerHTML = `<h1>Congratulations  ${secondPlayerName} ! You Win!</h1>`
// });







startNewGameBtn.addEventListener('click', pageTwo)

function pageTwo(){
    // window.location.href = "page.html"
    winElement.classList.add('hideThis');
}