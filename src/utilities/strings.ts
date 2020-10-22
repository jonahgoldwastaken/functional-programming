export const splitStringOnRegex = (regex: RegExp) => (str: string) =>
  str.slice().split(regex)

export const splitStringOnString = (splitStr: string) => (str: string) =>
  str.slice().split(splitStr)

export const capitaliseString = (str: string) =>
  `${str[0].toUpperCase()}${str.slice(1)}`

export const stringIsValidString = (str: string) =>
  str.length && Number.isNaN(Number(str))

export const stringIsInArray = (arr: string[]) => (str: string) =>
  [...arr].map(val => val.toLowerCase()).includes(str.toLowerCase())

export const replaceStringForObjectValue = (obj: { [key: string]: string }) => (
  str: string
) => obj[str] ?? str

