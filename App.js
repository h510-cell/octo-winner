import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs';
import DataScreen from './screens/DataScreen';
import CollegeSearchScreen from './screens/CollegeSearchScreen';
import WelcomeScreen from './screens/WelcomeScreen' 

export default class App extends React.Component{
  render(){
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
  }
}

const TabNavigator = createBottomTabNavigator({
  DataScreen:DataScreen,
  CollegeSearchScreen:CollegeSearchScreen
},
{
  defaultNavigationOptions:({navigation})=>{
    tabBarIcon:()=>{
      var routename=navigation.state.routename;
      console.log(routename)
      if(routename==="DataScreen"){
        return(
          <Image
          soure ={require ("./assets/Data icon.png")}
          style={{width:40,height:40}}
          />
        )
      }

      else if (routename==="CollegeSearchScreen"){
        return(
          <Image
          soure={require("./assets/College icon.png")}
          style={{width:40,height:40}}
        /> 
        )
      }}
}}
);

const switchNavigator=createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  TabNavigator:{screen:TabNavigator}
})
const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
