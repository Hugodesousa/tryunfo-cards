import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (

      <div className="creatCart">
        <form className="form">
          <h1>Adicionar nova carta</h1>
          <label htmlFor="cardName">
            Nome
            <input type="text" data-testid="name-input" id="cardName" />
          </label>
          <label htmlFor="description">
            Descrição
            <textarea data-testid="description-input" id="description" />
          </label>
          <label htmlFor="attr1">
            <input type="number" name="attr1" id="attr1" data-testid="attr1-input" />
          </label>
          <label htmlFor="attr2">
            <input type="number" name="attr2" id="attr2" data-testid="attr2-input" />
          </label>
          <label htmlFor="attr3">
            <input type="number" name="attr3" id="attr3" data-testid="attr3-input" />
          </label>
          <label htmlFor="image">
            Imagem
            <input type="text" data-testid="image-input" />
          </label>
          <label htmlFor="options">
            <select name="options" id="options" data-testid="rare-input">
              <option value="normal"> normal </option>
              <option value="raro"> raro </option>
              <option value="muito raro"> muito raro </option>
            </select>
            <label htmlFor="check">
              <input type="checkbox" name="check" id="check" data-testid="trunfo-input" />
            </label>
          </label>
          <label htmlFor="save">
            <input type="button" value="" data-testid="save-button" />
          </label>

        </form>
      </div>

    );
  }
}
export default Form;
