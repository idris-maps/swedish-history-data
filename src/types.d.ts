// common

interface PointGeometry {
  type: 'Point'
  coordinates: [number, number]
}

interface Wikipedia {
  lang: string
  page: string
}

interface WikipediaWithText {
  text: string
  wikipedia?: Wikipedia
}

interface DateObject {
  year: number
  month?: number
  day?: number
}

interface Feature<Properties, Geometry> {
  type: 'Feature'
  properties: Properties
  geometry: Geometry
}

interface FeatureCollection<Feature> {
  type: 'FeatureCollection'
  features: Feature[]
}

// persons - regents

interface PersonRegent {
  name: string
  wikipedia: Wikipedia
  reignStart: DateObject
  reignEnd: DateObject
  dateOfBirth?: DateObject
  dateOfDeath?: DateObject
  kin?: WikipediaWithText
  spouses: WikipediaWithText[]
  children: WikipediaWithText[]
  father?: WikipediaWithText
  mother?: WikipediaWithText
}

// places - gardarike

interface PlacesGardarikeProperties {
  name: string
  wikipedia: Wikipedia
}

type PlacesGardarikeFeature = Feature<PlacesGardarikeProperties, PointGeometry>

// places - goldcoast

interface PlacesGoldCoastProperties {
  name: string
  swe_from_year: number
  swe_to_year: number
}

type PlacesGoldCoastFeature = Feature<PlacesGoldCoastProperties, PointGeometry>

// places - newsweden

interface PlacesNewSwedenProperties {
  name: string
  swe_from_year: number
  swe_to_year: number
}

type PlacesNewSwedenFeature = Feature<PlacesNewSwedenProperties, PointGeometry>

// places - baltic cities

interface PlacesBalticCitiesProperties {
  name: string
  alternativeNames?: {
    fromYear: number
    toYear: number | null
    value: string
  }[]
  partOf: {
    fromYear: number
    toYear: number | null
    de: string
    en: string
    sv: string
  }[]
}

type PlacesBalticCitiesFeature = Feature<PlacesBalticCitiesProperties, PointGeometry>

// index

interface SweHistory {
  places: {
    gardaRike: FeatureCollection<PlacesGardarikeFeature>
    goldCoast: FeatureCollection<PlacesGoldCoastFeature>
    newSweden: FeatureCollection<PlacesNewSwedenFeature>
    balticCities: FeatureCollection<PlacesBalticCitiesFeature>
  }
  persons: {
    regents: PersonRegent[]
  }
}