import {
  pipe,
  map,
  ifElse,
  tail,
  zipObj,
  reduce,
  equals,
  gt,
  length,
  add,
} from 'ramda'
import { divideNum } from 'ramda-adjunct'
import {
  splitStringOnString,
  removeRegExFromString,
} from '../utilities/strings.js'
import { isGeoDataPoint } from '../utilities/geoData.js'

export { parseGeoData }

function parseGeoData(geoData) {
  return pipe(
    splitStringOnString(' '),
    map(
      pipe(
        removeRegExFromString(/\(/g),
        removeRegExFromString(/\)/g),
        removeRegExFromString(/,/g)
      )
    ),
    ifElse(isGeoDataPoint, parseGeoPoint, parseGeoPolygon)
  )(geoData)
}

function parseGeoPoint(pointData) {
  return pipe(tail, map(Number), zipObj(['long', 'lat']))(pointData)
}

function parseGeoPolygon(polygonData) {
  return pipe(
    tail,
    map(Number),
    reduce(
      ([long, lat], curr) => [
        equals(long.length, lat.length) ? [...long, curr] : [...long],
        gt(long.length, lat.length) ? [...lat, curr] : [...lat],
      ],
      [[], []]
    ),
    map(val => divideNum(length(val), reduce(add, 0, val))),
    zipObj(['long', 'lat'])
  )(polygonData)
}
