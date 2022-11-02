import { View,Text, Image, Dimensions, StyleSheet, SafeAreaView } from 'react-native';
import BotonPrincipal from '../components/BotonPrincipal';
import BotonSecundario from '../components/BotonSecundario';
import Login from '../Screens/Login';



function MainTitle({navigation}) {

  var {width} = Dimensions.get('window'); 
  var {height} = Dimensions.get('window'); 

  return (
    <SafeAreaView>
      <View>
        <Image
        style={{
          width:width,
          height:height/2,
          resizeMode: 'cover'
        }}
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/halloweenprojectglobant.appspot.com/o/maintitle.png?alt=media&token=37d37e41-f753-4da6-89f9-490f1dd0e70c'
        }}
      />
      </View>

      <View>
        <Text style={styles.title}>MainTitle</Text>
        <Text style={styles.paragraph}>It is a long established fact that a reader will be distracted by the readable conent of a page when looking at its layout</Text>
        <BotonPrincipal 
        text="Next"
        onPress={()=>{
          navigation.navigate('SecondTitle')
        }}
        />
        <BotonSecundario 
        text="Skip"
        onPress={()=>{
          navigation.navigate('Login')
        }}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    marginTop: 16,
    marginBottom:16,
    color: '#777777',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  paragraph:{
    textAlign: 'center',
    width:'90%',
    marginRight:'auto',
    marginLeft:'auto',
    marginBottom:20
  },
});

export default MainTitle