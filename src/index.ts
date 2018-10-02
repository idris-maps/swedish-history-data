// data
import personsRegents from './data/persons.regents'
import placesGardarikeFeatures from './data/places.gardarike'
import placesNewSwedenFeatures from './data/places.newSweden'
import placesGoldCoastFeatures from './data/places.goldCoast'
import placesBalticCities from './data/places.balticCities'

// utils
import toFeatureCollection from './utils/toFeatureCollection'

const sweHistory: SweHistory = {
  places: {
    gardaRike: toFeatureCollection(placesGardarikeFeatures),
    goldCoast: toFeatureCollection(placesGoldCoastFeatures),
    newSweden: toFeatureCollection(placesNewSwedenFeatures),
    balticCities: toFeatureCollection(placesBalticCities),
  },
  persons: {
    regents: personsRegents,
  }
}

export default sweHistory