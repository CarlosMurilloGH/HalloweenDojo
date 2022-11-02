import { StyleSheet,Text,TouchableOpacity } from 'react-native';

function LinkTexto(props) {

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

export default LinkTexto;

const styles = StyleSheet.create({
    buttonText:{
        color:'#FFF',
        fontSize:15,
    },
})


