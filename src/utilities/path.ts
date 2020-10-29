import { promises as fs } from 'fs'
import { resolve } from 'path'

export { resolveResults, writeData }

/**
 * Resolves the 'results' folder inside this repo, attaching provided filename to the end
 * @param str Filename of file to save
 */
function resolveResults(str: string): string {
  return resolve(__dirname, '..', '..', 'results', `${str}.json`)
}

function writeData(data: unknown): (file: string) => Promise<void> {
  return async function toFile(file: string): Promise<void> {
    return fs.writeFile(file, Buffer.from(JSON.stringify(data)))
  }
}
