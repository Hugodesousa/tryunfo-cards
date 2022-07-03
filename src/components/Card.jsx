import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/style.css';

class Card extends Component {
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
      del,
      delCard,
    } = this.props;
    return (
      <div className="card">
        <div>
          <h1 data-testid="name-card">{cardName}</h1>
        </div>
        <div>
          <img
            className="images"
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
          />
        </div>
        <div>
          <p
            data-testid="description-card"
            className="descriptioncard"
          >
            { cardDescription }

          </p>
        </div>
        <div className="atrr">
          <p data-testid="attr1-card">
            {' '}
            Enredo:
            {' '}
            { cardAttr1 }
          </p>
          <p data-testid="attr2-card">
            Personagens:
            {' '}
            { cardAttr2 }
          </p>
          <p data-testid="attr3-card">
            Arte:
            { cardAttr3 }
          </p>
        </div>
        <div>
          <p data-testid="rare-card">{ cardRare }</p>
        </div>
        <div className="divtrunfo">
          {
            cardTrunfo
              ? <p className="trunfo" data-testid="trunfo-card"> Super Trunfo </p>
              : <> </>
          }

        </div>
        {del === 'del'
          ? (
            <button
              className="button"
              type="button"
              onClick={ delCard }
              data-testid="delete-button"
            >
              Apagar
            </button>)
          : <> </> }
      </div>

    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  del: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  delCard: PropTypes.func.isRequired,
};

export default Card;
