// common

interface PointGeometry {
  type: 'Point'
  coordinates: [number, number]
}

interface PolygonGeometry {
  type: 'Polygon'
  coordinates: [number, number][][]
}

interface MultiPolygonGeometry {
  type: 'MultiPolygon'
  coordinates: [number, number][][][]
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

// battles

interface BattleSide {
  forces?: string
  losses?: string
  parts: WikipediaWithText[]
}

interface Battle {
  text: string
  wikipedia?: Wikipedia
  partOf: Wikipedia
  place: WikipediaWithText
  date: DateObject
  side1: BattleSide
  side2: BattleSide
  result: 0 | 1 | 2
  coordinates: [number, number]
}

// conflicts

interface ConflictTreaty extends WikipediaWithText {
  result: string
}

interface Conflict {
  text: string
  wikipedia: Wikipedia
  start: DateObject
  end: DateObject
  treaties?: ConflictTreaty[]
  parts: WikipediaWithText[][]
  casusBelli?: string
}

// geometries - regions

interface GeometryRegionProperties {
  name: string
  swe_from_year?: number
  swe_from_wikipedia?: Wikipedia
  swe_to_year?: number
  swe_to_wikipedia?: Wikipedia
}

type GeometryRegionFeature = Feature<GeometryRegionProperties, PolygonGeometry|MultiPolygonGeometry>

// index

interface SweHistory {
  battles: Battle[]
  conflicts: Conflict[]
  geometries: {
    regions: FeatureCollection<GeometryRegionFeature>
    regionsWithoutCoastline: FeatureCollection<GeometryRegionFeature>
  }
  persons: {
    regents: PersonRegent[]
  },
  places: {
    balticCities: FeatureCollection<PlacesBalticCitiesFeature>
    gardaRike: FeatureCollection<PlacesGardarikeFeature>
    goldCoast: FeatureCollection<PlacesGoldCoastFeature>
    newSweden: FeatureCollection<PlacesNewSwedenFeature>
  }
}