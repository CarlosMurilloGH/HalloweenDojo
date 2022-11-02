import { View,Text, Image,Dimensions,StyleSheet } from 'react-native';
import firebaseApp from '../firebase/fb';
import { getAuth,signOut } from 'firebase/auth';
import BotonPrincipal from '../components/BotonPrincipal';
import axios from 'axios';
import React,{ useEffect,useState } from 'react';

const auth = getAuth(firebaseApp);

function Dashboard({navigation}) {

    var {width} = Dimensions.get('window'); 
    var {height} = Dimensions.get('window'); 
    
    const [pokemon,setPokemon]=useState('');

   async function logout(auth){
      await signOut();
      navigation.navigate('Login')
    }

    const getPokemons=()=>{
      axios.get('https://pogoapi.net/api/v1/raid_exclusive_pokemon.json')
      .then(resp =>{
        for (let i =0; i < resp.data.results.length;i++){
          axios.get(resp.data.results[i].name)
          .then(result =>{
            setPokemon(prevArray =>[...prevArray,result.data])
          })
        }
      })
    }

    useEffect(()=>{
      async function getPokemons(){
        let res = await axios.get('https://pogoapi.net/api/v1/raid_exclusive_pokemon.json');
        console.log(res);
      }
    })

  return (
    <View>
        <Text>Dashboard</Text>
        <BotonPrincipal
        text="LogOut"
        onPress={logout}
        />
        <View>
         <Text>holitas</Text>
        </View>

    </View>
  )
}



export default Dashboard