import { map, pipe, project } from 'ramda'
import { renameKeys } from 'ramda-adjunct'

export { areaManagerMapper }

const areaManagerLookupTable = {
  areamanagerid: 'id',
  areamanagerdesc: 'description',
}

function areaManagerMapper(data: RawData): AreaManager[] {
  //eslint-disable-next-line
  console.log(
    pipe(
      project(['areamanagerid', 'areamanagerdesc']),
      map(renameKeys(areaManagerLookupTable))
    )(data[0])
  )
  return []
}
