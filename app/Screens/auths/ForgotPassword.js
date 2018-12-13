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
this.props.navigation.goBack();
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