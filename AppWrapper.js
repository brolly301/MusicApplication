import React, {Component} from 'react';
import App from './App';
import Providers from './src/navigation/Providers';

class AppWrapper extends Component {
  render() {
    return (
      <Providers>
        <App />
      </Providers>
    );
  }
}

export default AppWrapper;
