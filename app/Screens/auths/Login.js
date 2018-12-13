/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import { Button, View, Text ,TextInput} from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import firebase from 'react-native-firebase';

export default class Login extends Component {
  constructor() {
    super();
    this.unsubscriber = null;
    this.state = {
      user: null,
      userEmail:'',
      userPassword:''
    };
  }
 /**
   * Listen for any auth state changes and update component state
   */
  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

  // Login User with email and password
  LoginInUser = (email,password) =>{
    if(this.state.userEmail === null){
      alert('Please provide email')
      return;
    }else if(this.state.userEmail === ""){
      alert('Please provide Email')
      return;
    }else if(!this.validate(this.state.userEmail)){
      alert('Please Provide valid email')
      return;
    }else if(this.state.userPassword === null){
      alert('Please provide password')
      return;
    }else if(this.state.userPassword === ""){
      alert('Please provide Password')
      return;
    }else{
      try {
        console.log(`email is ${this.state.userEmail} and password is ${this.state.userPassword}`)
        console.log(`email is=====> ${email} and password is====> ${password}`)
        firebase.auth().signInWithEmailAndPassword(this.state.userEmail,this.state.userPassword).then((user)=>{
        console.log(user)
        this.props.navigation.navigate('Tab')
        })
      } catch (error) {
        console.log(error)
        alert(error.toString())
      } 
    }
  }

  // SignUpUser
  SignUpUser=()=>{
    this.props.navigation.navigate('SignUp')
  }

 // Forgot Password
 ForgotPasswordOnClick=()=>{
  this.props.navigation.navigate('ForgotPassword')
 }

// get & set value from textInput email
onClickEmailHandler =(val)=>{
  this.setState({
    userEmail : val.trim()
    
  })
  console.log(`Email is ${val}  and ${this.state.userEmail}`)
}

// get & set value from textInput password
onClickPasswordHandler =(val)=>{
  this.setState({
    userPassword : val.trim()
  })
  console.log(`Email is ${val}  and ${this.state.userPassword}`)
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
    // if (this.state.user) {
    //   return this.props.navigation.navigate('Tab');
    // }else{
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <TextInput 
          placeholder='Enter your Email'
          value={this.state.userEmail}
          onChangeText={this.onClickEmailHandler}
          />

          <TextInput 
          placeholder='Enter your password'
          value={this.state.userPassword}
          onChangeText={this.onClickPasswordHandler}
          />

          <Button
            title="Login"
            onPress={this.LoginInUser}
          />
          <Button
          title="Sign Up"
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
        <Button
        title="Forgot Password?"
        onPress={() => this.props.navigation.navigate('ForgotPassword')}
         />
        </View>
      );
    }
  }
// }

Login.navigationOptions = {
  title: 'Login',
  gesturesEnabled: false,
};



