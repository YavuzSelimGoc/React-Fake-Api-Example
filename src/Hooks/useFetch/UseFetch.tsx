import { View, Text } from 'react-native'
import React, { useEffect,useState } from 'react'
import axios from 'axios'

const UseFetch = (url) => {
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(null)
  const [data,setData]=useState([])

  const fetchData = async () =>{
    try{
     const {data:ResponseData}= await  axios.get(url)
     setData(ResponseData)
     setLoading(false)
    }
    catch(err) {
     setError(err.message)
     setLoading(false)
    }
   } 

  useEffect(()=>{fetchData()},[])
  return {error,loading,data}

}

export default UseFetch