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
import PersonajesHumano from '../components/PersonajeHumanos';

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

    const handleHuman=()=>{
      PersonajesHumanos(setPersonajes)
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
        <Text style={styles.header}>Select your Character</Text>
      </View>

      <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChange={(event)=>{setSearchTerm(event.target.value)}}
      />
      </View>

      <View style={styles.filterContainer}>
      <TouchableOpacity onPress={handleFetch}>
          <Text style={styles.filterButton}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleFemale}>
          <Text style={styles.filterButton}>Female</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleMale}>
          <Text style={styles.filterButton}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleHuman}>
          <Text style={styles.filterButton}>Human</Text>
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
                <View style={styles.nameContainer}>
                  <Text style={styles.nameStyle}>{personaje.name}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <View>
                      <Text>{personaje.species}</Text>
                    </View>
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
  header:{
    color:'black',
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:20,
  },
  inputContainer:{
    width:'90%',
    marginLeft:'auto',
    marginRight:'auto',
    display:'block',
    marginTop:20,
    marginBottom:20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 15,
    backgroundColor:'white',
    borderRadius:20,
    width:'100%',
  },
  background: {
    width:'100%',
    height: '100%',
  },
  filterContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    paddingTop:10,
    paddingBottom:10,
    marginBottom:20,
  },
  filterButton:{
    display:'block',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:20,
    paddingRight:20,
    color:'#555',
    backgroundColor:'white',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
  },
  cardsContainer:{
    display:'grid',
    gridTemplateColumns:'1fr 1fr 1fr',
},
infoContainer:{
    paddingTop:20,
    paddingBottom:20,
    display:'flex',
    flexDirection:'row',
    marginLeft:'auto',
    marginRight:'auto',
    justifyContent:'space-around',
    width:'90%',
},
species:{
  borderStyle:'solid',
  borderColor:'black',
  borderBottomWidth:0,
  borderTopWidth:0,
  borderLeftWidth:0,
  borderRightWidth:1,
  marginLeft:'auto',
  marginRight:'auto',
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
nameContainer:{
  borderStyle:'solid',
  borderBottomWidth:1,
  borderTopWidth:0,
  borderLeftWidth:0,
  borderRightWidth:0,
  width:'80%',
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
    fontSize:20,
    color:'#777',
},
});

export default Dashboard


