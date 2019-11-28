// data
import personsRegents from './data/persons.regents'
import placesGardarikeFeatures from './data/places.gardarike'
import placesNewSwedenFeatures from './data/places.newSweden'
import placesGoldCoastFeatures from './data/places.goldCoast'
import placesBalticCities from './data/places.balticCities'
import battles from './data/battles'
import conflicts from './data/conflicts'
import geometriesRegions from './data/geometries.regionsWithCoastline'
import geometriesRegionsWithoutCoastline from './data/geometries.regionsWithoutCoastline'

// utils
import toFeatureCollection from './utils/toFeatureCollection'

// types
import {
  SweHistory,
} from './types'

const sweHistory: SweHistory = {
  battles,
  conflicts,
  geometries: {
    regions: toFeatureCollection(geometriesRegions),
    regionsWithoutCoastline: toFeatureCollection(geometriesRegionsWithoutCoastline),
  },
  persons: {
    regents: personsRegents,
  },
  places: {
    gardaRike: toFeatureCollection(placesGardarikeFeatures),
    goldCoast: toFeatureCollection(placesGoldCoastFeatures),
    newSweden: toFeatureCollection(placesNewSwedenFeatures),
    balticCities: toFeatureCollection(placesBalticCities),
  },
}

export default sweHistory