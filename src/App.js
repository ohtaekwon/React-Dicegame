import Board from './Board';
import Button from './Button.js';
import {useState} from 'react';

import Logo from './assets/logo.png'
//CSS
import './css/App.css';


// 랜덤 함수
function random(n){
  return Math.ceil(Math.random()*n)
}

function App(){
  // const [num, setNum] = useState(1)
  // const [sum, setSum] = useState(0)
  // const [gameHistory, setGameHistory] = useState([])
  const [myHistory, setMyHistory]=useState([])

  // const [otherNum, setOtherNum] = useState(1)
  // const [otherSum, setOtherSum] = useState(0)
  // const [otherGameHistory, setOtherGameHistory] = useState([])
  const [otherHistory, setOtherHistory]=useState([])

  const handleRollClick = ()=>{
    const nextMyNum = random(6)
    const nextOtherNum = random(6)
    // 나 state
    // setNum(nextMyNum)
    // setSum(sum + nextMyNum)
    // setGameHistory([...gameHistory,nextMyNum])
    setMyHistory([...myHistory, nextMyNum])
    
    // 상대 state
    // setOtherNum(nextOtherNum)
    // setOtherSum(otherSum + nextOtherNum)
    setOtherHistory([...otherHistory,nextOtherNum])

  }


  // 처음부터 버튼 기능
  const handleClearClick = ()=>{
    // 나 초기화
    // setNum(1)
    // setSum(0)
    setMyHistory([])
    
    // 상대 초기화
    // setOtherNum(1)
    // setOtherSum(0)
    setOtherHistory([])
  }

  return (
    <div className='App'>
      <div>
        <img className='App-logo' src={Logo} alt="로고" />
        <h1 className='App-title'>주사위게임</h1>
        <div>
          <Button className="App-button" color="blue" onClick={handleRollClick}>던지기</Button>
          <Button className="App-button" color="red" onClick={handleClearClick}>처음부터</Button>
        </div>
        <div>
          <Board className="App-boards" name="나" color="blue" gameHistory={myHistory}/>
          <Board className="App-boards" name="상대" color="red" gameHistory={otherHistory}/>
        </div>
     </div>
  </div>
  )
}

export default App;