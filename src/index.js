import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { createStore } from 'redux'
import savePassword from './reducer/index';

const store = createStore(savePassword,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<BrowserRouter>
                    <Provider store = {store}>
                        <App/>
                    </Provider>
                </BrowserRouter>, document.getElementById('root'));