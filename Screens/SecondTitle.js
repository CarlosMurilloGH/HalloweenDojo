import { View,Text, StyleSheet, Image, Dimensions, SafeAreaView } from 'react-native';
import BotonPrincipal from '../components/BotonPrincipal';
import BotonSecundario from '../components/BotonSecundario';

function SecondTitle({navigation}) {

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
          uri: 'https://firebasestorage.googleapis.com/v0/b/halloweenprojectglobant.appspot.com/o/second-title.png?alt=media&token=1b89f20e-30ca-4148-bb08-48e9b49eedb1'
        }}
      />
      </View>
      
      <View>
        <View>
          <Text style={styles.title}>Second Title</Text>
          <Text style={styles.paragraph}>It is a long established fact that a reader will be distracted by the readable conent of a page when looking at its layout</Text>
          <BotonPrincipal 
          text="Next"
          onPress={()=>{
            navigation.navigate('GetStarted')
          }}
          />
          <BotonSecundario 
          text="Skip"
          onPress={()=>{
            navigation.navigate('Login')
          }}
          />
        </View>
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

export default SecondTitle;