import {
  PointGeometry
} from './common.types'

export interface PlacesNewSwedenProperties {
  name: string
  swe_from_year: number
  swe_to_year: number
}

export interface PlacesNewSwedenFeature {
  type: 'Feature'
  properties: PlacesNewSwedenProperties
  geometry: PointGeometry
}