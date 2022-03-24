import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {getDeviceInfo} from './actions/deviceActions'
import './App.css';
import Card from './components/card'

function App() {
  const deviceGetInfo = useSelector((state) => state.deviceGetInfo);
  const { temperatureSeted } = deviceGetInfo;
  
  const [Temperature, setTemperature] = useState(0);

  const dispatch = useDispatch()

  const handleSetTemperature = (e) =>{
    dispatch(getDeviceInfo(e))
    setTemperature(0)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Card/>
        <input onChange={(e)=>setTemperature(e.target.value)} value={Temperature}  type='Number'>
        </input>
        <button onClick={()=>handleSetTemperature(Number(Temperature))}>
          Confirmar
        </button>

      </header>
    </div>
  );
}

export default App;
