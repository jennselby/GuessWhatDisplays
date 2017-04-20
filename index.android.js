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

export default class GuessWhatDisplays extends Component {
  render() {
    return (
      <Variables />
    );
  }
}

AppRegistry.registerComponent('GuessWhatDisplays', () => GuessWhatDisplays);
