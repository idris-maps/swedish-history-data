export interface PointGeometry {
  type: 'Point'
  coordinates: [number, number]
}

export interface Wikipedia {
  lang: string
  page: string
}

export interface DateObject {
  year: number
  month?: number
  day?: number
}

export interface WikipediaWithText {
  text: string
  wikipedia?: Wikipedia
}