import {
  PointGeometry
} from './common.types'

export interface PlacesGoldCoastProperties {
  name: string
  swe_from_year: number
  swe_to_year: number
}

export interface PlacesGoldCoastFeature {
  type: 'Feature'
  properties: PlacesGoldCoastProperties
  geometry: PointGeometry
}