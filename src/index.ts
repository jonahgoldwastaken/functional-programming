import { resolve } from 'path'
require('dotenv').config({ path: resolve(__dirname, '..', '.env') })
import parseLanguage from './modules/parseLanguage'
import data from './data/practice-data.json'
import parsePets from './modules/parsePets'

// console.log(parseLanguage(data))
console.dir(parsePets(data))
