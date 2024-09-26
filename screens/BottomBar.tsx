import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { homeStyles } from "../styles/homeStyles";
import { useMenu } from '../MenuContext'; // Adjust the path as needed
import { LinearGradient } from 'expo-linear-gradient';
import { AppNavigationProp, ScreenName } from '../node_modules/@types/navigation/navigation'; // Adjust the path as needed

const BottomBar = () => {
  const { selectedMenu, setSelectedMenu } = useMenu();
    const navigation = useNavigation<AppNavigationProp>();

    const handleMenuItem = (menu: ScreenName, screen: ScreenName) => {
        setSelectedMenu(menu);
        navigation.navigate(screen);
    };

  return (
    <LinearGradient
      colors={['#4CAF50', '#2196F3']} // Green to a mixture of blue
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={homeStyles.bottombar}>
      
      <View style={homeStyles.shops}>
        <TouchableOpacity onPress={() => handleMenuItem('Home', 'Home')}>
          <Icon name="water-outline" size={30} color={selectedMenu === 'Home' ? "#fff" : "#000"} />
        </TouchableOpacity>
        <Text style={[homeStyles.shops1, { color: selectedMenu === 'Home' ? '#fff' : '#000' }]}>Shops</Text>
      </View>

      <View style={homeStyles.tokenimage}>
        <TouchableOpacity onPress={() => handleMenuItem('Token', 'Token')}>
          <View>
            <Icon name="card-outline" size={30} color={selectedMenu === 'Token' ? '#fff' : '#000'} />
          </View>
        </TouchableOpacity>
        <Text style={[homeStyles.tokenimage1, { color: selectedMenu === 'Token' ? '#fff' : '#000' }]}>Reward</Text>
      </View>

      <TouchableOpacity onPress={() => handleMenuItem('Cart', 'Cart')}>
        <View style={homeStyles.cart1}>
          <Icon name="cart" size={30} color={selectedMenu === 'Cart' ? '#fff' : '#000'} />
          <Text style={[homeStyles.carts, { color: selectedMenu === 'Cart' ? '#fff' : '#000' }]}>Cart</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleMenuItem('Orders', 'Orders')}>
        <View style={homeStyles.menu1}>
          <Icon name="menu" size={25} color={selectedMenu === 'Orders' ? '#fff' : '#000'} />
          <Text style={[homeStyles.orders, { color: selectedMenu === 'Orders' ? '#fff' : '#000' }]}>Orders</Text>
        </View>
      </TouchableOpacity>

    </LinearGradient>
  );
};

export default BottomBar;
