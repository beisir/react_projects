import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App.js';
import 'antd/dist/antd.css';
import './App.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
