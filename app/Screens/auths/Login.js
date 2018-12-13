/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert,
  ImageBackground
} from 'react-native';
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
LoginWithFaceBook = () =>{
  alert('Login with Facebook')
}
LoginWithGoogle = () =>{
  alert('Login with Google')
}
LoginWithTwitter = () =>{
  alert('Login with Tweeter')
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
      return (
        <ImageBackground source={require('../../Screens/image/dj_bg.jpg')} style = {styles.container} >
  <View style={styles.container}>
  <Image source={require('../../Screens/image/logo.png')} style = {{ width: 150, height: 150 }} />
         <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Email"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                value={this.state.userEmail}
                onChangeText={this.onClickEmailHandler}
          />
            <Image style={styles.inputIcon} source={ require('../../Screens/image/mail.png')} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                value={this.state.userPassword}
                onChangeText={this.onClickPasswordHandler}
                />
            <Image style={styles.inputIcon} source={ require('../../Screens/image/password.png') } />
          </View>
  
          <TouchableOpacity style={styles.btnByRegister} onPress={() => this.props.navigation.navigate('SignUp')}>
              <Text style={styles.textByRegister}>New to DJ? Join now </Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={this.LoginInUser}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('ForgotPassword')}>
              <Text style={styles.btnText}>Forgot password?</Text>
              
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonContainer, styles.FBloginButton]} onPress={this.LoginWithFaceBook}>
          <Image style={styles.FBinputIcon} source={ require('../../Screens/image/facebook.png')} />
          <Text style={styles.loginText}>Sign in with Facebook</Text>
          
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={this.LoginWithTwitter}>
        <Image style={styles.socilainputIcon} source={ require('../../Screens/image/twitter.png')} />
          <Text style={styles.loginText}>Sign in with Twitter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonContainer, styles.GMloginButton]} onPress={this.LoginWithGoogle}>
        <Image style={styles.socilainputIcon}  source={ require('../../Screens/image/google.png')}/>
          <Text style={styles.loginText}>Sign in with Google</Text>
        </TouchableOpacity>
        </View>
        </ImageBackground>
      );
    }



  }
// }

Login.navigationOptions = {
  title  : 'Login',
  header : null,
  gesturesEnabled: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'black',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center',

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginRight:15,
    justifyContent: 'center'
  },
  socilainputIcon:{
    width:20,
    height:20,
    marginRight:13,
    justifyContent: 'center'
  },
  FBinputIcon:{
    width:20,
    height:20,
    marginRight:5,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    width:300,
    borderRadius:30,
    backgroundColor:'transparent'
  },
  btnByRegister: {
    height:15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:10,
    width:300,
    backgroundColor:'transparent'
  },
  loginButton: {
    backgroundColor: "#00b5ec",
     shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: 'white',
  },
  FBloginButton: {
    backgroundColor: "#0D47A1",
     shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,
    elevation: 19,
  },
  

  GMloginButton: {
    backgroundColor: "red",
     shadowColor: "#F44336",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,
    elevation: 19,
  },
  
  btnText:{
    color:"white",
    fontWeight:'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  textByRegister:{
    color:"white",
    fontWeight:'bold',
    textAlign:'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  }
});


