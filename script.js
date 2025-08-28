let humanScore = 0;
let computerScore = 0;

function getComputerChoice(number)
{
    {
        if (number === -1) 
        {
           return "rock";
        }
        else if (number === 0)
        {
            return "paper";
        }
        else
        {
            return "scissor";
        }
    }
}

function getHumanChoice(input)
{
    input = input.toLowerCase();

    if (input === "rock")
    {
        return "rock";
    }
    else if (input === "paper")
    {
        return "paper";
    }
    else
    {
        return "scissor";
    }
}

function playGame(){

    function playRound(HumanChoice, ComputerChoice)
{
    if (HumanChoice === ComputerChoice)
    {
        return "Draw";
    }
    else if (
    (HumanChoice === "rock" && ComputerChoice === "scissor") ||
    (HumanChoice === "paper" && ComputerChoice === "rock") ||
    (HumanChoice === "scissor" && ComputerChoice === "paper")
    )
    {
        humanScore++;
        return "Human Win";
    }
    else
    {
        computerScore++;
        return "Computer Win";
    }
}

    for (let i=0;i<5;i++)
    {
        let number = Math.floor(Math.random() * 3) - 1;
        let input = prompt("Choose Rock, Paper, Scissor");

        const HumanChoice = getHumanChoice(input);
        const ComputerChoice = getComputerChoice(number);

        const result = playRound(HumanChoice, ComputerChoice);

        console.log(`Round ${i + 1}: You=${HumanChoice}, Computer=${ComputerChoice} → ${result}`);
        console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
    }

    const final =
        humanScore === computerScore ? "Overall: Draw"
        : humanScore > computerScore ? "Overall: You win!"
        : "Overall: Computer wins!";
    console.log(final);
}

playGame();