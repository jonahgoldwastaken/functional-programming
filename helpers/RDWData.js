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
  dissoc,
} from 'ramda'
import { renameKeys } from 'ramda-adjunct'

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

function areaManagerMapper(data) {
  //eslint-disable-next-line
  console.log(
    pipe(
      project(['areamanagerid', 'areamanagerdesc']),
      map(
        pipe(
          renameKeys(areaManagerLookupTable),
          assoc('fares', farePartMapper(data[1], data[2]))
        )
      )
    )(data[0])
  )
  return []
}

function farePartMapper(fareParts, fareCalcs) {
  return manager =>
    pipe(
      filter(propEq('areamanagerid', manager.id)),
      project([
        'areamanagerid',
        'farecalculationcode',
        'amountfarepart',
        'stepsizefarepart',
        'startdurationfarepart',
        'enddurationfarepart',
      ]),
      map(
        pipe(
          renameKeys(farePartLookupTable),
          assoc('description', associateFareCalculation(fareCalcs)),
          dissoc('managerId')
        )
      )
    )(fareParts)
}

function associateFareCalculation(calcs) {
  return part =>
    pipe(
      find <
        RawFareCalculation >
        both(
          propEq('areamanagerid', part.managerId),
          propEq('farecalculationcode', part.id)
        ),
      ifElse(
        isNil,
        always('Heeft geen beschrijving'),
        pick(['farecalculationcode'])
      )
    )(calcs)
}
