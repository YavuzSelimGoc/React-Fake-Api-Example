import LottieView from "lottie-react-native";
import React from 'react'

const loading = () => {
  return (
    <LottieView style={{flex: 1}}  source={require("../../assets/loading.json")} autoPlay loop />
    
  )
}

export default loading