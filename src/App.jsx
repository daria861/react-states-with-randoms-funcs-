import { useState } from 'react';
import './App.css'
// import { Button } from './Button';

function App() {

 const [numbers, setNumbers]  = useState([1,2,3,4,5]);
 const [state, setState] = useState(Math.floor(Math.random()*100))
 const [color, setColor] = useState()

 const getRandomColor = () =>{
  const letters = Math.floor(Math.random()*16777215).toString(16);
  let randomColor = '#';
  randomColor += letters;
  console.log(randomColor);
  return randomColor;
 }

 const pushRandomNumber = () =>{
  const randomNumber = Math.floor(Math.random()*1000)
  setNumbers([...numbers, randomNumber])
 }

  return (
    <>
      <ul>
        {numbers.map((num, idx) => <li key ={idx}>{num}</li>)}
      </ul>
      <button onClick={pushRandomNumber}>Click</button>

      <h3>{state}</h3>
      <button onClick={() => setState(Math.floor(Math.random()*100))}>Get Random Number</button>

      <p style={{color: color}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fugiat sequi nobis, excepturi sunt suscipit libero impedit doloribus officia, deleniti ratione eveniet est nihil sed quod ipsa odio ab tempora?</p>
      <button onClick={() => setColor(getRandomColor())}>Change Color</button>
    </>
  )
}

export default App
