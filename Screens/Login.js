import React,{useState} from 'react';
import { View, Text, TextInput, StyleSheet,Image, Dimensions, SafeAreaView } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseApp from '../firebase/fb';
import { useNavigation } from '@react-navigation/native';
import BotonPrincipal from '../components/BotonPrincipal';

const auth= getAuth(firebaseApp);

function Login({ navigation }) {

  var {width} = Dimensions.get('window'); 
  var {height} = Dimensions.get('window'); 

  const navigate=useNavigation();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 

  function handleLogin(e){
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password);
    navigation.navigate('Dashboard')
  }
  return (

    <SafeAreaView style={styles.background}>
      <View>
        <Image
        style={{
          width:width,
          height:height/2,
          resizeMode: 'cover'
        }}
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/halloweenprojectglobant.appspot.com/o/SignUp.png?alt=media&token=176c6500-2bd0-40bd-9d30-6b323d34ce5a'
        }}
      />
      </View>

      <View>
        <Text style={styles.titlelogin}>Hi There!</Text>
        <Text style={styles.titlelogin}>Welcome back</Text>
          <TextInput
            style={styles.input}
            placeholder="UserName/Email"
            onChange={e => setEmail(e.target.value)}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChange={e => setPassword(e.target.value)}
          />

          <BotonPrincipal
            text="Sign In"
            onPress={handleLogin}
          />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    marginBottom:10,
    backgroundColor:'#E6BF8D',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft:10,
    width:'80%',
    marginLeft:'auto',
    marginRight:'auto',
    color:'white',
  },
  background:{
    backgroundColor:'#f9b154',
  },
  titlelogin:{
    fontSize: 25,
    color:'white',
  },
});

export default Login;