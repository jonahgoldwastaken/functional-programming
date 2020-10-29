import { resolve } from 'path'

/**
 * Resolves the 'results' folder inside this repo, attaching provided filename to the end
 * @param str Filename of file to save
 */
export function resolveResults(fileName: string): string {
  return resolve(__dirname, '..', '..', 'results', `${fileName}.json`)
}
