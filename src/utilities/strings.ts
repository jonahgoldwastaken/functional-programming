/**
 * Splits string on parts that match provided RegEx
 * @param regex RegEx to split string on
 */
export const splitStringOnRegex = (regex: RegExp) => (str: string) =>
  str.slice().split(regex)

/**
 * Splits string on the value of provided split string
 * @param splitStr String containing value to split string on
 */
export const splitStringOnString = (splitStr: string) => (str: string) =>
  str.slice().split(splitStr)

/**
 * Replaces certain parts of string where provided RegEx matches with provided replacement value
 * @param regex RegEx to test on
 * @param replacementVal Value replacing matching parts of string
 */
export const replaceStringThroughRegex = (
  regex: RegExp,
  replacementVal: string
) => (str: string) => str.slice().replace(regex, replacementVal)

/**
 * Capitalises first character of string
 * @param str String to capitalise
 */
export const mapCapitaliseString = (str: string) =>
  `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`

/**
 * Checks if string equals provided filterString
 * @param filterStr String to filter string on
 */
export const stringEqualsString = (filterStr: string) => (str: string) =>
  !(str.slice().toLowerCase() === filterStr.slice().toLowerCase())

/**
 * Checks if string matches provided RegEx
 * @param filterRegex RegEx to match string on
 */
export const stringMatchesRegEx = (filterRegex: RegExp) => (str: string) =>
  !str.slice().toLowerCase().match(filterRegex)

/**
 * Check if string is a number
 * @param str String to check
 */
export const stringIsNumber = (str: string) => !Number.isNaN(Number(str))

/**
 * Checks if string is not an empty string
 * @param str String to check
 */
export const filterStringLength = (str: string) => !!str.length

/**
 * Checks if provided string is not a number
 * @param str String to check
 */
export const filterStringIsNaN = (str: string) => Number.isNaN(Number(str))

/**
 * Returns a function that checks if provided string is included in array provided
 * @param arr Array to map over
 */
export const filterStringIncludedInArray: (
  testArr: string[]
) => (str: string) => boolean = arr => str =>
  [...arr].map(val => val.toLowerCase()).includes(str.toLowerCase())

/**
 * Replaces string to object value based on if the string is a key inside the object
 * @param obj Look-up table containing key-pair values resembling old and new string values
 */
export const replaceStringForObjectValue = (obj: GenericObject<string>) => (
  str: string
) => obj[str] ?? str

/**
 * Checks if provided string includes the compareStr provided
 * @param compareStr String to compare string in curried function to
 */
export const stringContainsString = (compareStr: string) => (str: string) =>
  str.includes(compareStr)
