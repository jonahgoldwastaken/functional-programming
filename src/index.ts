import { fetchAndParseMultipleJson } from './modules/fetch'

const parseRDWData = async () => {
  console.log(
    await fetchAndParseMultipleJson([
      'https://opendata.rdw.nl/resource/mz4f-59fw.json',
    ])
  )
}

parseRDWData()
