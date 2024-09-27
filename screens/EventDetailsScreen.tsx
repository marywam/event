import React , { useState }  from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // For icons
import { ScrollView } from "react-native-gesture-handler";

import { Ionicons } from '@expo/vector-icons'; // If you're using Expo for icons
import { useNavigation } from '@react-navigation/native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  EventDetails: undefined;  // Add this route to your param list
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const EventDetails : React.FC = () =>{
  const [searchTerm, setSearchTerm] = useState("");

  
  const navigation = useNavigation<NavigationProp>(); // Get navigation from the hook

  

  // Handle navigation to EventDetails screen
  const handleEvent = () => {
    navigation.navigate("EventDetails");
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>

         {/* Back Icon Button */}
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.navigate('Home')} // Direct to home page
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      {/* Event Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/event 1.jpeg")} // Replace with your event image
          style={styles.eventImage}
        />
      </View>

      {/* Event Details */}
      <View>
        <View style={styles.eventCard}>
          {/* Event Title */}
          <Text
            style={styles.eventTitle}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            Comedy Gala Night at The Club
          </Text>

          {/* Event Date and Location */}
          <View style={styles.metaRow}>
            <View style={styles.dateContainer}>
              <Icon name="calendar-outline" size={16} color="grey" />
              <Text style={styles.metaText}>17 Mar 2023</Text>
            </View>
            <View style={styles.locationContainer}>
              <Icon name="location-outline" size={16} color="grey" />
              <Text style={styles.metaText}>California, USA</Text>
            </View>
          </View>

          {/* Price and Seats Available */}
          <View style={styles.priceRow}>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>$45</Text>
            </View>
            <Text style={styles.seatsAvailable}>256 seats available</Text>
          </View>
        </View>
        {/* Combined Sections in a Bordered Container */}
        <View style={styles.combinedSectionsContainer}>
          {/* About Event Section */}
          <View style={styles.aboutContainer}>
            <Text style={styles.aboutHeader}>About Event</Text>
            <Text style={styles.aboutDescription}>
              Planning an event can be a daunting task, especially when you have
              <Text style={styles.readMore}> read more</Text>
            </Text>
          </View>

          {/* Participants Section */}
          <View style={styles.participantsContainer}>
            <Image
              source={require("../assets/user 1.jpeg")}
              style={styles.participantImage}
            />
            <Image
              source={require("../assets/user 1.jpeg")}
              style={styles.participantImage}
            />
            <Image
              source={require("../assets/user 1.jpeg")}
              style={styles.participantImage}
            />
            <View style={styles.participantsInfo}>
              <Text style={styles.moreParticipants}>+2k</Text>
              <Text style={styles.participantsText}>Participant</Text>
            </View>
            <Text style={styles.participantsLocation}>All over the world</Text>
          </View>

          {/* Location Section */}
          <Text style={styles.eventTitle}>Location</Text>
          <View style={styles.locationMapContainer}>
            <Image
              source={require("../assets/map.jpeg")} // Replace with your map image
              style={styles.mapImage}
            />
          </View>
        </View>

        {/* Buy Ticket Button */}
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy Ticket</Text>
          <Icon
            name="heart-outline"
            size={20}
            color="#fff"
            style={styles.heartIcon}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    position: 'relative',
  },
  imageContainer: {
    borderRadius: 20,
    overflow: "hidden", // Ensures the image corners are curved
    marginBottom: 10,
  },
  eventImage: {
    width: "100%",
    height: 400,
    marginTop: 5,
    borderRadius: 20, // Curved corners for the image
  },
  backButton: {
    position: 'absolute',
    top: 40, // Adjust based on your needs
    left: 20, // Adjust based on your needs
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: add a background for better visibility
    padding: 10,
    borderRadius: 20,
  },
  combinedSectionsContainer: {
    borderColor:"#F0F0F5", // Light gray border color
    backgroundColor:"white",
    borderWidth: 1, // Width of the border
    borderRadius: 10, // Rounded corners
    padding: 10, // Padding inside the bordered area
    marginVertical: 10, // Vertical margin for spacing
  },

  eventCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 4, // For Android shadow
    borderColor: "#F0F0F5",
    borderWidth: 1,
  },

  // Title styling
  eventTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F1F1F",
    marginBottom: 8, // Adds space below the title before the date/location
  },

  // Row for event date and location
  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12, // Space between date/location and price/seats
  },

  // Date container styling
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  // Location container styling
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  // Meta text (date and location) styling
  metaText: {
    fontSize: 14,
    color: "grey",
    marginLeft: 5,
  },

  // Row for price and seat availability (moved below metaRow)
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  // Price container styling
  priceContainer: {
    backgroundColor: "#F4F1F9",
    padding: 8,
    borderRadius: 20,
    alignItems: "center",
    width: 60,
  },

  // Price text styling
  price: {
    fontSize: 20,
    color: "orange",
    fontWeight: "bold",
  },

  // Seats available text styling
  seatsAvailable: {
    fontSize: 14,
    color: "grey",
  },

  aboutContainer: {
    marginVertical: 10,
  },
  aboutHeader: {
    fontSize: 16,
    fontWeight: "bold",
  },
  aboutDescription: {
    color: "grey",
  },
  readMore: {
    color: "#e91e63",
    fontWeight: "bold",
  },
  participantsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  participantImage: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginRight: 0.1,
  },
  participantsInfo: {
    flexDirection: "row", // Align items horizontally
    alignItems: "center", // Vertically center the text
  },
  moreParticipants: {
    fontSize: 16,
    color: "#e91e63",
    marginRight: 2,
  },
  participantsText: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 8,
  },
  participantsLocation: {
    color: "grey",
  },
  locationMapContainer: {
    marginVertical: 10,
  },
  mapImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  buyButton: {
    backgroundColor: "#e91e63",
    paddingVertical: 15,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buyButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  heartIcon: {
    marginLeft: 5,
  },
});

export default EventDetails;
