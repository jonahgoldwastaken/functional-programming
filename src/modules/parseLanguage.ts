// import {
//   filterOnValidLanguages,
//   mapExpandShortenedLanguage,
// } from '../helpers/languages'
// import { sortArrayOfStringsAlphabetically } from '../utilities/array'
// import { pickKeyFromObject } from '../utilities/object'
// import { capitaliseString, splitStringOnRegex } from '../utilities/strings'

// const parseLanguages = <T>(dataset: T[]) =>
//   [...dataset]
//     .map(pickKeyFromObject('gesprokenTalen'))
//     .map(splitStringOnRegex(/;|,|\.|\s/))
//     .map((ans: string[]) =>
//       ans
//         .map(mapExpandShortenedLanguage)
//         .filter(filterOnValidLanguages)
//         .map(capitaliseString)
//         .sort(sortArrayOfStringsAlphabetically)
//     )

// export default parseLanguages
