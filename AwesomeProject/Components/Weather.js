import { useEffect, useState } from "react";
import { View , Text, StyleSheet, Dimensions, ActivityIndicator} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { cloud_day,clear_day,clear_night,cloud_night,haze_day,haze_night,rain_day,rain_night,
    snow_day,snow_night} from "../Images/index";

const API_KEY="9c3af63ca8837f58cde5f69fe289201f";


const Weather = (props) => {
    const [Weather,setWeather]=useState(null)
    const [loading,setloading]=useState(false)
    const [icons,seticons]=useState('')
    const [background, setbackground]=useState('');


    async function weatherdata(cityname){
      
     
       

        setloading(true)

        const API=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}`;
        let res= await fetch(API)
        if(res.status==200){
           res=await res.json();
       
            setWeather(res);


        }
        else{
            setWeather(null);


        }
        setloading(false)


    }
    useEffect(()=>{
        weatherdata(props.cityName);
      
        const iconobj={
               snow:  <FontAwesome5 name="snowman" size={50} color="white" />,
        clear :<Feather name="sun" size={50} color="white" />,
        haze: <Fontisto name="day-haze" size={58} color="white" />,
        rain :<FontAwesome5 name="cloud-rain" size={58} color="white" />,
        cloud : <AntDesign name="cloud" size={58} color="white" />
          
        }
        
        if(Weather!=null){
            const now = new Date();
            const sunrise = new Date(Weather.sys.sunrise * 1000);
            const sunset = new Date(Weather.sys.sunset * 1000);
            const isdaytime = now > sunrise && now < sunset;
            switch (Weather.weather[0].main) {
                case 'Snow':
                    seticons(iconobj.snow);
                    isdaytime ? setbackground(snow_day) : setbackground(snow_night)

                    break;
                case 'Rain':
                    seticons(iconobj.rain);
                    isdaytime ? setbackground(rain_day): setbackground(rain_night)

                    break;
                case 'Clouds':
                    seticons(iconobj.cloud);
                    isdaytime ? setbackground(cloud_day) : setbackground(cloud_night)
                    break;        
                case 'Haze':
                    seticons(iconobj.haze);
                    isdaytime ? setbackground(haze_day) : setbackground(haze_night)
                    break;
                case 'Clear':
                    seticons(iconobj.clear);
                    isdaytime ? setbackground(clear_day) : setbackground(clear_night)
                    break;
                default:
                    seticons(iconobj.rain);
                    isdaytime ? setbackground(haze_day) : setbackground(haze_night)


                 
            }
            props.background(background);


        }

    },[props.cityName])
    if(loading){
        <ActivityIndicator size="large"/>
    }
   
    return (  
        // <View style={styles.parentdiv}>
        //     <Text style={styles.deg}>{Weather.name}°</Text>
        //     <Text style={styles.city}>{Weather.name}</Text>
        //     <View style={styles.icon}>
        //         <Text> Humidity:  {Weather.main.humidity}</Text>
        //         <Text>Temperature: {Weather.main.temp}</Text>
        //     </View>
        //     <View>
        //         <Text>Icons</Text>
        //     </View>
        // </View>
        <View style={styles.parentdiv}>
        {loading ? (
            <ActivityIndicator size="large" />
        ) : Weather ? (
            <>
            <View style={styles.tempname}>
        
                <Text style={styles.deg}>{Weather.wind.deg}°</Text>
                <Text style={styles.city}>{Weather.name}</Text>
                </View>
          
                <View style={styles.icon}>
                    <Text style={styles.txt}> Humidity:  {Weather.main.humidity}</Text>
                    <Text style={styles.txt}> {icons}</Text>
                   
                </View>
                <View style={styles.bg}>
                <Text style={styles.txt}>Temperature: {Weather.main.temp}</Text>
                </View>
                
            </>
        ) : (
            <Text>Enter City Name</Text>
        )}
    </View>
);
//With this update, the component will display the loading indicator while data is being fetched, show the weather information when it's available, and display "Enter City Name" when Weather is null.

}
 
export default Weather;
const styles=StyleSheet.create({
    deg:{
        fontSize:80,
        fontWeight:"bold",
        marginTop:"3",
        textAlign:"center",
        color:"white"


    },
    city :{
        fontSize:30,
        textAlign:"center",
        fontWeight:"bold",
        color:"white"
    },
    icon :{
        flexDirection:"row",
        justifyContent:"space-between",
        width:Dimensions.get("screen").width -80,
        marginTop:"70%",
        backgroundColor:"black",
        color:"white"

    },
    parentdiv:{
        margin:"10%",
    },
    tempname:{
        backgroundColor:"black",
        borderRadius:10,

    },
    bg:{
        backgroundColor:"black",
    },
    txt:{
        color:"white"
    }
   

})