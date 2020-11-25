/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Button
} from 'react-native';


export default class LoginMiniapp extends Component {


  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
    
  }

  logOut(){
    Alert.alert( 'Log Out',
      'Are you sure you want to log out?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'Yes', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    )
  }

  

  onLogin() {
    const { username, password } = this.state;
    if(username != 'Juan' || password != 'juan'){
      alert("NOOOOO")
    }
  }


  render () {
    console.log(this.currentTab);
    return (
      <View style={styles.main}>
        <View style={styles.logo}>
          <Image source={{
                uri: 'https://assets.stickpng.com/images/58429073a6515b1e0ad75abc.png'
              }} style={{width:150,height:150}} />
        </View>
        <View style={styles.container}>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
        />
      </View>
        <View style={styles.row2}>
              
        </View>
      </View>
      
    )
  }


}

const styles = StyleSheet.create({
  main:{
    height: '100%',
    width:'100%',
    backgroundColor: '#017ADB',
  },
  logo: {
    alignItems:'center',
    justifyContent:'flex-end',
    height: '30%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#017ADB',
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius:40,
    borderColor: 'black',
    marginBottom: 10,
    backgroundColor: 'white',
  },
  logoff:{
    position: 'absolute',
    top: 5,
    left: 5,
  },
  logouttext:{
    fontSize:14,
    fontStyle:'italic',
    color: 'red',
    fontWeight: 'bold',
  },
});