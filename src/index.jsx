/**
 * @file index.jsx
 * Entry file for this application.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Scene, Entity } from 'aframe-react';

require('aframe');

/**
 * Initial A-Frame Scene.
 * {@inheritdoc}
 */
const InitialScene = () => (
  <Scene inspector="url: https://aframe.io/releases/0.3.0/aframe-inspector.min.js">
    <Entity
      id="entity--box"
      primitive="a-box"
      position={{ x: -1, y: 0.5, z: -3 }}
      rotation={{ x: 0, y: 45, z: 0 }}
      color="#4CC3D9"
    />
    <Entity
      id="entity--sphere"
      primitive="a-sphere"
      position={{ x: 0, y: 1.25, z: -5 }}
      radius={1.25}
      color="#EF2D5E"
    />
    <Entity
      id="entity--cylinder"
      primitive="a-cylinder"
      position={{ x: 1, y: 0.75, z: -3 }}
      radius={0.5}
      width={4}
      height={1.5}
      color="#FFC65D"
    />
    <Entity
      id="entity--plane"
      primitive="a-plane"
      position={{ x: 0, y: 0, z: -4 }}
      rotation={{ x: -90, y: 0, z: 0 }}
      width={4}
      height={4}
      color="#7BC8A4"
    />

    <Entity primitive="a-sky" color="#4286f4" />
  </Scene>
);

// Render the InitialScene component in the scene container div.
ReactDOM.render(<InitialScene />, document.querySelector('.application-container'));
