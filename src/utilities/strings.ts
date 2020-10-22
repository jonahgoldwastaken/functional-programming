export const splitStringOnRegex = (regex: RegExp) => (str: string) =>
  str.slice().split(regex)

export const splitStringOnString = (splitStr: string) => (str: string) =>
  str.slice().split(splitStr)

export const replaceStringThroughRegex = (
  regex: RegExp,
  replacementVal: string
) => (str: string) => str.slice().replace(regex, replacementVal)

export const capitaliseString = (str: string) =>
  `${str[0].toUpperCase()}${str.slice(1)}`

export const stringIsValidString = (str: string) =>
  str.length && Number.isNaN(Number(str))

export const stringIsInArray = (arr: string[]) => (str: string) =>
  [...arr].map(val => val.toLowerCase()).includes(str.toLowerCase())

export const replaceStringForObjectValue = (obj: GenericObject) => (
  str: string
) => obj[str] ?? str
