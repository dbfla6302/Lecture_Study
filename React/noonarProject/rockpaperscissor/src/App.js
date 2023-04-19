import { useState } from 'react';
import './App.css';
import Box from './component/Box';

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
// 5. 3 4의 결과를 가지고 누가 이겼는지 승패를 따진다
// 6. 승패 결과에 따라 테두리 색이 바뀐다 (이기면-초록, 지면-빨강, 비기면-검은색)

const choice = {
  rock:{
    name:"Rock",
    img:"https://media.istockphoto.com/id/1288973456/photo/stone-pebble-gray.jpg?b=1&s=170667a&w=0&k=20&c=12wq2EPR1rJ0Mw2UvWsYdwqmX6viLeDnxOcJDgIhKgE="
  },
  scissors:{
    name:"Scissors",
    img:"https://www.ikea.com/us/en/images/products/sy-scissors__0112301_pe263788_s5.jpg"
  },
  paper:{
    name:"Paper",
    img:"https://www.collinsdictionary.com/images/full/paper_111691001.jpg"
  }
}
function App() {
  const [userSeclect, setUserSeclect] = useState(null);
  const [computerSeclect, setComputerSeclect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSeclect(choice[userChoice]);
    let computerChoice = radomChoice();
    setComputerSeclect(computerChoice);
    setResult(judgement(choice[userChoice],computerChoice));
  }

  const judgement = (user,computer) => {

    // user ==  computer / tie
    // user == "rock", computer == "scissors" / user win
    // user == "rock", computer == "paper" / user lose
    // user == "scissors", computer == "paper" / user win
    // user == "scissors", computer == "rock" / user lose
    // user == "paper", computer == "rock" / user win
    // user == "paper", computer == "scissors" / user lose

    if(user.name == computer.name){
        return "TIE"
    }else if(user.name == "Rock")return computer.name == "Scissors" ? "WIN" : "LOSE"
    else if(user.name == "Scissors")return computer.name == "Paper" ? "WIN" : "LOSE"
    else if(user.name == "Paper")return computer.name == "Rock" ? "WIN" : "LOSE"
  }

  const radomChoice = () => {
    let itemArray = Object.keys(choice); //객체에 키값만 배열로 만들어주는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }

  return (
    <div>
        <div className="main">
            <Box title="You" item={userSeclect} result={result} />
            <Box title="Computer" item={computerSeclect} result={result} />
        </div>
        <div className="main">
            <button onClick={() => play("scissors")}>가위</button>
            <button onClick={() => play("rock")}>바위</button>
            <button onClick={() => play("paper")}>보</button>
        </div>
    </div>
  );
}

export default App;
