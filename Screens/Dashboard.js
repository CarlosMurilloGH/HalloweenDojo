import { View,Text, Image,Dimensions,StyleSheet } from 'react-native';
import firebaseApp from '../firebase/fb';
import { getAuth,signOut } from 'firebase/auth';
import BotonPrincipal from '../components/BotonPrincipal';
import axios from 'axios';
import React,{ useEffect,useState } from 'react';
import Personajes from '../components/Personajes';
import PersonajesCard from '../components/PersonajesCard';

const auth = getAuth(firebaseApp);

function Dashboard({navigation}) {

    var {width} = Dimensions.get('window'); 
    var {height} = Dimensions.get('window'); 
    
    const [personajes,setPersonajes]=useState(null);

   async function logout(auth){
      await signOut();
      navigation.navigate('Login')
    }

    useEffect(()=>{
      Personajes(setPersonajes);
    },[])


  return (
    <View>
        <Text>Dashboard</Text>
        <BotonPrincipal
        text="LogOut"
        onPress={logout}
        />

        <View>
          <PersonajesCard personajes={personajes}/>
        </View> 

    </View>
  )
}



export default Dashboard

