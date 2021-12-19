import React from 'react';

// Styles
import { GlobalStyle } from './GlobalStyle';

// Components
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      Start here.
      <GlobalStyle />
    </div>
  );
}

export default App;
