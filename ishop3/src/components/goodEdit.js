import React from 'react';
import PropTypes from 'prop-types';
import './goodEdit.css';

class GoodEdit extends React.Component {

    static propTypes = {
        code: PropTypes.number.isRequired,
        left: PropTypes.number.isRequired,
        imageLink: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        cost: PropTypes.number.isRequired, 
    }
  
  
    render() {
        console.log(this.props);
      return (
        <div className = "good__card">
            <h2>{this.props.name + this.props.cost + this.props.left}</h2>
        </div>
      )
    }
  }

  export default GoodEdit;
