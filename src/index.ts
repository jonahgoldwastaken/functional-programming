/* eslint-disable */

import { fetchAndParseMultipleJson } from './modules/fetch'

async function parseRDWData() {
  console.log(
    await fetchAndParseMultipleJson([
      'https://opendata.rdw.nl/resource/mz4f-59fw.json',
    ])
  )
}

void parseRDWData()
