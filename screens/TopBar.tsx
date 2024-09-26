import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { homeStyles } from '../styles/homeStyles'; // Adjust the path as needed

const TopBar = () => {
  const navigation = useNavigation();

  
  return (
    <View style={homeStyles.containeravatar}>
      <TouchableOpacity >
        <Image
          source={require('../assets/event 1.jpeg')} // Adjust the path as needed
          style={homeStyles.avatar}
        />
      </TouchableOpacity>
      
      <View style={homeStyles.nameToken}>
        <Text style={homeStyles.name}>Hi Peter👋🏾</Text>
       
      </View>
      
      <View style={homeStyles.location}>

        
        <Text style={homeStyles.home}>Bypass, Waatalam</Text>
        <Text >47Km</Text>
      </View>
     
    </View>
  );
};

export default TopBar;