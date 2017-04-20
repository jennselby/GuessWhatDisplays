/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

export default class Functions extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 2, y: 3, z: 0, }
  }
  add(x, y) {
    x = x + y;
    return x;
  }
  multiply(x, y) {
    x = x * y;
    return x;
  }
  callAdd() {
    this.add(this.state.x, this.state.y);
  }
  callMultiply() {
    this.setState({
        x: this.multiply(this.state.x, this.state.y),
    });
  }
  callBoth() {
    this.setState({
        z: this.multiply(this.add(this.state.x, this.state.y), this.state.y),
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.variableValue}>
          x is {this.state.x}
        </Text>
        <Text style={styles.variableValue}>
          y is {this.state.y}
        </Text>
        <Text style={styles.variableValue}>
          z is {this.state.z}
        </Text>
        <Button onPress={() => this.callAdd()} title="Add" />
        <Button onPress={() => this.callMultiply()} title="Multiply" />
        <Button onPress={() => this.callBoth()} title="Both" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  variableValue: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('Functions', () => Functions);
