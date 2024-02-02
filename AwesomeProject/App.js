// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View , Image, Dimensions} from 'react-native';
// import Weather from './Components/Weather';
// import Inputweather from './Components/Inputweather';
// import { useState } from 'react';

// export default function App() {
//   const [savedname,setsavedname]=useState('');
//   const [backImg,setbackImg]=useState('');
//   function sendcityname(cityname){
//     setsavedname(cityname);
//   }
//   function backgroundhandler(background){
//     setbackImg(background)
//     console.log(backImg);

  
//   }

//  const backImages="https://images.pexels.com/photos/1118873/pexels-ph…srgb&dl=pexels-johannes-plenio-1118873.jpg&fm=jpg"

//   return (
//     <View>
   

// <Image source={backImg}/>
//     <Inputweather cityname={sendcityname}/>
//     <Weather cityName={savedname} background={backgroundhandler}/>
   
//     </View>
//   );
// }
// const styles=StyleSheet.create({
//   container:{
//     width:Dimensions.get('screen').width,
//     alignItems:'center',
//     justifyContent:'center',
//     flex:1,
//   }
// })

import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import Weather from './Components/Weather';
import Inputweather from './Components/Inputweather';
import { useState } from 'react';

export default function App() {
  const [savedname, setsavedname] = useState('');
  const [backImg, setbackImg] = useState('');

  function sendcityname(cityname) {
    setsavedname(cityname);
  }

  function backgroundhandler(background) {
    setbackImg(background);
    console.log("prine",backImg);
  }


  return (
    <View style={styles.container}>
      <ImageBackground source={backImg} style={styles.imageBackground}>
        <Inputweather cityname={sendcityname} />
        <Weather cityName={savedname} background={backgroundhandler} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',

  },
});



