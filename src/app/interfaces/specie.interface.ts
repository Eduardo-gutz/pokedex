import { BasicName } from "./common.interface"

export interface Specie {
    base_happiness: number,
    capture_rate: number,
    color: BasicName,
    egg_groups: BasicName[]
    evolution_chain: {
        url: string
    },
    evolves_from_species: BasicName,
    flavor_text_entries: {
        flavor_text: string
        language: BasicName
        version: BasicName
    }[]
    form_descriptions: any[],
    forms_switchable: boolean,
    gender_rate: number,
    genera: {
        genus: string
        language: BasicName
    }[]
    generation: BasicName
    growth_rate: BasicName
    habitat: BasicName
    has_gender_differences: boolean,
    hatch_counter: number
    id: number
    is_baby: boolean
    is_legendary: boolean
    is_mythical: boolean
    name: string
    names: {
        language: BasicName
        name: string
    }[]
    order: number,
    pal_park_encounters: {
        area: BasicName
        base_score: number
        rate: number
    }[],
    pokedex_numbers: {
        entry_number: number
        pokedex: BasicName
    }[]
    shape: BasicName
    varieties: {
        is_default: boolean,
        pokemon: BasicName
    }[]
}