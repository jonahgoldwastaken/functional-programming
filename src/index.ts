import { resolve } from 'path'
import { filter, map, pipe } from 'ramda'
import data from './data/practice-data.json'
import { validLanguages } from './helpers/languages'
import { validPets } from './helpers/pets'
import {
  filterInvalidSurveyAnswers,
  pickAndReadySurveyAnswersForParsing,
} from './modules/readySurveyAnswers'
import { stringIsValidString } from './utilities/strings'
require('dotenv').config({ path: resolve(__dirname, '..', '.env') })

const parseData = (data: GenericObject<string>[]) => {
  const parsedLangauges = pipe(
    pickAndReadySurveyAnswersForParsing('gesprokenTalen'),
    map(filterInvalidSurveyAnswers()(validLanguages))
  )(data)

  console.log(parsedLangauges)

  const parsedPets = pipe(
    pickAndReadySurveyAnswersForParsing('huisDieren'),
    map(filterInvalidSurveyAnswers(/geen/)(validPets))
  )(data)

  console.log(parsedPets)
}

parseData(data)
