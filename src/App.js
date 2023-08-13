import './App.css';
import {useState} from 'react';
function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState('');
  const [isOperationClicked, setIsOperationClicked] = useState(false);

  function numberClicked(number){
    if(!isOperationClicked) {
      setNumber1(number1*10+number)
      console.log(number1);
    }
    if(isOperationClicked) {
      setNumber2(number2*10+number)
      console.log(number2);
    } 


  }

function operationClicked(operation){
  setOperation(operation);
  setIsOperationClicked(true);
}

function submitOperation(){

  if(operation==='+'){
    setResult(number1+number2);
  }
  if(operation==='-'){
    setResult(number1-number2);
  }
  if(operation==='*'){
    setResult(number1*number2);
  }
  if(operation==='/'){
    setResult(number1/number2);
  }

}
function clearOutput() {
  setNumber1(0)
  setNumber2(0)
  setResult(0)
  setOperation(0)
  setIsOperationClicked(false)
}


  return (
    <div className="App">
      <div className='Wrapper'>
        number1 :{number1}<br/>
        number2 :{number2}<br/>
        operation :{operation}<br/>
        result: {result} <br/>
          <div className='number-section'>
            <button onClick={e=>numberClicked(1)}>
              1
            </button>
            <button onClick={e=>numberClicked(2)}>
              2
            </button>
            <button onClick={e=>numberClicked(3)}>
              3
            </button>
          </div>
          <div>
            <button onClick={e=>numberClicked(4)}>
              4
            </button>
            <button onClick={e=>numberClicked(5)}>
              5
            </button>
            <button onClick={e=>numberClicked(6)}>
              6
            </button>
          </div>
          <div>
            <button onClick={e=>numberClicked(7)}>
              7
            </button>
            <button onClick={e=>numberClicked(8)}>
              8
            </button>
            <button onClick={e=>numberClicked(9)}>
              9
            </button>
          </div>
          <div>
            <button onClick={e=>operationClicked('+')}>
              +
            </button>
            <button onClick={e=>operationClicked('-')}>
              -
            </button>
            <button onClick={e=>operationClicked('/')}>
              /
            </button>
            <button onClick={e=>operationClicked('*')}>
              *
            </button>
            <button onClick={submitOperation}>
              =
            </button>
            {isOperationClicked && <button onClick={clearOutput} >
              C
            </button>}
          </div>
      </div>
    </div>
  );
}

export default App;
