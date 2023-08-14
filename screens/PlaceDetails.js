import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import OutlinedButton from '../components/UI/OutlinedButton';
import { Colors } from '../constants/colors';
import { useEffect, useState } from 'react';
import { fetchPlaceDetails } from '../util/database';

function PlaceDetails({ route, navigation }) {
  const [fetchedPlace, setFetchedPlace] = useState();
  function showOnMapHandler() {
    navigation.navigate('Map', {
      initialLat: fetchedPlace.location.lat,
      initialLng: fetchedPlace.location.lng,
    });
  }

  const selectedPlaceId = route.params.placeId;

  useEffect(() => {
    async function loadPlaceData() {
      const place = await fetchPlaceDetails(selectedPlaceId);
      setFetchedPlace(place);
      navigation.setOptions({
        headerTitle: place.title,
      });
    }

    loadPlaceData();
  }, [selectedPlaceId]);

  if (!fetchedPlace) {
    return (
      <View style={styles.fallbackContainer}>
        <Text>Loading Place Data...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.screen}>
      <Image source={{ uri: fetchedPlace.imageUri }} style={styles.image} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.addressText}>{fetchedPlace.address}</Text>
        </View>
        <OutlinedButton icon="map" onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
}

export default PlaceDetails;

const styles = StyleSheet.create({
  screen: {
    padding: 12,
  },
  image: {
    height: '35%',
    minHeight: 300,
    width: '100%',
    borderRadius: 4,
  },
  locationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressContainer: {
    padding: 20,
  },
  addressText: {
    color: Colors.primary500,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
