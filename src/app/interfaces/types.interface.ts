import { BasicName, Language } from "./common.interface"

interface DamageRelations {
    no_damage_to: BasicName[]
    half_damage_to: BasicName[]
    double_damage_to: BasicName[]
    no_damage_from: BasicName[]
    half_damage_from: BasicName[]
    double_damage_from: BasicName[]
}

export interface TypeResponse {
    id: number,
    name: string,
    damage_relations: DamageRelations
    past_damage_relations: {
        generation: BasicName
        damage_relations: DamageRelations
    }[],
    game_indices: {
        game_index: number
        generation: BasicName
    }[],
    generation: BasicName
    move_damage_class: BasicName
    names: Language[],
    pokemon: {
        slot: number
        pokemon: BasicName
    }[],
    moves: BasicName[]
}