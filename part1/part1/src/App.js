import { useState } from "react"

// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       Button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = ({ handleClick, text}) => {
//   return (
//     <button onClick={handleClick}>{text}</button>
//   )
// }

const App = () => {
  // const [ left, setLeft ] = useState(0);
  // const [ right, setRight ] = useState(0);
  // const [ allClicks, setAll ] = useState([])
  const [ value, setValue ] = useState(0);
  
  // const leftClicks = () => {
  //   setAll(allClicks.concat('L'))
  //   const updatedLeft = left + 1
  //   setLeft(updatedLeft)
  // }

  // const rightClicks = () => {
  //   setAll(allClicks.concat('R'))
  //   const updatedRight = right + 1
  //   setRight(updatedRight)
  // }
  const setToValue = (value) => {
    console.log(value)
    setValue(value)
  }

  return (
    <div>
      {/* {left}
      <Button handleClick={leftClicks} text="left" />
      <Button handleClick={rightClicks} text="right" />
      {right}
      <History allClicks={allClicks} /> */}
      <button onClick={() => setToValue(value + 1000)}>increase</button>
      <button onClick={() => setToValue(0)}>zero</button>
      <button onClick={() => setToValue(value - 1000)}>decrease</button>
    </div>
  )
}



export default App;