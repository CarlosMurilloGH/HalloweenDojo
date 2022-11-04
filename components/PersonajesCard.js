import React from 'react';
import { Text } from 'react-native-web';

export default function PersonajesCard(props) {

    const {personajes} = props;

  return (
    <View>          
        {
        personajes != null? (
            personajes.map((personaje,id) =>(
            <View key={personaje.id}>
              <Text>{personaje.name}</Text>
            </View>
          ))
        ):(<Text>no hay personajes</Text>)
      }</View>
  )
}
