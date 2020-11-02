import { promises as fs } from 'fs'
import { resolve } from 'path'

export { resolveResults, writeData }

/**
 * Resolves the 'results' folder inside this repo, attaching provided filename to the end
 * @param str Filename of file to save
 */
function resolveResults(str) {
  return resolve(__dirname, '..', '..', 'results', `${str}.json`)
}

function writeData(data) {
  return async function toFile(file) {
    return fs.writeFile(file, Buffer.from(JSON.stringify(data)))
  }
}
