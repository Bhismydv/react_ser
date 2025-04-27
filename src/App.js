import InputF from "./InputF";
import Square from "./Square";
import { useState } from "react";
function App() {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue]=useState('')
  const [isDarkText, setDarkText] = useState(true)

  return (
    <div className="App">
   <Square colorValue={colorValue}
   hexValue={hexValue}
   isDarkText={isDarkText}/>
   <InputF colorValue={colorValue}
   setColorValue={setColorValue}
   setHexValue={setHexValue}
   isDarkText={isDarkText}
   setDarkText={setDarkText}/>
    </div>
  );
}

export default App;
