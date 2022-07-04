import './App.css';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import Sdata from './Data';

function App() {
  const [sdata,setData]=useState([]);
    useEffect(()=>{
      
      setData(Sdata);
    })
    return (<>
    {sdata.map((val)=>{
      return <Card 
      title={val.title}
      intro={val.intro}
      sname={val.sname}
      imgsrc={val.imgsrc}/>;
    })}
    </>
  )
}
export default App;
