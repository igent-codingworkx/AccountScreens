import React, { Component } from 'react'
import { Text, View ,Button} from 'react-native'
import { Navigation } from 'react-native-navigation'

export default class Loading extends Component {

  gotoScreen = (screenName) =>{
         Navigation.push(this.props.componentId,{
             component :{
                 name:screenName
             }
         })
  }
  render() {
    return (
      <View style={{flex:1,backgroundColor:'skyblue',justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'white',fontSize:30,letterSpacing :5,textDecorationLine:'line-through'}}> Welcome</Text>
        <Button title ="Login" onPress ={()=>this.gotoScreen("Login")}/>
        <Button title ="Register" onPress ={()=>this.gotoScreen("Register")}/>
      </View>
    )
  }
}
