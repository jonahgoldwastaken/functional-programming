type PetName = string
type PetSpecies = string

type PetTuple = [PetSpecies, PetName]

// eslint-disable-next-line
type PetData = {
  amount: OccurenceTuple<PetSpecies>[]
  names: PetTuple[]
}
