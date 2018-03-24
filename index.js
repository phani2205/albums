//Import a library to help create a Component
import React from 'react';
import { AppRegistry,View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//Create a Component
//flex :1 is added for solving a scroll issue in iOS(use the complete screen height)
const App = () => (
  <View style={{ flex : 1}}>
    <Header headerText={'Music Albums!'}/>
    <AlbumList/>
  </View>
  );

//render it to the device
AppRegistry.registerComponent('albums',() => App)
