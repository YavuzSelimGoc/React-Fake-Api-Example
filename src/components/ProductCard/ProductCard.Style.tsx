import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:"#e0e0e0",
        borderColor:"#bdbdbd",
        borderWidth:1,
        margin:10,
        width:(Dimensions.get('screen').width/2) -15,
        borderRadius:15,
        padding:10,
        alignItems:"center",
        justifyContent:"center",
        height:Dimensions.get('screen').height/3.8

    },
    image:{
        width : 100,
        height:100,
        borderRadius:5,
        resizeMode: 'strech',
        backgroundColor:"white"
    },
    bodyContainer:{
    marginBottom:5,
    flex:-0.5

    },
    title:{
        fontSize:15,
        fontWeight:"bold",
        textAlign:"center",
        marginTop:20

    },
    price:{
        fontWeight:"bold",
        textAlign:"right",
        marginTop:8,
        color:"purple",
        fontStyle:"italic"

    }
})