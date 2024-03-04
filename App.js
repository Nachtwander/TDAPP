
//componentes React Native
import { StyleSheet, View } from 'react-native'
//navegacion
import { NavigationContainer } from '@react-navigation/native'
//pantallas
import { NavGabetero } from './components/Drawer'



const estilo = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#070708',
    marginTop: 100,
    marginLeft: 12,
    marginRight: 12,
  }
})

/* los elementos htlm son PROPS */
export default function App() {
  return (
  
  <NavigationContainer style={estilo.container}>
    
    <NavGabetero></NavGabetero>
    
  </NavigationContainer>
  
  )
}