import React from 'react';
import renderer from 'react-dom';
import './styles/index.less'

import Component from './components/component';
const App = props => (<div>
    <Component />
</div>)

renderer.render(<App />, document.querySelector('#root'));