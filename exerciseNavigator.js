import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  TouchableHighlight,
  Text,
  View
} from 'react-native';
import Variables from './variables.js';
import Functions from './functions.js';

// Code based on example at https://facebook.github.io/react-native/docs/navigator.html

export default class ExerciseNavigator extends Component {
  render() {
    const routes = [
        {
         topic: 'Variables',
         render: <Variables />,
        },
        {
         topic: 'Functions',
         render: <Functions />,
        },
    ];
    return (
        <Navigator
            style={styles.navigator}
            initialRoute={routes[0]}
            renderScene={(route, navigator) => route.render}
            navigationBar={
                <Navigator.NavigationBar
                    routeMapper={{
                        LeftButton: (route, navigator, index, navState) => {
                            if (index === 0) {
                                return null;
                            } else {
                                return (
                                    <TouchableHighlight onPress={() => navigator.pop()}>
                                        <Text style={styles.navText}>&lt;&lt; {routes[index - 1].topic}</Text>
                                    </TouchableHighlight>
                                );
                            }
                        },
                        RightButton: (route, navigator, index, navState) => {
                            if (index + 1 >= routes.length) {
                                return null;
                            } else {
                                return (
                                    <TouchableHighlight onPress={() => navigator.push(routes[index + 1])}>
                                        <Text style={styles.navText}>{routes[index + 1].topic} &gt;&gt;</Text>
                                    </TouchableHighlight>
                                );
                            }
                        },
                        Title:  (route, navigator, index, navState) => {
                            return <Text style={styles.titleText}>{route.topic}</Text>;
                        },
                    }}
                />
            }
        />
    );
  }
}

const styles = StyleSheet.create({
  navigator: {
    paddingTop: 100,
    paddingRight: 20,
    paddingLeft: 20,
  },
  navText: {
    fontSize: 20,
    padding: 5,
  },
  titleText: {
    fontSize: 36,
    paddingTop: 40,
  },
});

AppRegistry.registerComponent('ExerciseNavigator', () => ExerciseNavigator);
