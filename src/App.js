import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './style/style.css';

class App extends React.Component {
  render() {
    return (
      <div className="full">
        <h1>Tryunfo</h1>
        <Form />
        <Card cardTrunfo="true" />
      </div>
    );
  }
}

export default App;
