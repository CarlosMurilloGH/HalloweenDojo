import { StyleSheet,Text,TouchableOpacity } from 'react-native';

function BotonTerciario(props) {

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

export default BotonTerciario;

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor:'#FFB41F',
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
        color:'#FFF',
        fontWeight:'bold',
        fontSize:15,
    },
})



