import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Styles from './SearchBar.Style'

const SearchBar=(props)=>{
    
    return(
    <View style={Styles.Container}>
        <TextInput style={Styles.Input}
        placeholder="Ürün Ara..."
        onChangeText={props.onSearch}
        />
    </View>
)}

export default SearchBar