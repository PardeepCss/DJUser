/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View,TextInput ,Button,Text} from 'react-native';

export default class ForgotPassword extends Component {
state={
  email : ''
}

// get and set Email from TextInput
forgotPasswordInputHandler = (value) => {
  this.setState({
    email : value.trim()
  })
}

// onClick on forgot password button
onClickForgotPassword = () =>{
  if(this.state.email === null){
    alert('Please provide email')
    return;
  }else if(this.state.email === ""){
    alert('Please provide Email')
    return;
  }else if(!this.validate(this.state.email)){
    alert('Please Provide valid email')
    return;
  }else{
    this.props.navigation.goBack();
  }

}

// Email validation 
validate = (text) => {
  // console.log(text);
  // let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
  // if(reg.test(text) === false)
  // {
  // console.log("Email is Not Correct");
  // this.setState({email:text})
  // return false;
  //   }
  // else {
  //   this.setState({email:text})
  //   console.log("Email is Correct");
  // }
  return true;
  }

  render() {
    return (
      <View >
        <Text >Forgot password</Text>
        <TextInput 
        placeholder='Enter your email'
        value={this.state.email}
        onChangeText={this.forgotPasswordInputHandler}
        />
        <Button title='Submit' onPress={this.onClickForgotPassword} />
      </View>
    );
  }
}


ForgotPassword.navigationOptions = {
    title: 'Forgot Password',
    gesturesEnabled: false,
  };