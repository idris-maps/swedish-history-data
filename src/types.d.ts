// common

export interface PointGeometry {
  type: 'Point'
  coordinates: [number, number]
}

export interface PolygonGeometry {
  type: 'Polygon'
  coordinates: [number, number][][]
}

export interface MultiPolygonGeometry {
  type: 'MultiPolygon'
  coordinates: [number, number][][][]
}

export interface Wikipedia {
  lang: string
  page: string
}

export interface WikipediaWithText {
  text: string
  wikipedia?: Wikipedia
}

export interface DateObject {
  year: number
  month?: number
  day?: number
}

export interface Feature<Properties, Geometry> {
  type: 'Feature'
  properties: Properties
  geometry: Geometry
}

export interface FeatureCollection<Feature> {
  type: 'FeatureCollection'
  features: Feature[]
}

// persons - regents

export interface PersonRegent {
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

export interface PlacesGardarikeProperties {
  name: string
  wikipedia: Wikipedia
}

type PlacesGardarikeFeature = Feature<PlacesGardarikeProperties, PointGeometry>

// places - goldcoast

export interface PlacesGoldCoastProperties {
  name: string
  swe_from_year: number
  swe_to_year: number
}

type PlacesGoldCoastFeature = Feature<PlacesGoldCoastProperties, PointGeometry>

// places - newsweden

export interface PlacesNewSwedenProperties {
  name: string
  swe_from_year: number
  swe_to_year: number
}

type PlacesNewSwedenFeature = Feature<PlacesNewSwedenProperties, PointGeometry>

// places - baltic cities

export interface PlacesBalticCitiesProperties {
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

export interface BattleSide {
  forces?: string
  losses?: string
  parts: WikipediaWithText[]
}

export interface Battle {
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

export interface ConflictTreaty extends WikipediaWithText {
  result: string
}

export interface Conflict {
  text: string
  wikipedia: Wikipedia
  start: DateObject
  end: DateObject
  treaties?: ConflictTreaty[]
  parts: WikipediaWithText[][]
  casusBelli?: string
}

// geometries - regions

export interface GeometryRegionProperties {
  name: string
  swe_from_year?: number
  swe_from_wikipedia?: Wikipedia
  swe_to_year?: number
  swe_to_wikipedia?: Wikipedia
}

type GeometryRegionFeature = Feature<GeometryRegionProperties, PolygonGeometry|MultiPolygonGeometry>

// index

export interface SweHistory {
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