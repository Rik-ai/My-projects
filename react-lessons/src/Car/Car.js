import React, { Component } from 'react';

export default () => (
    <div>
        <p>This is car component</p>
        <p>Nomber: <strong>{Math.round(Math.random() * 100)}</strong></p>
    </div>
)