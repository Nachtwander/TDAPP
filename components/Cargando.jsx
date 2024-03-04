import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import { Styles } from '../styles/Styles';

export function Cargando ({texto}){
    return(
        <View style={Styles.container}>
          <Text>{texto}</Text>
          <ActivityIndicator size="large"/>
        </View>
    )
}