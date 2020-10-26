type PetName = string
type PetSpecies = string

type PetTuple = [PetSpecies, PetName]

type PetData = { amount: OccurenceTuple<PetSpecies>[]; names: PetTuple[] }
