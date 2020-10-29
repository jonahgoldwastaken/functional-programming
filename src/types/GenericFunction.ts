// Code by Ryan Cavanaugh, edited by SgtPooki @ https://stackoverflow.com/questions/29689966/typescript-how-to-define-type-for-a-function-callback-as-any-function-type-no
//eslint-disable-next-line
type GenericFunction = <T =  unknown[], R = unknown>(args?: T) => R
