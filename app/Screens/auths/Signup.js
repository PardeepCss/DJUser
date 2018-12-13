/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View,TextInput,Button} from 'react-native';
import firebase from 'react-native-firebase';



export default class Signup extends Component {
  
   state={
     signUpEmail:'',
     signUpPassword:'',
     signUpFirstTime:''
   }
// get or set email value
onSignUpEmailInputHandler = (val) =>{
  this.setState({
    signUpEmail :val.trim()
  })
}
// get or set email value
onSignUpPasswordInputHandler = (val) =>{
  this.setState({
    signUpPassword :val.trim()
  })
}
// get or set email value
onSignUpPasswordFirstTimeInputHandler = (val) =>{
  this.setState({
    signUpFirstTime :val.trim()
  })
}
// Sign Up with Firebase
onClickSignUpFirebase = () => {
  if(this.state.signUpPassword === this.state.signUpFirstTime ){
    try {
      firebase.auth().createUserWithEmailAndPassword(this.state.signUpEmail, this.state.signUpPassword).then((user)=>{
        console.log(user);
        this.props.navigation.navigatate('Tab')
      }) ;   
    } catch (error) {
      console.log(error.toString());
    }
  }else{
    alert('Password and First time must be same')
  }
  
}
  //  returns Promise containing UserCredential;
  
  render() {
    return (
      <View >
        <Text >Sign Up</Text>
        <TextInput 
        placeholder='Enter your email'
        value ={this.state.signUpEmail}
        onChangeText={this.onSignUpEmailInputHandler}/>
        <TextInput 
        placeholder='Enter your password'
        value ={this.state.signUpPassword}
        onChangeText={this.onSignUpPasswordInputHandler}/>
        <TextInput 
        placeholder='Enter your First Time'
        value ={this.state.signUpFirstTime}
        onChangeText={this.onSignUpPasswordFirstTimeInputHandler}/>
        <Button title='SignUp'
        onPress={this.onClickSignUpFirebase}/>
        <Button title='Login'
        onPress={() => this.props.navigation.navigatate('Login')}/>
      </View>
    );
  }
}


Signup.navigationOptions = {
    title: 'Sign Up',
    gesturesEnabled: false,
  };