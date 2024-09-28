import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Change to the icon set you're using
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

// Importing images separately
const musicFestivalImage = require("../assets/event 1.jpeg");
const artExhibitionImage = require("../assets/event 1.jpeg");
const techConferenceImage = require("../assets/event 1.jpeg");

import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

interface Event {
  id: number;
  date: string;
  title: string;
  location: string;
  image: string;
}

type RootStackParamList = {
  Home: undefined;
  EventDetails: undefined; // Add this route to your param list
};

type NavigationProp = StackNavigationProp<RootStackParamList, "Home">;
const API_URL = 'http://192.168.1.11:3000/events'; // Use your local IP address


const Home: React.FC = () => {
  const [eventsData, setEventsData] = useState<Event[]>([]); // Now it knows 'eventsData' is an array of 'Event' objects

  const [loading, setLoading] = useState(true); // Loading state
  const [searchTerm, setSearchTerm] = useState("");

  const navigation = useNavigation<NavigationProp>(); // Get navigation from the hook

  // Function to get the local image
  const getLocalImage = (imageName: string) => {
    switch (imageName) {
      case "event1":
        return require("../assets/event 1.jpeg"); // Local image path
      case "event 1":
        return require("../assets/event 1.jpeg"); // Local image path
      case "event 1":
        return require("../assets/event 1.jpeg"); // Local image path
      case "event 1":
        return require("../assets/event 1.jpeg"); // Local image path
      case "event 1":
        return require("../assets/event 1.jpeg"); // Local image path
      case "event 1":
        return require("../assets/event 1.jpeg"); // Local image path

      default:
        return require("../assets/event 1.jpeg"); // Fallback image
    }
  };

  // Fetch events from local API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(API_URL);
        setEventsData(response.data); // Set the events data from API response
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    fetchEvents();
  }, []);

  // Filter events based on search term
  const filteredEvents = eventsData.filter((event: any) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Loading events...</Text>
      </View>
    );
}


  // Handle navigation to EventDetails screen
  const handleEvent = () => {
    navigation.navigate("EventDetails");
  };

  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.scrollContainer}>
        <View style={styles.scrollText}>
          <Text style={styles.title}>Upcoming Events</Text>
          <View style={styles.searchContainer}>
            <Icon
              name="search-outline"
              size={25}
              style={[styles.searchIcon, { color: "grey" }]}
            />
            <TextInput
              placeholder="Search events..."
              value={searchTerm}
              onChangeText={setSearchTerm}
              style={styles.searchInput}
              placeholderTextColor="grey"
            />
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.eventList}>
            {filteredEvents.map((event) => (
              <View key={event.id} style={styles.eventCard}>
                <Image
                  source={getLocalImage(event.image)}
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
                <TouchableOpacity onPress={handleEvent}>
                  <Text style={styles.moreDetails}>More</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <BottomBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes up the full height
    backgroundColor: "white",
  },
  scrollContainer: {
    flex: 1, // Ensures the ScrollView takes up the available space
  },
  scrollView: {
    padding: 20,
  },
  scrollText: {
    paddingTop: 10,
    paddingLeft: 17,
    paddingRight: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  searchContainer: {
    marginBottom: 8,
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
    flex: 1, // Allow input to take the available width
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
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    borderColor: "#fff",
    backgroundColor: "white",
    shadowColor: "blue",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  eventDetails: {
    flex: 1,
    marginRight: 10,
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
    marginTop: 5,
  },
  moreDetails: {
    color: "blue",
    textDecorationLine: "none",
    fontWeight: "bold",
    fontSize: 12,
    marginTop: 50,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
},
loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: 'grey',
},

});

export default Home;
