import {StyleSheet, TextInput, View, Dimensions} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 
import { useState } from 'react';
const Inputweather = (props) => {
    const [city,setcity]=useState('')
    function cityHandler(e){
        setcity(e);
        



    }
    function sendcityname(){
        props.cityname(city)
    }
    return ( 
        <View style={styles.Input} >
            <TextInput placeholder='Enter Your City'  placeholderTextColor='white' style={styles.txt}  onChangeText={cityHandler}/>
            <FontAwesome name="search" size={20} color="white" onPress={sendcityname} />


        </View>
     );
}
 
export default Inputweather;
const styles=StyleSheet.create({
    Input : {
        flexDirection:"row",
        justifyContent:"space-between",
        borderWidth:3,
        borderColor:"white",
        margin:"10%",
        marginTop:"30%",
        width:Dimensions.get("screen").width-70,
        padding:8,
        borderRadius:5,
        color:"white"


    },
    txt:{
        color:"white"
    }
  

})