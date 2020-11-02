export { isGeoDataPoint }

function isGeoDataPoint(data) {
  return data[0] === 'POINT'
}
