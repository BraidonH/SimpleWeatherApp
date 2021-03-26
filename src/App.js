
import './App.css';
import Inputs from './inputOptions/inputs'
import  {useEffect} from 'react'

function App() {

  useEffect(() => {
    const d = new Date();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const display = `${month}/${day}`
    const ele = document.getElementById("displayDate")
    ele.innerHTML = display
  }, []);
  
  

  return (
    <div className="App">
      <h1 id="displayDate">Display Date</h1>
      <header id="header">
        <h1>WEATHER APP</h1>
      </header> 

      <div id="inputs">
        <Inputs />
      </div>
    </div>

  );
}

export default App;
