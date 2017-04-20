/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Variables from './variables.js';
import Functions from './functions.js';

export default class GuessWhatDisplays extends Component {
  render() {
    return (
      <Functions />
    );
  }
}

AppRegistry.registerComponent('GuessWhatDisplays', () => GuessWhatDisplays);
