import React from 'react';
import { View,Text, Image,Dimensions,StyleSheet,Button } from 'react-native';


function Profile(props){

    var {height} = Dimensions.get('window'); 
    console.log(props);
    const {name,image,species,gender,status,location}= props.route.params.personaje;
   
    return(
        <View>
            <Button
                title="Go back"
                onPress={()=>{
                    navigation.navigate('Dashboard')
                }}
            />
            <View>
                <Image
                    style={{
                    width:'100%',
                    height:height/2,
                    resizeMode: 'cover',
                    marginRight:'auto',
                    marginLeft:'auto',
                    display:'block',
                    }}
                    source={`${image}`}
                />
            </View>
            <View style={styles.infoContainer}>
                    <View>
                        <Text style={styles.nameStyle}>{name}</Text>
                        <Text style={styles.subheader}>{species},{gender}</Text>
                    </View>

                    <View style={styles.infoTextContainer}>
                        <View>
                            <Text style={styles.infoheader}>Last know location:</Text>
                            <Text style={styles.information}>{location.name}</Text>
                        </View>

                        <View>
                            <Text style={styles.infoheader}>First seen in:</Text>
                            <Text style={styles.information}>{location.name}</Text>
                        </View>

                        <View>
                            <Text style={styles.information}>Status:{status}</Text>
                        </View>

                    </View>
            </View>
            
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
    display:'block',
    borderTopRightRadius:50,
    borderTopLeftRadius:50,
  },
  infoTextContainer:{
    marginLeft:'auto',
    marginRight:'auto',
    display:'block',
    width:'90%',
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
      fontSize:20,
      color:'#777777',
      fontWeight:'bold',
  },
  subheader:{
      display:'block',
      marginLeft:'auto', 
      marginRight:'auto',
      textAlign:'center',
      fontSize:17,
      color:'#777777',
  },
  infoheader:{
    fontSize:17,
    color:'#777777',
  },
  information:{
    fontSize:17,
    color:'#555',
    fontWeight:'bold',
  }
  });

export default Profile;