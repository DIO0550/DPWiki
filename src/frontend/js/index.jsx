import React from 'react';
import ReactDOM from 'react-dom';
import App from '../component/App.jsx';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducer.jsx'

const store = createStore(reducer)
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);