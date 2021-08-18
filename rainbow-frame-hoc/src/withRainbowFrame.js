import React from 'react';

function withRainbowFrame(colors) {
    return function(Component) {

      
      return props => {
        let jsxArr = colors.reduce( (acc, el, i) => {
          return <div key = {i} style={{border: "4px solid", borderColor: el, padding: "20px"}}>{acc}</div>
        }, <Component {...props} />);

        return <div>{jsxArr}</div>;
      };
    };
}


export { withRainbowFrame };
