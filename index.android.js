/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import ExerciseNavigator from './exerciseNavigator.js';

export default class GuessWhatDisplays extends Component {
  render() {
    return (
      <ExerciseNavigator />
    );
  }
}

AppRegistry.registerComponent('GuessWhatDisplays', () => GuessWhatDisplays);
