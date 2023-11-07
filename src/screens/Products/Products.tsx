import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'
import Styles from './Product.Style'
import {API_URL} from '@env'
import useFetch from '../../Hooks/useFetch'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import ProductCard from '../../components/ProductCard'
import SearchBar from '../../components/SearchBar'

const Products = ({navigation}) => {
  const {loading,data,error} = useFetch("https://"+API_URL)
  const[list,setList]=useState([])

  const handleSearch=(text)=>{
    const filteredList=data.filter(product=>{
        const searchedText=text.toLowerCase();
        const currentTitle = product.title.toLowerCase();

        return currentTitle.indexOf(searchedText) > -1;
    })
    setList(filteredList);

}

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
          <SearchBar onSearch={handleSearch} />

      <FlatList
      data={list}
      renderItem={renderProduct}
      numColumns={2}
      />
    </SafeAreaView>
  )
}

export default Products