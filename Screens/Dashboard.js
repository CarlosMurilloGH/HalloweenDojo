import { View,Text, Image,Dimensions,StyleSheet } from 'react-native';
import firebaseApp from '../firebase/fb';
import { getAuth,signOut } from 'firebase/auth';
import BotonPrincipal from '../components/BotonPrincipal';
import React,{ useEffect,useState } from 'react';
import Personajes from '../components/Personajes';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput, TouchableOpacity } from 'react-native-web';
import PersonajesMujeres from '../components/PersonajesMujeres';
import PersonajesHombres from '../components/PersonajesHombres';

const auth = getAuth(firebaseApp);

function Dashboard({navigation}) {

    var {height} = Dimensions.get('window'); 
    
    const [personajes,setPersonajes]=useState(null);
    const [searchTerm,setSearchTerm]=useState('');

   async function logout(auth){
      await signOut();
      navigation.navigate('Login')
    }

    useEffect(()=>{
      Personajes(setPersonajes);
    },[])

    const handleFetch=()=>{
      Personajes(setPersonajes)
    }

    const handleFemale=()=>{
      PersonajesMujeres(setPersonajes)
    }

    const handleMale=()=>{
      PersonajesHombres(setPersonajes)
    }

  return (
    <View>
      <LinearGradient
      // Background Linear Gradient
      colors={[ '#efe14a','#98ce4c']}
      style={styles.background}
      >
      <View>
      <View>
        <Text>Select your Character</Text>
      </View>

      <View>
      <TextInput
        style={styles.input}
        placeholder="Buscar personajes"
        onChange={(event)=>{setSearchTerm(event.target.value)}}
      />
      </View>

      <View>
      <TouchableOpacity onPress={handleFetch}>
          <Text>All</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleFemale}>
          <Text>Female</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleMale}>
          <Text>Male</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer} >               
        {
        personajes != null? (
            personajes.filter((personaje)=>{
              if(searchTerm == ''){
                return personaje
              }else if(personaje.name.toLowerCase().includes(searchTerm.toLocaleLowerCase() )){
                return personaje
              }
            }).map((personaje,id) =>(
            <TouchableOpacity key={personaje.id} style={styles.personajeCard} onPress={()=>{
              navigation.navigate('Profile',{personaje})
            }}>
                <Image
                    style={{
                    height:height/2,
                    resizeMode: 'contain',
                    borderTopRightRadius:20,
                    borderTopLeftRadius:20,
                    marginRight:'auto',
                    marginLeft:'auto',
                    display:'block',
                    marginBottom:0,
                    }}
                    source={{ uri: `${personaje.image}` }} 
                />
              <View style={styles.textContainer}>
                <Text style={styles.nameStyle}>{personaje.name}</Text>
                <View style={styles.infoContainer}>
                    <Text>{personaje.species}</Text>
                    <Text>{personaje.gender}</Text>
                </View>
              </View>
            </TouchableOpacity>
            ))
        ):(<Text>no hay personajes</Text>)
        }
    </View>

        <BotonPrincipal
        text="LogOut"
        onPress={logout}
        />
      </View>
      </LinearGradient>
    </View>
  )
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor:'white',
  },
  background: {
    width:'100%',
    height: '100%',
  },
  cardsContainer:{
    display:'grid',
    gridTemplateColumns:'1fr 1fr 1fr',
},
infoContainer:{
    paddingTop:20,
    paddingBottom:20,
    display:'flex',
},
textContainer:{
    backgroundColor:'white',
    paddingTop:0,
    marginTop:0,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
},
personajeCard:{
    display:'block',
    width:'80%',
    borderRadius:20,
    marginBottom:10,
    columnGap:10,
    marginLeft:'auto',
    marginRight:'auto',
},
nameStyle:{
    display:'block',
    marginLeft:'auto', 
    marginRight:'auto',
    textAlign:'center',
    paddingTop:20,
    paddingBottom:20,
},
});

export default Dashboard


