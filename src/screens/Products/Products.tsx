import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'
import Styles from './Product.Style'
import {API_URL} from '@env'
import useFetch from '../../Hooks/useFetch'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import ProductCard from '../../components/ProductCard'

const Products = ({navigation}) => {
  const {loading,data,error} = useFetch("https://"+API_URL)
  const handleProductSelect=(id)=>{
    navigation.navigate('Details',{id})
  }
  

 
    const renderProduct = ({item}) => <ProductCard product={item} onSelect={() => handleProductSelect(item.id)}  />
    if(loading)
    {
      return <Loading/>
    }
    if(error){
     return <Error/>
    }
  return (
    <SafeAreaView style={Styles.Container}>

      <FlatList
      data={data}
      renderItem={renderProduct}
      numColumns={2}
      />
    </SafeAreaView>
  )
}

export default Products