import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Define the parameter list for the navigation stack
type RootStackParamList = {
  Home: undefined;
  EventDetail: { eventId: string }; // EventDetail route expects an eventId
};

type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
  image: any;
};

const events: Event[] = [
  {
    id: '1',
    title: 'Music Concert',
    date: '2024-10-01',
    location: 'New York',
    image: require('../assets/event 1.jpeg'),
  },
  {
    id: '2',
    title: 'Art Exhibition',
    date: '2024-10-15',
    location: 'San Francisco',
    image: require('../assets/event 1.jpeg'),
  },
  {
    id: '3',
    title: 'Tech Conference',
    date: '2024-11-05',
    location: 'Chicago',
    image: require('../assets/event 1.jpeg'),
  },
];

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter events based on the search query
  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }: { item: Event }) => (
    <TouchableOpacity
      style={styles.eventCard}
      onPress={() => navigation.navigate('EventDetail', { eventId: item.id })}
    >
      <Image source={item.image} style={styles.thumbnail} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.location}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search events..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredEvents}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  list: {
    paddingBottom: 20,
  },
  eventCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
    elevation: 2,
  },
  thumbnail: {
    width: '100%',
    height: 150,
  },
  detailsContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default HomeScreen;
