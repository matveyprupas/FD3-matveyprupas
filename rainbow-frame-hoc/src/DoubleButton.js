import React from 'react';

class DoubleButton extends React.Component {

    pressed = (arg) => {
        this.props.cbPressed(arg);
    }

    pressed1 = () => {
        this.pressed(1);
    }

    pressed2 = () => {
        this.pressed(2);
    }

    render () {
      return (
        <div>
            <input type= "button" value = {this.props.caption1} onClick = {this.pressed1} />
            {this.props.children}
            <input type= "button" value = {this.props.caption2} onClick = {this.pressed2} />
        </div>
      );
    }
}


export default DoubleButton;
