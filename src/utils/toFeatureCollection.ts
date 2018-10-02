export default <T>(features: T[]): FeatureCollection<T> => ({
  type: 'FeatureCollection',
  features,
})