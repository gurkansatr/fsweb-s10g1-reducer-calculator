import React, { useReducer } from 'react';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState } from './reducers';
import { applyNumber, clearDisplay,addMemory,changeOperation,applyRecalMemory,clearMemory } from './actions';


function App() {

  const [state,dispatch]= useReducer(reducer,initialState);
  const handleNumberClick=(number)=>{
    dispatch(applyNumber(number))
  }
  const handleOperationChange=(operator)=>{
    dispatch(changeOperation(operator))
  }  
  const handleClearDisplay=()=>{
    dispatch(clearDisplay())
  } 
  const handleAddMemory=()=>{
    dispatch(addMemory())
  } 
  const handleApplyRecallMemory=()=>{
    dispatch(applyRecalMemory())
  } 
  const handleClearMemory=()=>{
    dispatch(clearMemory())
  } 

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation} </span>
              <span id="memory"><b>Memory:</b> {state.memory} </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={handleAddMemory} />
              <CalcButton value={"MR"} onClick={handleApplyRecallMemory} />
              <CalcButton value={"MC"} onClick={handleClearMemory} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={()=>handleNumberClick(1)} />
              <CalcButton value={2} onClick={()=>handleNumberClick(2)} />
              <CalcButton value={3} onClick={()=>handleNumberClick(3)} />
            </div>
 
            <div className="row">
              <CalcButton value={4} onClick={()=>handleNumberClick(4)} />
              <CalcButton value={5} onClick={()=>handleNumberClick(5)} />
              <CalcButton value={6} onClick={()=>handleNumberClick(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={()=>handleNumberClick(7)} />
              <CalcButton value={8} onClick={()=>handleNumberClick(8)} />
              <CalcButton value={9} onClick={()=>handleNumberClick(9)} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={()=>handleOperationChange("+")} />
              <CalcButton value={"*"} onClick={()=>handleOperationChange("*")} />
              <CalcButton value={"-"} onClick={()=>handleOperationChange("-")} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={()=>handleClearDisplay()} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
