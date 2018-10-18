// data
import personsRegents from './data/persons.regents'
import placesGardarikeFeatures from './data/places.gardarike'
import placesNewSwedenFeatures from './data/places.newSweden'
import placesGoldCoastFeatures from './data/places.goldCoast'
import placesBalticCities from './data/places.balticCities'
import battles from './data/battles'
import conflicts from './data/conflicts'

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
  },
  battles,
  conflicts,
}

export default sweHistory