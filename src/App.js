import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {getDeviceInfo} from './actions/deviceActions'
import './App.css';

function App() {
  const deviceGetInfo = useSelector((state) => state.deviceGetInfo);
  const { temperatureSeted } = deviceGetInfo;
  
  const [Temperature, setTemperature] = useState('');

  const dispatch = useDispatch()

  const handleSetTemperature = (e) =>{
    dispatch(getDeviceInfo(e))
    setTemperature(0)
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Temperatura atual:
        </p>
        <p>
          {typeof temperatureSeted=='number'?(temperatureSeted+' \u00b0'+'C'):'Sem Leitura'}
        </p>
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
