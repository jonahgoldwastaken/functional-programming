import { andThen, pipe } from 'ramda'
import { areaManagerMapper } from './helpers/RDWData.js'
import { fetchAndParseMultipleJson } from './modules/fetch.js'

//eslint-disable-next-line
parseRDWData([
  'https://opendata.rdw.nl/resource/2uc2-nnv3.json', // area managers
  'https://opendata.rdw.nl/resource/534e-5vdg.json', // fare parts
  'https://opendata.rdw.nl/resource/nfzq-8g7y.json', // fare calculations
  'https://opendata.rdw.nl/resource/adw6-9hsg.json', // parking areas
  'https://opendata.rdw.nl/resource/qidm-7mkf.json', // usage goal
  'https://opendata.rdw.nl/resource/b3us-f26s.json', // area specifications
  'https://opendata.rdw.nl/resource/nsk3-v9n7.json', // geometry parking area
  'https://opendata.rdw.nl/resource/figd-gux7.json', // parking open
  'https://opendata.rdw.nl/resource/edv8-qiyg.json', // parking entrance
]).then(console.log)

async function parseRDWData(uri) {
  return await pipe(fetchAndParseMultipleJson, andThen(areaManagerMapper))(uri)
}
