import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert,Modal,KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase';
import db from '../Config';

export default class WelcomeScreen extends React.Component{
    constructor(){
        super()
        this.state={
            firstName:"",
            lastName:"",
            Password:"",
            Address:"",
            phoneNumber:"",
            ConfirmPassword:"",
            emailId:""
        }
    }

    userSignUp=(email,password,ConfirmPassword)=>{
        if(password!=ConfirmPassword){
            return Alert.alert('password does not exit/ncheck your password')
        }else{
            firebase.auth().CreateUserWithEmailAndPassword(email,password)
            .then(()=>{
                db.collection('users').add({
                    firstName:this.state.FirstName,
                    lastName:this.state.LastName,
                    phoneNumber:this.state.PhoneNumber,
                    emailId:this.state.email,
                    Address:this.state.Address,
                })
                return Alert.alert(
                    ('Users Successfully Added')
                );
            })
            .catch((error)=>{
                //Handle Error here.
                var errorCode=error.code;
                var errorMessage=error.message;
                return Alert.alert(errorMessage) 
            })
        }
  }

  showModel=()=>{
      return(
         <Modal>
         <KeyboardAvoidingView>
             <TextInput
             style={styles.TextInput}
             placeholder={"FirstName"}
             maxLength={8}
             onChangeText={(text)=>{
                 this.setState({
                     firstName:text
                 })
             }}
             />
             <TextInput
             style={styles.TextInput}
             placeholder={"LastName"}
             maxLength={8}
             onChangeText={(text)=>{
                 this.setState({
                     lastName:text
                 })
             }}
             />
             <TextInput
             style={styles.TextInput}
             placeholder={"Address"}
             maxLength={8}
             multiline={true}
             onChangeText={(text)=>{
                 this.setState({
                     Address:text
                 })
             }}
             />
             <TextInput
             style={styles.TextInput}
             placeholder={"PhoneNumber"}
             keyboardType={"numeric"}
             onChangeText={(text)=>{
                 this.setState({
                     phoneNumber:text
                 })
             }}
             />
             <TextInput
             style={styles.TextInput}
             placeholder={"Email"}
             keyboardType={"email-address"}
             onChangeText={(text)=>{
                 this.setState({
                     emailId:text
                 })
             }}
             />
             <TextInput
             style={styles.TextInput}
             placeholder={"ConfirmPassword"}
             secureTextEntry={true}
             onChangeText={(text)=>{
                 this.setState({
                     ConfirmPassword:text
                 })
             }}
             />
             <TextInput
             style={styles.TextInput}
             placeholder={"Password"}
             secureTextEntry={true}
             onChangeText={(text)=>{
                 this.setState({
                     password:text
                 })
             }}
             />
             <View>
              <TouchableOpacity style={styles.registerButton}>
                  <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>    
              <TouchableOpacity style={styles.cancleButton}>
                  <Text style={styles.buttonText}>Cancle</Text>
              </TouchableOpacity>    
             </View>    
         </KeyboardAvoidingView>    
         </Modal>    
      )
  }
}

const styles = StyleSheet.create({
    TextInput:{
        width:"75%",
        height:35,
        alignSelf:"center",
        borderColor:"#ffab91",
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10
    },
    registerButton:{
        width:200,
        height:40,
        alignItems:"center",
        justifyContent:"center",
        borderWidth:1,
        borderRadius:10,
        marginTop:30
    },
    cancleButton:{
        width:200,
        height:30,
        justifyContent:"center",
        alignItems:"center",
        marginTop:50
    },
    buttonText:{
        color:"#ff5722",
        fontSize:15,
        fontWeight:"bold"
    }
})