import { useEffect, useState } from 'react';
import PlacesList from '../components/Places/PlacesList';
import { useIsFocused } from '@react-navigation/native';
import { fecthPlaces } from '../util/database';

function AllPlaces({ route }) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadPlaces(){
      const places = await fecthPlaces();
      setLoadedPlaces(places);
    }

    if (isFocused) {
      loadPlaces();
      // setLoadedPlaces((currPlace) => [...currPlace, route.params.place]);
    }
    
  }, [isFocused]);

  return <PlacesList places={loadedPlaces} />;
}

export default AllPlaces;
