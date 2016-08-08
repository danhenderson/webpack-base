import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import routes from './routes';

const rootElement = document.getElementById('app');

ReactDOM.render(
  <AppContainer>
    <Provider store={ store }>
      <Router children={ routes } history={ browserHistory } />
    </Provider>
  </AppContainer>,
  rootElement
);

/* TODO: get hot reloading working */
// if (module.hot) {
//   module.hot.accept('./App', () => {
// 		const NextApp = require('./App').default;
//     ReactDOM.render(
//       <AppContainer>
//         <Provider store={ store }>
//           <Router children={ routes } history={ browserHistory } />
//         </Provider>
//       </AppContainer>,
//       rootElement
//     );
//   });
// }
