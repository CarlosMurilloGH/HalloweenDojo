import {  View,Text, Image, Dimensions, SafeAreaView } from 'react-native';




function SplashOne({navigation}) {

  function redirectMain(){
    navigation.navigate('MainTitle')
  }

  setTimeout(redirectMain, 4000)

var {width} = Dimensions.get('window'); 
var {height} = Dimensions.get('window'); 



  return (
    <SafeAreaView>
      <Image
  style={{
    width:width,
    height:height,
    resizeMode: 'cover'
  }}
  source={{
    uri: 'https://firebasestorage.googleapis.com/v0/b/halloweenprojectglobant.appspot.com/o/splashscreen.jpg?alt=media&token=1970ce57-ef8c-4f7f-b675-65f6003db214'
  }}
/>
    </SafeAreaView>
  )
}

export default SplashOne