import { fetchAndParseMultipleJson } from './modules/fetch'

const test = async () => {
  const testing = await fetchAndParseMultipleJson([
    'https://opendata.rdw.nl/resource/mz4f-59fw.json',
  ])
  console.log(testing)
}

test()
