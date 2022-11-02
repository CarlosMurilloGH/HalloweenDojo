import React,{useState} from 'react';
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth';
import firebaseApp from '../firebase/fb';
import { collection, doc, getFirestore, setDoc } from 'firebase/firestore'; 
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, StyleSheet,Image, Dimensions, SafeAreaView } from 'react-native';
import BotonPrincipal from '../components/BotonPrincipal';
import BotonSecundario from '../components/BotonSecundario';

const auth= getAuth(firebaseApp);

function SignUp({ navigation }) {

  var {width} = Dimensions.get('window'); 
  var {height} = Dimensions.get('window'); 
  
  const firestore = getFirestore(firebaseApp);
  const navigate=useNavigation();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 

  async function registrarUsuario(email, password, name){
    const infoUsuario = await createUserWithEmailAndPassword(auth,email,password)
    .then((usuarioFirebase)=>{
      return usuarioFirebase;
    });

    console.log(infoUsuario.user.uid)

    const collectionRef=collection(firestore,'users');
    const docuRef = doc(collectionRef,infoUsuario.user.uid)
    setDoc(docuRef,{email:email,name:name})
    navigation.navigate('Dashboard')
  }

  function submitHandler(e){
    e.preventDefault();
    registrarUsuario(email,password,name);
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
        <View  style={styles.titleloginContainer}>
          <Text style={styles.titlelogin}>Welcome!</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="User Name"
          onChange={e => setName(e.target.value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChange={e => setPassword(e.target.value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
        />

        <BotonPrincipal
          text="Sign In"
          onPress={submitHandler}
        />
         <Text>Don't have an account?</Text>
        
        <BotonSecundario 
        text="Login Up"
        onPress={()=>{
          navigation.navigate('Login')
        }}
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
  login:{
    margin:'auto',
    display:'flex',
  },
  titlelogin:{
    fontSize: 25,
    color:'white',
  },
  titleloginContainer:{
    width:'80%',
    display:'block',
  }
});

export default SignUp;

