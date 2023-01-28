const teamBakgrndCOlor = document.querySelector('.teamBg')
const teamBakgrndCOlorTwo = document.querySelector('.teamBg2')


const NameOfPlayerOne = document.querySelector('#OnePlayer')
NameOfPlayerOne.innerText = localStorage.getItem('playerOneName')

const NameOfPlayerTwo = document.querySelector('#TwoPlayer')
NameOfPlayerTwo.innerText = localStorage.getItem('playerTwoName')

let firstPlayerName = localStorage.getItem('playerOneName')
let secondPlayerName = localStorage.getItem('playerTwoName')


function startGame()
{
    winner_name.style.display = 'none';
    for (var i = 1; i<= 9; i = i + 1)
    {
        clearBox(i);
    }

    document.turn = "X";
    setMessage( `${firstPlayerName}  gets to start.`);
   
    if (Math.random()< 0.5)
    {
        document.turn = "O";
        setMessage( `${secondPlayerName}  gets to start.`);
        
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

        winner_name.innerHTML = `
        <h1>Congratulations  ${firstPlayerName} ! You Win!</h1>`
       }else{
        winner_name.innerHTML = `
        <h1>Congratulations  ${secondPlayerName} ! You Win!</h1>`
       }
       
        document.winner = document.turn;
        winner_name.style.display = 'block';
        
        
         

    }
    else
    if(CheckforTie())
    {
        setMessage("Its a TIE..!! Play again...!!!");
    }
    else if (document.turn == "X")
    {
        document.turn ="O";

        setMessage(`It's   ${secondPlayerName} 's turn!`);
        teamBakgrndCOlorTwo.style.backgroundColor = '#B8B8B8';
        teamBakgrndCOlor.style.backgroundColor = 'white';
    }
    else
    {
        document.turn ="X";
        setMessage(`It's ${firstPlayerName} 's turn!`);
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
    teamBakgrndCOlor.style.backgroundColor = 'white';
    teamBakgrndCOlorTwo.style.backgroundColor = 'white';
}