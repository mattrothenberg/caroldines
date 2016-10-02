import React, { Component } from 'react';
import './styles.scss';

class App extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero-inner max-width-4 px2 pb3">
          <h1 className="mt0 mb0 white">Carol Dines</h1>
          <hr className="hr-stubby mt1 mb2"/>
          <h2 className="my0 white regular">Actress/Audiobook Narrator living in Louisville, KY</h2>
        </div>
        <hr/>
      </div>
    );
  }
}

export default App;
