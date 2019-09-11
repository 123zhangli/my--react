import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './assets/less/index.less'//引入公共样式

import store from './redux/store';
import App from './App';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

