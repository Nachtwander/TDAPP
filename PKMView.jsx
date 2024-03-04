import { View, Text, Image } from "react-native"
import { useEffect, useState } from 'react'
import axios from "axios"
import { Cargando } from "./components/Cargando"
import { Error } from "./components/Error"
import { Styles } from "./styles/Styles"

export function PKMView({item}) {
    const [data, setData] = useState ([]) //arreglo vacio "data"

    const [cargando, setCargando] = useState(true)

    const[error, setError] = useState(null)

    useEffect (()=>{
        
        const fetchPokemon = async () =>{

          try {
            const pokemon = await axios.get(item.url)
            setData(pokemon.data)
            setError(null)
          } catch (error) {
            console.error(`error al obtener datos del servicio, Error: `, error)
            setError(error)
          } finally{
            setCargando(false)
          }  
        }
        fetchPokemon()
    },[])

    
    if(cargando){
        return (
          <Cargando texto="Cargando..."></Cargando>
        )
      }
  
      
      if(error){
        return (
          <Error texto="Ocurrio un error al cargar los datos de un pokemon."></Error>
        )
      }

    return <View style={Styles.containerElemento}>
        <Image source={{uri: data.sprites.front_default}} style={Styles.image}/>
        <Image source={{uri: data.sprites.back_default}} style={Styles.image}/>
        <View>
            <Text>{item.name}</Text>
            <Text>{item.url}</Text>
        </View>
    </View>
}