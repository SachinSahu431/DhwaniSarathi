import React ,{useState}from 'react';
import { View, Text, Image,  TouchableOpacity, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
// import './locales/i18n'; 
 import {useTranslation} from 'react-i18next'; 

  
const BeforeYouStart = ({navigation}) => {
    
  const [loudness, setLoudness]= useState(40); 
  const handleLoudnessChange = (value)=>{
    setLoudness(value); 
  }
  //const [currentLanguage, setLanguage] = useState('hi'); 
  const {t,i18n} =useTranslation(); 
  // const changeLanguage= value=>{
  //   i18n.changeLanguage(value)
  //   .then(()=>setLanguage(value))
  //   .catch(err => console.log(err)); 
  // }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('Before You Start..')}</Text>
      <Image style={styles.image}
        source={require('../assets/nosoundwhite.png')}
        resizeMode='cover'/>
      <Text style={styles.title2}>{t('Quiet Place')}</Text>

      <Image style={styles.image}
        source={require('../assets/headphones.png')}
        resizeMode='cover'/>
      <Text style={styles.title2}>{t('Headphones')}</Text>

      <Text style={styles.title2}>{t('Ambient Sound')}</Text>
      <View style={styles.sliderContainer}>
      <Text style={styles.sliderLabel}>0</Text>
      <Slider style={styles.slider}
        minimumValue={0}
        maximumValue={1000}
        onValueChange={handleLoudnessChange}
        minimumTrackTintColor= "#D4AF37"
        maximumTrackTinkColor="white"
        thumbTintColor="#D4AF37"/>
      <Text style={styles.sliderLabel1}>{t('Loud')}</Text>

      
      </View>
      <TouchableOpacity style={styles.Button} onPress={()=>{navigation.navigate('RightEar')}}>
        <Text style={styles.buttonText}>{t('Proceed to Test!!')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: "center"
    
  },
  sliderContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50,
    
  },
  sliderLabel: {
    fontSize: 15,
    color: 'white',
  },
  sliderLabel1: {
    fontSize: 15,
    color: 'red',
  },
  slider: {
    flex: 1,
    width:"100%",
    
  },
  image: {
    width: 70,
    height: 70,
    alignContent: 'center',
    marginBottom: 10
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 40, 
    textAlign: "center"
  },
  title2: {
    fontSize : 20, 
    color: 'white',
    marginBottom: 30,
    textAlign: "left", 
   
  }, 
  subtitle: {
    fontSize: 15,
    color: 'white',
    marginBottom: 10,
    textAlign: "left",
  },
  Button: {
    backgroundColor: 'blue', // Greenish Yellow
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 80,
    width: '100%'
  },
  educatorContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  educatorText: {
    color: 'white',
    marginBottom: 10,
  },
  educatorButton: {
    backgroundColor: '#D4AF37', // Greenish Yellow
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    // fontWeight: 'bold'
  },

  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
    color: 'white',
    fontStyle: 'italic'
    
  },
});

export default BeforeYouStart;
