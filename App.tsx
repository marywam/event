import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator ();

export default function App() {
  return (
    <SafeAreaView style={{backgroundColor: '#ffffff', flex: 1}}>
    
      <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
          
    </NavigationContainer>
   
    
   </SafeAreaView> 
  );
}


