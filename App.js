import React from "react"
import {Text,View,Stylesheet} from "react-native"
import Home from "./screens/HomeScreen"
import Details from "./screens/Details"
import {createAppContainer} from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"

export default function App (){
return <AppContainer/>
}

const appStackNavigator = createStackNavigator(
  {
    Home:{
      screen:HomeScreen,
      navigationOptions:{
        header:false
      }
    },
    Details:{
      screen:DetailsScreen
    }
  },
  {
    initialRouteName:"Home"
  }
)
const AppContainer = createAppContainer(appStackNavigator)