import { View, Text, Image } from 'react-native'
import React from 'react'
import useFetch from '../../Hooks/useFetch'
import Styles from './Details.Style'

const Details = ({route}) => {
  
  const {id}=route.params
  const {loading,data,error} = useFetch("https://fakestoreapi.com/products/"+id)

  return (
    // <View>
    //    <Image style={Styles.image}  source={{uri:data.image}}/> 
    //    <Text style={Styles.title} >{data.title}</Text>
    //   <Text style={Styles.description} >{data.title}</Text>
    //   <Text style={Styles.price} >{data.price}</Text> 
    //   <Text style={Styles.price} >{id}</Text>
    // </View>

<View style={Styles.container}>
<View style={Styles.imageContainer}>
  <Image
    source={{uri:data.image}}// Resmi buraya eklemelisiniz
    style={Styles.image}
  />
</View>
<View style={Styles.textContainer}>
  <Text style={Styles.title}>{data.title}</Text>
  <Text style={Styles.description}>{data.title}</Text>
  <Text style={Styles.price}>{data.price}</Text>
</View>
</View>
  )
}

export default Details