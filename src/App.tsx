/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
//import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartScreen from './screens/StartScreen';

const Stack = createNativeStackNavigator();

//enableScreens();

const App = () => {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Start" component={StartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
