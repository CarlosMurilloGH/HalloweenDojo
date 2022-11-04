import axios from "axios";

const PersonajesMujeres = async (state)=>{
    const peticion = await axios.get('https://rickandmortyapi.com/api/character/?gender=female');
    state(peticion.data.results)
}

export default PersonajesMujeres;

