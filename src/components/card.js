import React from 'react'
import { useSelector } from "react-redux";

export default function Card() {
  const deviceGetInfo = useSelector((state) => state.deviceGetInfo);
  const { temperatureSeted } = deviceGetInfo;
  return (
    <div className='Box'>
        <h1>Card</h1>
        <div>
            <div>
                <h2>Temperatura atual</h2>
            </div>
        {typeof temperatureSeted=='number'?(temperatureSeted+' \u00b0'+'C'):'Sem Leitura'}
        </div>
    </div>
  )
}
