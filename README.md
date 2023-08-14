# Favorite Places App - README

The Favorite Places App is a React Native application built using Expo, allowing users to create and manage their favorite places. Users can add places with titles, images captured using their phone camera, and locations from either their current location or by picking a location on a map. The app generates a preview of the chosen location using the Geoapify Map Static API. Users can submit the form, view their saved places in the "All Places" screen, and access detailed information about each place.

## Features

- **Add Favorite Places:** Users can add places with titles, images, and locations. They can capture images using their phone camera and choose locations from their current location or by selecting a spot on the map.

- **Geoapify Map Preview:** The app generates a map preview using the Geoapify Map Static API, displaying the chosen location based on the latitude and longitude.

- **Local Database:** The app uses SQLite for local database storage, ensuring that users' favorite places are saved even when offline.

- **View All Places:** Users can view all their saved places in the "All Places" screen, providing an overview of their favorite spots.

- **Place Details:** Users can click on individual places to view more details, including the title, image, and human-readable address generated using reverse geocoding via the Geoapify API.

- **Navigation:** The app employs React Native's stack navigation for smooth navigation between screens.

- **Image Capture:** The Expo Image Picker enables users to capture images using their device's camera for adding a personalized touch to their favorite places.

- **Map Selection:** The "react-native-maps" library allows users to pick locations by opening Google Maps or Apple Maps, offering flexibility in choosing places from around the world.

## Technologies Used

- React Native
- Expo
- React Navigation
- Expo Camera
- "react-native-maps"
- Expo SQLite
- Expo Location
- Geoapify Map Static API
- Geoapify Reverse Geocoding API