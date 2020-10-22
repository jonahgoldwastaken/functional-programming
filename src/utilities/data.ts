export const pickKeyFromDataset = (key: string) => (dataset: any[]) =>
  [...dataset].map(item => item[key])
