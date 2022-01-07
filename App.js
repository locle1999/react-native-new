/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import FromRegister from './Components/FromRegister';
import Product from './Components/Product';
import FromLogin from './Components/FromLogin';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FromSignup from './Components/FromSignup';
import { Provider } from "react-redux"
import { createStore } from 'redux';
import listReducer from './store/reducer/listReducer';


const Stack = createNativeStackNavigator();
//const Drawer = createDrawerNavigator();
//const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();


const reduxStore = createStore(listReducer)

const App = () => {

  return (

    // <FromLogin />
    // <FromRegister />
    <Provider store={reduxStore}>
      <Product />
    </Provider>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Đăng nhập">
    //     <Stack.Screen name="Đăng ký" component={FromRegister} />
    //     <Stack.Screen name="Đăng nhập" component={FromLogin} />
    //     <Stack.Screen name="Product" component={Product} />
    //     <Stack.Screen name="Signup" component={FromSignup} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <NavigationContainer>
    //   {/* <Drawer.Navigator>
    //     <Drawer.Screen name="Đăng ký" component={FromRegister} />
    //     <Drawer.Screen name="Shop" component={Product} />
    //   </Drawer.Navigator> */}
    //   {/* <Tab.Navigator>
    //     <Tab.Screen name="Đăng ký" component={FromRegister} />
    //     <Tab.Screen name="Shop" component={Product} />
    //     <Tab.Screen name="nav" component={FromLogin} />
    //   </Tab.Navigator> */}

    // </NavigationContainer>
  );
};



export default App;
