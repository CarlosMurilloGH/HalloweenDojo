import axios from "axios";

const PersonajesHumanos = async (state)=>{
    const peticion = await axios.get('https://rickandmortyapi.com/api/character/?species=Human');
    state(peticion.data.results)
}

export default PersonajesHumanos;

