'use strict';
import React from 'react';
import Routes from './resources/routes';
import DevTools from 'dev/redux-dev-tools';

const Root = (props, state) => (
    <div>
        <Routes />
        <DevTools />
    </div>
);

export default Root;
