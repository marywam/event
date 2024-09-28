import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import { StackNavigationProp } from '@react-navigation/stack';

interface EventDetails {
  id: number;
  title: string;
  date: string;
  location: string;
  price: string;
  seatsAvailable: string;
  about: string;
  participants: string;
  image: string;
}

type RootStackParamList = {
  Home: undefined;
  EventDetails: undefined;  
  BookingForm: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
const API_URL = 'http://192.168.1.11:3000/eventDetails'; // Use your local IP address

const EventDetails: React.FC = () => {
  const [eventDetail, setEventDetail] = useState<EventDetails | null>(null);
  const [loading, setLoading] = useState(true); 

  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(API_URL);
        setEventDetail(response.data[0]); 
      } catch (error) {
        console.error("Error fetching event details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Loading event details...</Text>
      </View>
    );
  }

  if (!eventDetail) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>No event details available.</Text>
      </View>
    );
  }

  const getLocalImage = (imageName: string) => {
    switch (imageName) {
      case "event1":
        return require("../assets/event 1.jpeg"); // Replace with the correct image path
      default:
        return require("../assets/event 1.jpeg"); // Fallback image
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Icon name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image
          source={getLocalImage(eventDetail.image)} 
          style={styles.eventImage}
        />
      </View>

      <View>
        <View style={styles.eventCard}>
          <Text style={styles.eventTitle} numberOfLines={2} ellipsizeMode="tail">
            {eventDetail.title}
          </Text>
          <View style={styles.metaRow}>
            <View style={styles.dateContainer}>
              <Icon name="calendar-outline" size={16} color="grey" />
              <Text style={styles.metaText}>{eventDetail.date}</Text>
            </View>
            <View style={styles.locationContainer}>
              <Icon name="location-outline" size={16} color="grey" />
              <Text style={styles.metaText}>{eventDetail.location}</Text>
            </View>
          </View>
          <View style={styles.priceRow}>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>{eventDetail.price}</Text>
            </View>
            <Text style={styles.seatsAvailable}>{eventDetail.seatsAvailable}</Text>
          </View>
        </View>

        <View style={styles.combinedSectionsContainer}>
          <View style={styles.aboutContainer}>
            <Text style={styles.aboutHeader}>About Event</Text>
            <Text style={styles.aboutDescription}>
              {eventDetail.about}
              <Text style={styles.readMore}> read more</Text>
            </Text>
          </View>
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
            <Text style={styles.participantsText}>{eventDetail.participants} participants</Text>
          </View>
          <Text style={styles.eventTitle}>Location</Text>
          <View style={styles.locationMapContainer}>
          <Image
              source={require("../assets/map.jpeg")} // Replace with your map image
              style={styles.mapImage}
            />
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("BookingForm")} style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Book Now</Text>
          <Icon name="heart-outline" size={20} color="#fff" style={styles.heartIcon} />
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
    overflow: "hidden", 
    marginBottom: 10,
  },
  eventImage: {
    width: "100%",
    height: 400,
    marginTop: 5,
    borderRadius: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: 10,
    borderRadius: 20,
  },
  combinedSectionsContainer: {
    borderColor: "#F0F0F5", 
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
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
    elevation: 4, 
    borderColor: "#F0F0F5",
    borderWidth: 1,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F1F1F",
    marginBottom: 8,
  },
  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  participantImage: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginRight: 0.1,
  },
  metaText: {
    fontSize: 14,
    color: "grey",
    marginLeft: 5,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceContainer: {
    backgroundColor: "#F4F1F9",
    padding: 8,
    borderRadius: 20,
    alignItems: "center",
    width: 60,
  },
  price: {
    fontSize: 20,
    color: "orange",
    fontWeight: "bold",
  },
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
  participantsText: {
    fontSize: 14,
    fontWeight: "bold",
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
    fontWeight: "bold",
    marginRight: 10,
  },
  heartIcon: {
    marginLeft: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 16,
    color: "grey",
    marginTop: 10,
  },
});

export default EventDetails;
