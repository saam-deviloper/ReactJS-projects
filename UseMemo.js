import React, { useMemo, useState } from "react";

export default function UseMemo() {
  const [number,setNumber] = useState({
      a:0,
      b:0
  });
    const slowFunc = useMemo(() => {
    let x = 0,
      y = 0;
    while (x < 100000000) {
      while (y < 100000000) {
        y++;
      }
      x++;
    }
    return x + y;
  },[number.b]);

  return <div style={{padding:'3%'}}><h3>UseMemo(increase functionality with hook)</h3>
  <p>we call a function(slowFunc) that creates a heavy calculation and with useMemo hook we want set condition that cache the function result afterwards whenever we change specific state ,func rerender</p>
  <p>changing state y makes useMemo rerender comp and slowFunc</p>
  <h3>state x: {number.a}</h3>
  <h3 style={{color:'red'}}>state y: {number.b}</h3>

  <h2>{}</h2>
  <button onClick={()=>setNumber({...number,a:number.a+1})}>change state x</button>
  <button onClick={()=>setNumber({...number,b:number.b+1})}>change state y</button>

  </div>;
}
