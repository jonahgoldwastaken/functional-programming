import { writeFileSync } from 'fs'
import { resolveResults } from '../utilities/path.js'

/**
 * Writes provided data to file with provided filename inside the 'results' folder inside this project
 * @param data Data to write to a file
 */
export const writeResult: (
  data: GenericObject
) => (fileName: string) => void = data => str =>
  writeFileSync(resolveResults(str), Buffer.from(JSON.stringify(data)))
