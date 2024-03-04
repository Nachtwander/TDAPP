import { StyleSheet } from "react-native";


export const Styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 80,
        height:80,
        resizeMode: 'contain',
    },
    containerElemento:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    }
})