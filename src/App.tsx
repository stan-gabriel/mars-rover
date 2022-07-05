import React, {useState} from 'react';
import './App.css';
import Rover from "./@types/rover";
import {multipleCommands} from "./utils/commands";

function App() {
    const [rover, setRover] = useState<Rover>({x: 0, y: 0, direction: "EAST"})
    const [commands, setCommands] = useState('')
    
    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        const result = event.currentTarget.value.replace(/[^fblr]/gi, '');
        setCommands(result);
    }

    const sendCommands = () => {
        console.log(commands, "- commands");
        const newRoverState = multipleCommands(rover, commands);
      setRover({...newRoverState});
      setCommands('');
    }

    const handleResetRover = () => {
        setRover({x: 0, y: 0, direction: "EAST"});
    }

  return (
    <div className="App">
      <header className="App-header">
          <div>
              <p>{`Rover Coordinates: (${rover.x}, ${rover.y}) ${rover.direction}`}</p>
              <input type='text' value={commands} onChange={handleChange}/>
              <button onClick={sendCommands}>Send commands</button>

              <div style={{fontSize: '0.8rem'}}>
                  <i>Only use: 'F' 'B' 'L' 'R'</i>
              </div>

              <button onClick={handleResetRover}>reset Rover position</button>
          </div>
      </header>
    </div>
  );
}

export default App;
