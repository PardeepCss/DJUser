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

// Sign Up with Firebase
onClickSignUpFirebase = () => {

  if(this.state.signUpEmail === null){
    alert('Please provide email')
    return;
  }else if(this.state.signUpEmail === ""){
    alert('Please provide Email')
    return;
  }else if(!this.validate(this.state.signUpEmail)){
    alert('Please Provide valid email')
    return;
  }else if(this.state.signUpPassword === null){
    alert('Please provide password')
    return;
  }else if(this.state.signUpPassword === ""){
    alert('Please provide Password')
    return;
  }else if(this.state.signUpFirstTime === null){
    alert('Please provide password')
    return;
  }else if(this.state.signUpFirstTime === ""){
    alert('Please provide Password')
    return;
  }if(this.state.signUpPassword !== this.state.signUpFirstTime ){
    alert('Password and First time must be same')
    return;
  }else{
    try {
      firebase.auth().createUserWithEmailAndPassword(this.state.signUpEmail, this.state.signUpPassword).then((user)=>{
        console.log(user);
        this.props.navigation.navigatate('Tab')
      }) ;   
    } catch (error) {
      alert(error.toString())
    }
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