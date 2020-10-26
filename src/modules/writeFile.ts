import { writeFileSync } from 'fs'
import { resolveResults } from '../utilities/path'

export const writeResult: (
  data: GenericObject
) => (fileName: string) => void = data => str =>
  writeFileSync(resolveResults(str), Buffer.from(JSON.stringify(data)))
