import React, {Component} from 'react';
import firebase from 'react-native-firebase';
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


export default class Signup extends Component {
  
   state={
     signUpEmail:'',
     signUpPassword:'',
     signUpFirstTime:'',
     signUpName:''
   }
// get or ser name value
onSignUpNameInputHandler = (val) =>{
this.setState({
  signUpName:val.trim()
})
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

  if(this.state.signUpName === null){
    alert('Please provide User Name')
    return;
  }else if(this.state.signUpName === ""){
    alert('Please provide user name')
    return;
  }if(this.state.signUpEmail === null){
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
      firebase.auth()
      .createUserWithEmailAndPassword(this.state.signUpEmail, this.state.signUpPassword)
      .then((user)=>{
        console.log(user);
        this.props.navigation.navigate('Tab')
      }) ;   
    } catch (error) {
      alert(error.toString())
    }
  } 
}
  
  render() {
    return (
        <ImageBackground source={require('../../Screens/image/dj_bg.jpg')} style = {{ width: '100%', height: '100%' }} >
      <View style={styles.container}>
      <Image source = {require('../../Screens/image/logo.png')} style = {{ width: 150, height: 150 }} />
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Full name"
              underlineColorAndroid='transparent'
              value ={this.state.signUpName}
              onChangeText={this.onSignUpNameInputHandler}
              />
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/40/000000/circled-user-male-skin-type-3.png'}}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              value ={this.state.signUpEmail}
              onChangeText={this.onSignUpEmailInputHandler}
              />
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/flat_round/40/000000/secured-letter.png'}}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              value ={this.state.signUpPassword}
              onChangeText={this.onSignUpPasswordInputHandler}
          />
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/40/000000/password.png'}}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Confirm Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              value ={this.state.signUpFirstTime}
              onChangeText={this.onSignUpPasswordFirstTimeInputHandler}
          />
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/40/000000/password.png'}}/>
        </View>
       <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={this.onClickSignUpFirebase}>
          <Text style={styles.loginText}>SignUp</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    );
  }
}


Signup.navigationOptions = {
    title: 'Sign Up',
    color:'white',
    backgroundColor:'transparent',
    gesturesEnabled: false,
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
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
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:300,
      borderRadius:30,
      backgroundColor:'transparent'
    },
    btnByRegister: {
      height:15,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical:20,
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

