import LottieView from "lottie-react-native";
import React from 'react'

const error = () => {
  return (
    <LottieView style={{flex: 1}}  source={require("../../assets/error.json")} autoPlay loop />

  )
}

export default error