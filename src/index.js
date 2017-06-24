import React from 'react';
import ReactDOM from 'react-dom';
import RouteConfig from './RouteConfig';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<RouteConfig/>, document.getElementById('root'));
registerServiceWorker();
