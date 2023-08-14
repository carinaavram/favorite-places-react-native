const LOCATION_API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.geoapify.com/v1/staticmap?apiKey=${LOCATION_API_KEY}&zoom=15.8713&width=600&height=400&format=jpeg&center=lonlat:${lng},${lat}&marker=lonlat:${lng},${lat};color:%23ff0000;size:medium`;

  return imagePreviewUrl;
}

export async function getAddressFromLocation(lat, lng) {
  const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${LOCATION_API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error ('Failed to fetch address');
  }

  const data = await response.json();
  const address = data.features[0].properties.address_line1 + ' ' + data.features[0].properties.address_line2;
  return address;
}
