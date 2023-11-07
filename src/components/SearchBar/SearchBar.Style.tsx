import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    Input:{
        fontSize:22,
        textAlign:'center',
        color:"black"
    },
    Container:{
        backgroundColor:'#eceff1',
        width:Dimensions.get('window').width,
        height:35,
        padding:8,
        margin:5,
        borderRadius:15,
        borderWidth:1,
        borderColor:"#e0e0e0",

        
    }
})