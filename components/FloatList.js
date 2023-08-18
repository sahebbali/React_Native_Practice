import React from 'react';
import { View, FlatList, Text, Image, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const data = [
  { id: '1', title: 'Bangladesh', subTitle:"Dhaka", imageUrl: 'https://media.istockphoto.com/id/1366452855/vector/bangladesh-national-flag-vektor-illustration.jpg?s=1024x1024&w=is&k=20&c=znJOYPOr4Ravx2gCbgDMvXTZtcGB1JHyISsWaems_Y0=' },
  { id: '2', title: 'India', subTitle:"Dilliy", imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png' },
  { id: '3', title: 'Pakisthan',subTitle:"Islamabad", imageUrl: 'https://cdn.britannica.com/46/3346-004-D3BDE016/flag-symbolism-Pakistan-design-Islamic.jpg' },
  // ... more data ...
];

onClick=(alertTitel)=>{
  Alert(alertTitel )
}
const MyFlatListWithImages = () => {

   const handleItemClick = (title) => {
   Alert.alert('Clicked Item', `You clicked on item: ${title}`);
    
    // Perform additional actions based on the clicked item
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => handleItemClick(item.title)}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.title}>
        <Text style={styles.headerTitle}>{item.title}</Text>
      <Text>{item.subTitle}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
  },
  title:{
    display:"flex",
    flexDirection:"column"
  },
  headerTitle:{
    color:"black",
    fontSize: 30,
    padding:3

  }
});

export default MyFlatListWithImages;
