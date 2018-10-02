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