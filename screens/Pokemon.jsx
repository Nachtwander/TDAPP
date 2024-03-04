import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator} from 'react-native'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler'
import { Cargando } from '../components/Cargando'
import { Error } from '../components/Error'
import { PKMView } from '../PKMView';


export const Pokemon = ({navigation}) => {

    const [data, setData] = useState ([]) //arreglo vacio "data"

    //* cuando esta cargando la data
    const [cargando, setCargando] = useState(true)

    //*controlar Errores
    const[error, setError] = useState(null)

    


    
    useEffect (()=>{
        //*get de la pokeapi en la variable pokemon y se hace SET en la variable data
        const fetchPokemon = async () =>{

          try {
            const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
            setData(pokemon.data.results)
            setError(null)
          } catch (error) {
            console.error(`error al obtener datos del servicio, Error: `, error)
            setError(error)
          } finally{
            setCargando(false)
          }  
        }
        //*se ejecuta el fetchPokemon
        fetchPokemon()
    },[])
    //console.log(data)

    //* solo se mostrara mientras carga la api.
    if(cargando){
      return (
        <Cargando texto="Cargando..."></Cargando>
      )
    }

    //* solo se mostrara cuando falle la api.
    if(error){
      return (
        <Error texto="Ocurrio un error al cargar los datos."></Error>
      )
    }

 
    
    
  return (
    <View style={stylesMain.container}>
      <Text style={stylesMain.fuenteBlanco}>Los Pokimons!</Text>


      {/*FlatList recibe la variable data, renderiza la data como item, se utiliza la funcion
      PKMView para visualizar los pokemon usando los item renderizados, se le agrega TouchableOpacity */}
      <FlatList
      data = {data}
      renderItem={({item})=> 
      <TouchableOpacity style={{padding: 10}}
      onPress={()=> navigation.navigate("Detalles", {pokemon: item})}>
      <PKMView item={item}/>
      </TouchableOpacity>
      }
      
      keyExtractor={(item)=> item.url}
      />  
    <StatusBar style="auto" />
    </View>
  );
}


const stylesMain = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#deddd9',
      alignItems: 'center',
      justifyContent: 'center',
    },
    fuenteBlanco: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fafafa',
    },
  });
  

