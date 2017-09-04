import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './App/registerServiceWorker';

import App from './App/App';
import 'materialize-css/dist/css/materialize.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
