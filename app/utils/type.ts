export interface Pokemon {
  name: string;
  stats: {
    base_stat: number
    stat: {
      name: string
    }
  }[]
  sprites: {
    front_default: string
  }
}
