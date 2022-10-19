import React from 'react';
import type {StackNavigationProp} from '@react-navigation/stack';
import {View} from 'react-native';
import {Button} from 'react-native';

//import {IconButton} from '../components';

//@ts-ignore
function StartScreen({navigation}: StackNavigationProp) {
  return (
    <View>
      <Button title={'back'} onPress={navigation.goBack} />
    </View>
  );
}

export default StartScreen;
