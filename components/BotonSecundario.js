import { StyleSheet,Text,TouchableOpacity } from 'react-native';

function BotonSecundario(props) {

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

export default BotonSecundario;

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor:'white',
        marginBottom:10,
        width:'80vw',
        margin:'auto',
    },
    buttonText:{
        textAlign:'center',
        color:'#999',
    },
})