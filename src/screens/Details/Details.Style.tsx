import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
//     Container:{
//         alignItems:'center',
//         justifyContent:'center',
//         padding:10
//     },
//     title:{
// textAlign:'center',
// fontSize:14,
// fontWeight:'bold'
//     },
//     image:{
//         width:Dimensions.get('screen').width/3,
//         height:Dimensions.get('screen').height/3,
//     },
//     price:{
// margin:100
//     },
//     description:{

//     }
container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    flex: 2/5,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode:"stretch"
  },
  image: {
    width: '80%', // Resim boyutunu ayarlayın
    height: '80%', // Resim boyutunu ayarlayın
    marginTop:50
  },
  textContainer: {
    flex: 3/5,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:"right"
  },

})