import { Text, View } from 'react-native'
import { Styles } from "../styles/Styles"


export function Error ({texto}){
    return (
        <View style={Styles.container}>
          <Text>{texto}</Text>
        </View>
    )
}