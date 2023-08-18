import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const data = [
  { id: '1', title: 'Bangladesh is small' },
  { id: '2', title: 'Dhaka is old' },
  { id: '3', title: 'Dinajpur is a new' },
   { id: '4', title: 'Bangladesh is small' },
  { id: '5', title: 'Dhaka is old' },
  { id: '6', title: 'Dinajpur is a new' },
  // ... more data ...
];

const MyFlatList = () => {
  const renderItem = ({ item }) => (
    <View>
      <Text style={styles.titel}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MyFlatList;

const styles= StyleSheet.create({
  titel:{
    color:"gray",
    fontSize:20,
    padding:10

  }
})