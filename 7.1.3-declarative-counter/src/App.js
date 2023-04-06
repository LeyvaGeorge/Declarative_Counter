import './App.css';
import React, {useState} from 'react';

function App() {
  let [ counterNum, setCounterNum ] = useState(10000)
  window.setCounterNum = setCounterNum
  return (
    <div className="App">
      <header className="App-header">
       <p>
          {counterNum}
       </p>
      </header>
      
    </div>
  );
}

export default App;
