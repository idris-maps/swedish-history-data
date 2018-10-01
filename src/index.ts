import personsRegents from './data/persons.regents'
import placesGardarikeFeatures from './data/places.gardarike'
import placesNewSwedenFeatures from './data/places.newSweden'
import placesGoldCoastFeatures from './data/places.goldCoast'

// utils

import toFeatureCollection from './utils/toFeatureCollection'

export default {
  places: {
    gardaRike: toFeatureCollection(placesGardarikeFeatures),
    goldCoast: toFeatureCollection(placesGoldCoastFeatures),
    newSweden: toFeatureCollection(placesNewSwedenFeatures),
  },
  persons: {
    regents: personsRegents,
  }
}