import React from "react";
import './rainbow-frame.css';

class RainbowFrame extends React.Component {

  render() {
    let result = this.props.colors.reduce( (acc, el, i) => {
        acc = <div key = {el} style={{borderColor: el}} className="rainbow-frame-wrap">{acc}</div>;
        return acc;
    }, this.props.children);

    return (
        <div>
            {result}
        </div>
    );
  }
}

export default RainbowFrame;
