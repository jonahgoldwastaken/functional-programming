import {
  assoc,
  propEq,
  filter,
  map,
  pipe,
  project,
  find,
  both,
  pick,
  ifElse,
  isNil,
  always,
  length,
  dissoc,
  values,
  reduceBy,
  omit,
} from 'ramda'
import { renameKeys } from 'ramda-adjunct'
import { parseGeoData } from '../modules/geoData.js'
import { unwrapSingleItemArray } from '../modules/array.js'

export { areaManagerMapper }

const areaManagerLookupTable = {
  areamanagerid: 'id',
  areamanagerdesc: 'description',
}

const farePartLookupTable = {
  areamanagerid: 'managerId',
  farecalculationcode: 'id',
  amountfarepart: 'amount',
  stepsizefarepart: 'stepSize',
  startdurationfarepart: 'dateFirstUsed',
  enddurationfarepart: 'dataLastUsed',
}

const parkingAreaLookupTable = {
  areaid: 'id',
  areadesc: 'description',
}

const parkingOpenLookupTable = {
  exitpossibleallday: 'exitPossibleAllDay',
  startofperiod: 'dateFirstUs,ed',
  endofperiod: 'dateLastUsed',
}

const parkingEntranceLookupTable = {
  days: 'days',
  enterfrom: 'openingTime',
  enteruntil: 'closingTime',
  startofperiod: 'dateFirstUsed',
  endofperiod: 'dateLastUsed',
}

function areaManagerMapper(data) {
  return pipe(
    project(['areamanagerid', 'areamanagerdesc']),
    map(val =>
      pipe(
        renameKeys(areaManagerLookupTable),
        assoc('fares', farePartMapper(data[1], data[2], val)),
        assoc(
          'parkingAreas',
          parkingAreaMapper(
            data[3],
            data[4],
            data[5],
            data[6],
            data[7],
            data[8],
            val
          )
        )
      )(val)
    )
  )(data[0])
}

function farePartMapper(fareParts, fareCalcs, manager) {
  return pipe(
    filter(propEq('areamanagerid', manager.areamanagerid)),
    project([
      'areamanagerid',
      'farecalculationcode',
      'amountfarepart',
      'stepsizefarepart',
      'startdurationfarepart',
      'enddurationfarepart',
    ]),
    map(val =>
      pipe(
        renameKeys(farePartLookupTable),
        assoc('description', associateFareCalculation(fareCalcs, val)),
        dissoc('managerId')
      )(val)
    )
  )(fareParts)
}

function associateFareCalculation(calcs, part) {
  return pipe(
    find(
      both(
        propEq('areamanagerid', part.areamanagerid),
        propEq('farecalculationcode', part.farecalculationcode)
      )
    ),
    ifElse(
      isNil,
      always('Heeft geen beschrijving'),
      pipe(pick(['farecalculationdesc']), values, unwrapSingleItemArray)
    )
  )(calcs)
}

function parkingAreaMapper(
  areas,
  goals,
  specs,
  geoData,
  open,
  entrance,
  manager
) {
  const area = pipe(
    filter(propEq('areamanagerid', manager.areamanagerid)),
    map(val =>
      pipe(
        renameKeys(parkingAreaLookupTable),
        omit(['startdatearea', 'enddatearea', 'usageid']),
        assoc('usage', associateUsageGoal(goals, val)),
        assoc('capacity', associateSpecifications(specs, val)),
        assoc('coordinates', associateCoordinates(geoData, val)),
        assoc('exitPossibleAllDay', associateParkingOpen(open, val)),
        assoc('openingHours', associateParkingEntrance(entrance, val))
      )(val)
    )
  )(areas)
  return area
}

function associateUsageGoal(goals, area) {
  return pipe(
    find(propEq('usageid', area.usageid)),
    ifElse(
      isNil,
      always('Heeft geen gebruiksdoel'),
      pipe(pick(['usageiddesc']), values, unwrapSingleItemArray)
    )
  )(goals)
}

function associateSpecifications(specs, area) {
  return pipe(
    find(propEq('areaid', area.areaid)),
    ifElse(isNil, always(0), pick(['capacity']), unwrapSingleItemArray)
  )(specs)
}

function associateCoordinates(geoData, area) {
  return pipe(
    find(propEq('areaid', area.areaid)),
    ifElse(
      isNil,
      always({ long: Infinity, lat: Infinity }),
      pipe(
        pick(['areageometryastext']),
        values,
        unwrapSingleItemArray,
        parseGeoData
      )
    )
  )(geoData)
}

function associateParkingOpen(open, area) {
  return pipe(
    filter(propEq('areaid', area.areaid)),
    ifElse(
      length,
      always([]),
      project(['exitpossibleallday', 'startofperiod', 'endofperiod']),
      map(renameKeys(parkingOpenLookupTable))
    )
  )(open)
}

function associateParkingEntrance(entrance, area) {
  return pipe(
    filter(propEq('areaid', area.areaid)),
    project([
      'days',
      'enterfrom',
      'enteruntil',
      'startofperiod',
      'endofperiod',
    ]),
    map(renameKeys(parkingEntranceLookupTable)),
    reduceBy(groupEntranceEntries, [], toDays)
  )(entrance)
}

function toDays({ days }) {
  return days
}

function groupEntranceEntries(
  acc,
  { openingTime, closingTime, dateFirstUsed, dateLastUsed }
) {
  return acc.concat({ openingTime, closingTime, dateFirstUsed, dateLastUsed })
}
