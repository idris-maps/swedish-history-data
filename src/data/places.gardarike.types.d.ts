import {
  PointGeometry,
  Wikipedia,
} from './common.types'

export interface PlacesGardarikeProperties {
  name: string
  wikipedia: Wikipedia
}

export interface PlacesGardarikeFeature {
  type: 'Feature'
  properties: PlacesGardarikeProperties
  geometry: PointGeometry
}