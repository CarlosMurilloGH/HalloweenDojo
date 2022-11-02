import { StyleSheet,Text,TouchableOpacity } from 'react-native';

function BotonPrincipal(props) {

    const {onPress,text}= props

  return (
    <TouchableOpacity
     style={styles.buttonContainer}
     onPress={onPress}
    >
        <Text style={styles.buttonText}>
            {text}
        </Text>
    </TouchableOpacity>
  )
}

export default BotonPrincipal;

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor:'white',
        borderColor:'#FFB41F',
        borderWidth:1,
        marginBottom:10,
        width:'80vw',
        margin:'auto',
        paddingTop:13,
        paddingBottom:13,
        borderRadius:20, 
    },
    buttonText:{
        textAlign:'center',
        color:'#FFB41F',
        fontWeight:'bold',
        fontSize:15,
    },
})