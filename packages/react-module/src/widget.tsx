import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import { name } from '../manifest';
import { createWidget } from '../../../utils/createWidgets';

const widget = {
    name,
    mount: (node) => {
        ReactDOM.render(<App />, node);
    },
    unmount: () => {

    }
};

createWidget(widget);
