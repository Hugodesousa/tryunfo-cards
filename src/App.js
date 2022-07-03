import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './style/style.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      isSaveButtonDisabled: true,
      cardTrunfo: false,
      hasTrunfo: false,
      cardState: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.buttonDisabled = this.buttonDisabled.bind(this);
  }

  onInputChange({ target }) {
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value;
    this.setState({
      [target.id]: value,
    }, () => this.buttonDisabled());
  }

  attrButtonDisabled = () => {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const max = 90;
    const soma = 210;

    const someAttr = Number(cardAttr1)
    + Number(cardAttr2)
    + Number(cardAttr3);

    const verify = cardAttr1 >= 0
    && cardAttr2 >= 0
    && cardAttr3 >= 0;

    const verify2 = cardAttr1 <= max
    && cardAttr2 <= max
    && cardAttr3 <= max;

    const verify3 = someAttr <= soma;

    const verify4 = verify && verify2 && verify3;
    return verify4;
  };

 checkTrunfo = () => {
   const { cardState } = this.state;
   const filter = cardState.some((card) => card.cardTrunfo);
   this.setState({ hasTrunfo: filter });
   console.log(filter);
 }

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      isSaveButtonDisabled,
      cardTrunfo,
    } = this.state;

    this.setState((prev) => ({ cardState: [...prev.cardState, {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      isSaveButtonDisabled,
      cardTrunfo,
    }] }));
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      isSaveButtonDisabled: true,
      cardTrunfo: false,
    }, () => this.checkTrunfo());
  };

  buttonDisabled() {
    const { cardName,
      cardDescription,
      cardImage,
    } = this.state;
    const test = cardName && cardDescription && cardImage;
    if (test && this.attrButtonDisabled()) {
      return this.setState({ isSaveButtonDisabled: false });
    }
    return this.setState({
      isSaveButtonDisabled: true,
    });
  }

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
      cardState,
    } = this.state;
    return (
      <div className="full">
        <div>
          <h1>Tryunfo</h1>
        </div>
        <div className="divComponentes">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            checkTrunfo={ this.checkTrunfo }
          />
        </div>
        <div>
          {cardState.map((card) => (<Card
            cardName={ card.cardName }
            cardDescription={ card.cardDescription }
            cardAttr1={ card.cardAttr1 }
            cardAttr2={ card.cardAttr2 }
            cardAttr3={ card.cardAttr3 }
            cardImage={ card.cardImage }
            cardRare={ card.cardRare }
            cardTrunfo={ card.cardTrunfo }
            key={ card.cardName }
          />))}
        </div>

      </div>
    );
  }
}

export default App;
