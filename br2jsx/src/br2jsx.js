import React from "react";
import './br2jsx.css';

class BR2JSX extends React.Component {

  render() {
      let regEx = /<br\s?\/?>/i;
      let resultText = this.props.text.split(regEx).map((el, i) => {
          if (!i) return el;
            let res = [<br key={i} />, el];
            return res;
        }).flat(1);
      console.log(resultText);
    return <div className = "br2jsx">{resultText}</div>
  }
}

export default BR2JSX;
