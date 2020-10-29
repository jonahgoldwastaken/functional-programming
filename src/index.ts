import { fetchMultiple } from './modules/fetch.js'

const parseData = async () => {
  const test = await fetchMultiple([
    'https://opendata.rdw.nl/resource/mz4f-59fw.json',
  ])
  console.log(test)
}

parseData()
