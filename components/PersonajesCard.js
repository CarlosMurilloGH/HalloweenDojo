import React from 'react';
import { View,Text, Image,Dimensions,StyleSheet } from 'react-native';


export default function PersonajesCard(props) {

    const {personajes} = props;
    var {width} = Dimensions.get('window'); 
    var {height} = Dimensions.get('window'); 

  return (
    <View style={styles.cardsContainer} >               
        {
        personajes != null? (
            personajes.map((personaje,id) =>(
            <View key={personaje.id} style={styles.personajeCard}>
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
            </View>
            ))
        ):(<Text>no hay personajes</Text>)
        }
    </View>
  )
}

const styles = StyleSheet.create({
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
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: '100%',
    },
  });