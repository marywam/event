import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Change to the icon set you're using
import TopBar from "./TopBar";

// Importing images separately
const musicFestivalImage = require("../assets/event 1.jpeg");
const artExhibitionImage = require("../assets/event 1.jpeg");
const techConferenceImage = require("../assets/event 1.jpeg");

// Sample data for events
const eventsData = [
  {
    id: 1,
    date: "17th March, 2023",
    title: "Summer Music Festival",
    location: "New York",
    image: musicFestivalImage,
  },
  {
    id: 2,
    date: "1st Oct, 2024",
    title: "Art Exhibition",
    location: "San Francisco",
    image: artExhibitionImage,
  },
  {
    id: 3,
    date: "20th Dec, 2024",
    title: "Tech Conference Summit",
    location: "Seattle",
    image: techConferenceImage,
  },

  {
    id: 4,
    date: "20th Dec, 2024",
    title: "Tech Conference Summit",
    location: "Seattle",
    image: techConferenceImage,
  },
  {
    id: 5,
    date: "20th Dec, 2024",
    title: "Tech Conference Summit",
    location: "Seattle",
    image: techConferenceImage,
  },
  {
    id: 6,
    date: "20th Dec, 2024",
    title: "Tech Conference Summit",
    location: "Seattle",
    image: techConferenceImage,
  },
];

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = eventsData.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.containerevent}>
      <TopBar />
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Upcoming Events</Text>
        <View style={styles.searchContainer}>
          <Icon
            name="search-outline"
            size={25}
            style={[styles.searchIcon, { color: 'grey' }]}
          />
          <TextInput
            placeholder="Search events..."
            value={searchTerm}
            onChangeText={setSearchTerm}
            style={styles.searchInput}
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.eventList}>
          {filteredEvents.map((event) => (
            <View key={event.id} style={styles.eventCard}>
              <Image
                source={event.image}
                style={styles.thumbnail}
                accessibilityLabel={event.title}
              />
              <View style={styles.eventDetails}>
                <Text style={styles.eventDate}>{event.date}</Text>
                <Text style={styles.eventTitle}>{event.title}</Text>
                <View style={styles.locationContainer}>
                  <Icon name="location-outline" size={16} color="grey" />
                  <Text style={styles.eventLocation}>{event.location}</Text>
                </View>
              </View>
              <TouchableOpacity>
              <Text style={styles.moreDetails}>More</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor:"white"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  containerevent:{
      backgroundColor:"white"
  },
  searchContainer: {
    marginBottom: 8,
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 50,
    paddingLeft: 15,
    paddingRight: 3,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  searchInput: {
    width: 100,
    paddingVertical: 7,
    color: "grey",
    fontSize: 16,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  eventList: {
    flexDirection: "column",
    gap: 15,
  },
  eventCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Added to push "More Details" to the far right
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    borderColor: "#fff", // White border
    backgroundColor: "white", // Optional background color
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // Increased shadow for better visibility
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  eventDetails: {
    flex: 1, // Allows this to take the available space
    marginRight: 10, // Adds a little space between event details and "More Details"
  },
  eventTitle: {
    margin: 0,
    fontSize: 15,
    fontWeight: "bold",
  },
  eventDate: {
    marginVertical: 5,
  },
  eventLocation: {
    margin: 0,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5, // Adds a little space between the title and location
  },
  moreDetails: {
    marginTop: 50,
    color: "blue",
    textDecorationLine: "none",
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default Home;
