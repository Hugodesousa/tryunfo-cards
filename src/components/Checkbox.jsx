import React, { Component } from 'react';

class Checkbox extends Component {
  render() {
    return (
      <label htmlFor="cardTrunfo">
        <input
          type="checkbox"
          name="check"
          id="cardTrunfo"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}
export default Checkbox;
