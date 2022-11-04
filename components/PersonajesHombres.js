import axios from "axios";

const PersonajesHombres = async (state)=>{
    const peticion = await axios.get('https://rickandmortyapi.com/api/character/?gender=male');
    state(peticion.data.results)
}

export default PersonajesHombres;

