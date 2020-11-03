import { andThen, pipe } from 'ramda'
import { areaManagerMapper } from './helpers/RDWData.js'
import { fetchAndParseMultipleJson } from './modules/fetch.js'

parseRDWData([
  'https://opendata.rdw.nl/resource/2uc2-nnv3.json?$limit=900', // area managers
  'https://opendata.rdw.nl/resource/534e-5vdg.json?$limit=4100', // fare parts
  'https://opendata.rdw.nl/resource/nfzq-8g7y.json?$limit=1600', // fare calculations
  'https://opendata.rdw.nl/resource/adw6-9hsg.json?$limit=5000', // parking areas
  'https://opendata.rdw.nl/resource/qidm-7mkf.json?$limit=1600', // usage goal
  'https://opendata.rdw.nl/resource/b3us-f26s.json?$limit=2100', // area specifications
  'https://opendata.rdw.nl/resource/nsk3-v9n7.json?$limit=5300', // geometry parking area
  'https://opendata.rdw.nl/resource/figd-gux7.json?$limit=900', // parking open
  'https://opendata.rdw.nl/resource/edv8-qiyg.json?$limit=700', // parking entrance
]).then(initialiseD3)

async function parseRDWData(uri) {
  return await pipe(fetchAndParseMultipleJson, andThen(areaManagerMapper))(uri)
}

function initialiseD3(data) {
  console.log(data)
}
