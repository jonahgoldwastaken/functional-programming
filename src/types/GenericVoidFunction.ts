// Code by David G https://stackoverflow.com/questions/29689966/typescript-how-to-define-type-for-a-function-callback-as-any-function-type-no
type GenericVoidFunction = (...args: any[]) => void
