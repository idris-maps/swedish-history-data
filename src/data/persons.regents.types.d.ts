import {
  DateObject,
  Wikipedia,
  WikipediaWithText,
} from './common.types'

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