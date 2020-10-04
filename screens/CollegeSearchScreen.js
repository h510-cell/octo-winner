import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import {Searchbar} from 'react-native-elements';

export default class CollegeSearchScreen extends React.Component{
    constructor(){
        super()
        this.state={
            search:""
        }
        const supportedURL = "http:/google.com";
    }       

      openUrlButton=({url,College})=>{
            const handlePress =useCallback(async()=>{
                //checking if the link is supported by links with custom Url scheme.
                const supported = await Linking.canOpenURL(url)

                if(supported){
                    //Opening the link in some app,if the url scheme is "http"the web link should be open
                    //by some browser in the mobile
                    await Linking.openURL(url);
              }else{
                  Alert.alert("don't know how to open the url:${url}")
              }
            },[url])

            return<Button title={College} onPress ={handlePress}/>;
    }

     App =()=>{
      <View style={styles.container}>
          <openUrlButton url={supportedURL}>Open Supported
           URL</openUrlButton>
      </View>    
    }

    UpdateSearch=search=>{
        this.setState({search})
    }

    componentDidMount(){
        this.UpdateSearch()
    }


    render(){
        return(
            <View>
             <Searchbar
             placeholder="Search here..."
             value={this.state.search}
             />   
            <View>
               <TouchableOpacity style={styles.button}
                  onPress={()=>{
                    this.props.navigation.navigate('ThankYouScreen')
                }}>
               </TouchableOpacity>
                 <Text style={styles.text}>Thank you</Text>    
            </View>
            </View>        
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    button:{
        width:200,
        height:40,
        alignItems:"center",
        justifyContent:"center",
        borderWidth:1,
        borderRadius:10,
        marginTop:30
    },
    text:{
        color:'#ff5722',
        fontSize:15,
        fontWeight:"bold"
    }
})