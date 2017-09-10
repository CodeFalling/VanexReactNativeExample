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
  View,
  Button,
} from 'react-native';

import {vanex, start} from 'vanex';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


const appModel = {
  name: 'appModel',
  data: {
    count: 0,
  },
};

@vanex('appModel')
export default class VanexReactNativeExample extends Component {
  render() {
    const handleClick = () => {
      this.appModel.count ++;
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Vanex & React Native!
        </Text>
        <Button
          onPress={handleClick}
          title={'ClickMe: +' + this.appModel.count}
          color="#841584"
          accessibilityLabel="click"
        />

      </View>
    );
  }
}

const ContainerComponent = start({
  component: VanexReactNativeExample,
  models: {
    appModel,
  },
});

AppRegistry.registerComponent('VanexReactNativeExample', () => ContainerComponent);
