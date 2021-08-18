import React from "react";
import Fragment from "./fragment";
import DoubleButton from "./DoubleButton";
import {withRainbowFrame} from './withRainbowFrame';

import './App.css';

class App extends React.Component {


  render() {
    let colors=['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

    // let FramedFragment=withRainbowFrame(colors)(Fragment);
    let FramedFragment=withRainbowFrame(colors)(Fragment);
    let FramedDoubleButton=withRainbowFrame(colors)(DoubleButton);

    return (
      <div>
        <DoubleButton caption1="однажды" caption2="пору" cbPressed={ num => alert(num) } >
          в студёную зимнюю
        </DoubleButton>
        <br />
        <FramedDoubleButton caption1="я из лесу" caption2="мороз" cbPressed={ num => alert(num) }>вышел, был сильный</FramedDoubleButton>
        <br />
        <FramedFragment>
          Hello!
        </FramedFragment>
      </div>
    );
  }
}

export default App;