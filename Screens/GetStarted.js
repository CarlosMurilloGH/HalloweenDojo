import { View,Text, Image,Dimensions,StyleSheet } from 'react-native';
import BotonTerciario from '../components/BotonTerciario';


function GetStarted({navigation}) {

  var {width} = Dimensions.get('window'); 
  var {height} = Dimensions.get('window'); 

  return (
    <View>
      <View>
        <Image
        style={{
          width:width,
          height:height/2,
          resizeMode: 'cover'
        }}
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/halloweenprojectglobant.appspot.com/o/halloween-time.png?alt=media&token=3f46e941-7610-465b-9c4e-709781b9ceda'
        }}
        />
      </View>
      
      <View>
        <View>
          <Text style={styles.paragraph}>It is a long established fact that a reader will be distracted by the readable conent of a page when looking at its layout</Text>
          <BotonTerciario 
          text="Get Started"
          onPress={()=>{
            navigation.navigate('SignUp')
          }}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  paragraph:{
    marginTop:30,
    textAlign: 'center',
    width:'90%',
    marginRight:'auto',
    marginLeft:'auto',
    marginBottom:20
  },
});

export default GetStarted