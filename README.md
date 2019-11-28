# Swedish history data

## install

```
npm install swedish-history
```

## usage

```typescript
import {
  persons,
  places,
} from 'swedish-history'
```

### `persons.regents`

An array of JSON objects

```typescript
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
```

source [wikipedia](https://sv.wikipedia.org/wiki/Lista_%C3%B6ver_Sveriges_regenter)

### `places.balticCities`

A GeoJSON FeatureCollection

```typescript
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
```

source [baltictowns.com](http://www.baltictowns.com/portal/e_index.html)

### `places.goldCoast`

A GeoJSON FeatureCollection

```typescript
interface PlacesGoldCoastProperties {
  name: string
  swe_from_year: number
  swe_to_year: number
}

type PlacesGoldCoastFeature = Feature<PlacesGoldCoastProperties, PointGeometry>
```

source [wikipedia](https://en.wikipedia.org/wiki/Swedish_Gold_Coast)

### `places.newSweden`

A GeoJSON FeatureCollection

```typescript
interface PlacesNewSwedenProperties {
  name: string
  swe_from_year: number
  swe_to_year: number
}

type PlacesNewSwedenFeature = Feature<PlacesNewSwedenProperties, PointGeometry>
```

source [wikipedia](https://en.wikipedia.org/wiki/New_Sweden)

### `places.gardaRike`

A GeoJSON FeatureCollection

```typescript
interface PlacesGardarikeProperties {
  name: string
  wikipedia: Wikipedia
}

type PlacesGardarikeFeature = Feature<PlacesGardarikeProperties, PointGeometry>
```

source [wikipedia](https://en.wikipedia.org/wiki/Gar%C3%B0ar%C3%ADki)

### `battles`

An array of JSON objects

```typescript
interface Battle {
  text: string
  wikipedia?: Wikipedia
  partOf: Wikipedia
  place: WikipediaWithText
  date: DateObject
  side1: {
    forces?: string
    losses?: string
    parts: WikipediaWithText[]
  }
  side2: {
    forces?: string
    losses?: string
    parts: WikipediaWithText[]
  }
  result: 0 | 1 | 2
  coordinates: [number, number]
}
```

source [wikipedia](https://sv.wikipedia.org/wiki/Kategori:Svenska_slag)

### `conflicts`

An array of JSON objects

```typescript
interface Conflict {
  text: string
  wikipedia: Wikipedia
  start: DateObject
  end: DateObject
  treaties?: ConflictTreaty[]
  parts: WikipediaWithText[][]
  casusBelli?: string
}
```

source [wikipedia](https://sv.wikipedia.org/wiki/Lista_%C3%B6ver_svenska_krig)

### `geometries.regions`

A GeoJSON FeatureCollection

```typescript
interface GeometryRegionProperties {
  name: string
  swe_from_year?: number
  swe_from_wikipedia?: Wikipedia
  swe_to_year?: number
  swe_to_wikipedia?: Wikipedia
}

type GeometryRegionFeature = Feature<GeometryRegionProperties, PolygonGeometry|MultiPolygonGeometry>
```

sources [wikipedia](https://sv.wikipedia.org) and [OSM](https://www.openstreetmap.org)

### `geometries.regionsWithoutCoastline`

Same as `geometries.regions`, but you can use another coastline precision.