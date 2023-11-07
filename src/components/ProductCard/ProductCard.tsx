import { View, SafeAreaView, Text, Image, TouchableWithoutFeedback } from 'react-native'

import React from 'react'
import Styles from './ProductCard.Style'


const ProductCard = ({product,onSelect}) => {
    return (
      <TouchableWithoutFeedback onPress={onSelect}>
   <View style={Styles.Container}>
        <Image style={Styles.image} source={{uri:product.image}}/>
        <View style={Styles.bodyContainer}>
          <Text style={Styles.title}>{product.title}</Text>
          <Text style={Styles.price}>{product.price} TL</Text>
  
        </View>
      </View>
      </TouchableWithoutFeedback>
     
    )
  }

export default ProductCard