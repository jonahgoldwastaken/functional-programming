export const splitStringOnRegex = (regex: RegExp) => (str: string) =>
  str.slice().split(regex)

export const splitStringOnString = (splitStr: string) => (str: string) =>
  str.slice().split(splitStr)

export const replaceStringThroughRegex = (
  regex: RegExp,
  replacementVal: string
) => (str: string) => str.slice().replace(regex, replacementVal)

export const mapCapitaliseString = (str: string) =>
  `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`

export const stringEqualsString = (filterStr: string) => (str: string) =>
  !(str.slice().toLowerCase() === filterStr.slice().toLowerCase())

export const stringMatchesRegEx = (filterRegex: RegExp) => (str: string) =>
  !str.slice().toLowerCase().match(filterRegex)

export const stringIsNumber = (str: string) => !Number.isNaN(Number(str))

export const filterStringLength = (str: string) => !!str.length

export const filterStringIsNaN = (str: string) => Number.isNaN(Number(str))

export const filterStringIncludedInArray: (
  testArr: string[]
) => (str: string) => boolean = arr => str =>
  [...arr].map(val => val.toLowerCase()).includes(str.toLowerCase())

export const replaceStringForObjectValue = (obj: GenericObject<string>) => (
  str: string
) => obj[str] ?? str

export const stringContainsString = (compareStr: string) => (str: string) =>
  str.includes(compareStr)
