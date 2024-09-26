import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import { MenuProvider } from './MenuContext';

const Stack = createStackNavigator ();

export default function App() {
  return (
    <SafeAreaView style={{backgroundColor: '#ffffff', flex: 1}}>
    <MenuProvider>
      <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
          
    </NavigationContainer>
    </MenuProvider>
   
    
   </SafeAreaView> 
  );
}


