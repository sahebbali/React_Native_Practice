import React, { Component } from "react";
import { View, Text,Button } from "react-native";
import {useState} from 'react'
import Component1 from './components/component1.js'

const App= ()=>{
const [state, setState]=useState({
    name: "Sahib",
    age: 30,
    city: "Dhaka"
})

const onChange =()=>{
    setState({name:"Sajid ALi", age: 14, city:"Dinajpur"});
}

  return(
        <View>
          <Text>This is our First Component</Text>
          <Text>Name: {state.name}</Text>
          <Text>Age: {state.age}</Text>
          <Text>City: {state.city}</Text>
          <Button onPress={onChange} title="CLick Me"/>
          <Component1 name="Ali Khan" age="34" city="Rajshahi"/>
        </View>
  )
}
export default App;
