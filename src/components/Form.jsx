import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/style.css';
// import Checkbox from './Checkbox';

class Form extends Component {
  // checkbox = () => (
  //   <label htmlFor="cardTrunfo">
  //     <input
  //       type="checkbox"
  //       name="check"
  //       id="cardTrunfo"
  //       data-testid="trunfo-input"
  //       checked={ cardTrunfo }
  //       onChange={ onInputChange }
  //     />
  //   </label>
  // )

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (

      <div className="creatCart">
        <h1>Adicionar nova carta</h1>
        <form className="form">
          <label htmlFor="cardName" className="labelIn">
            Nome
            <input
              type="text"
              data-testid="name-input"
              id="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardDescription">
            Descrição
            <textarea
              data-testid="description-input"
              id="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardAttr1">
            <input
              type="number"
              name="cardAttr1"
              id="cardAttr1"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardAttr2">
            <input
              type="number"
              name="cardAttr2"
              id="cardAttr2"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardAttr3">
            <input
              type="number"
              name="cardAttr3"
              id="cardAttr3"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="image">
            Imagem
            <input
              id="cardImage"
              type="text"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="options">
            <select
              name="options"
              id="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal"> normal </option>
              <option value="raro"> raro </option>
              <option value="muito raro"> muito raro </option>
            </select>
          </label>
          {/* <label htmlFor="cardTrunfo"> */}

          <label htmlFor="cardTrunfo">
            {hasTrunfo
              ? <p>Você já tem um Super Trunfo em seu baralho</p>
              : <input
                  type="checkbox"
                  name="check"
                  id="cardTrunfo"
                  data-testid="trunfo-input"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
              />}
          </label>

          {/* </label> */}
          <button
            className="button"
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>

    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
