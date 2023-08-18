import React, { Component } from "react";
import { View, Text,Button } from "react-native";
import {useState} from 'react'
import Component1 from './components/component1.js'
import FloatList from "./components/FloatList.js";

const App= ()=>{

  return(
        <View>
          <FloatList />
        </View>
  )
}
export default App;
