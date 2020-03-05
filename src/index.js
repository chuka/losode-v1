import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'



const rootDOM = document.querySelector('#root');

ReactDOM.render(<App/>, rootDOM);

if (module.hot) {
  module.hot.accept();
}
