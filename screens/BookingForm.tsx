// BookingForm.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { StackNavigationProp } from '@react-navigation/stack';


type RootStackParamList = {
  Home: undefined;
  EventDetails: undefined;  // Add this route to your param list
  BookingForm: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const BookingForm: React.FC = () => {
  const navigation = useNavigation<NavigationProp>(); // Get navigation from the hook
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tickets, setTickets] = useState<number>(1);

  const handleBooking = () => {
    if (!name || !email) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    // Display confirmation
    Alert.alert(
      'Booking Confirmation',
      `Name: ${name}\nEmail: ${email}\nTickets: ${tickets}`,
      [
        {
          text: 'OK',
          onPress: () => {
            // Navigate to the home screen after pressing OK
            navigation.navigate('Home'); 
            
            // Reset the form
            setName('');
            setEmail('');
            setTickets(1);
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Booking Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Text style={styles.label}>Number of Tickets:</Text>
      <TextInput
        style={styles.input}
        placeholder="1"
        value={String(tickets)}
        onChangeText={(value) => setTickets(Number(value))}
        keyboardType="numeric"
      />
      <Button title="Submit" onPress={handleBooking} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
  },
});

export default BookingForm;
