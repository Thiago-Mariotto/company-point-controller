require('dotenv').config();

const getDistanceFromLatLonInM = (clientPosition) => {
  const serverPosition = {
    lat: -22.9839635, lng: -45.5351189,
  };

  const deg2rad = (deg) => deg * (Math.PI / 180);

  const R = 6371;
  const dLat = deg2rad(clientPosition.lat - serverPosition.lat);
  const dLng = deg2rad(clientPosition.lng - serverPosition.lng);

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
          + Math.cos(deg2rad(serverPosition.lat))
          * Math.cos(deg2rad(serverPosition.lat))
          * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return ((R * c * 1000).toFixed());
};

module.exports = getDistanceFromLatLonInM;
