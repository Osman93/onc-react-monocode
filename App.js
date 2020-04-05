/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View, 
  Text, 
  Dimensions, 
  Image, 
  Platform
} from 'react-native';
const {width, height} = Dimensions.get('window');

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: 'http://on-csoft.com/oncLogo.png'}}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.text}>
          ONC React Native Monocode - {Platform.OS}
        </Text>
      </View>
    );
  }
}
const styles = {
  container: {
    backgroundColor: 'black',
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width / 2,
    height: height / 2,
  },
  text: {
    color: 'white',
  },
};
