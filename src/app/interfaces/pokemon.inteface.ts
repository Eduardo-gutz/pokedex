import { BasicName } from "./common.interface";

export interface Type {
    slot: number
    type: {
        name: string
        url: string
    };
}

export interface Stats {
    base_stat: number
    effort: number
    stat: BasicName;
}

export interface PokemonDetails {
    id: number;
    name: string;
    base_experience: number;
    height: number
    is_default: true;
    order: number
    weight: number
    abilities: {
        is_hidden: true;
        slot: number
        ability: BasicName;
    }[]
    forms: {
        name: string;
        url: string
    }[]
    game_indices: {
        game_index: number
        version: BasicName;
    }[]
    held_items: {
        item: BasicName;
        version_details: {
            rarity: number
            version: {
                name: string;
                url: string
            };
        }[]
    }[]
    location_area_encounters: string;
    moves: {
        move: BasicName;
        version_group_details: {
            level_learned_at: 1;
            version_group: {
                name: string
                url: string
            };
            move_learn_method: {
                name: string
                url: string
            };
        }[]
    }[]
    species: {
        name: string
        url: string
    };
    sprites: {
        back_default: string
        back_female: string | null;
        back_shiny: string
        back_shiny_female: string | null;
        front_default: string
        front_female: string | null;
        front_shiny: string
        front_shiny_female: string | null;
        other: {
            dream_world: {
                front_default: string
                front_female: string | null;
            };
            home: {
                front_default: string
                front_female: string | null;
                front_shiny: string
                front_shiny_female: string | null;
            };
            'official-artwork': {
                front_default: string
            };
        };
        versions: {
            'generation-i': {
                'red-blue': {
                    back_default: string
                    back_gray: string
                    front_default: string
                    front_gray: string
                };
                yellow: {
                    back_default: string
                    back_gray: string
                    front_default: string
                    front_gray: string
                };
            };
            'generation-ii': {
                crystal: {
                    back_default: string
                    back_shiny: string
                    front_default: string
                    front_shiny: string
                };
                gold: {
                    back_default: string
                    back_shiny: string
                    front_default: string
                    front_shiny: string
                };
                silver: {
                    back_default: string
                    back_shiny: string
                    front_default: string
                    front_shiny: string
                };
            };
            'generation-iii': {
                emerald: {
                    front_default: string
                    front_shiny: string
                };
                'firered-leafgreen': {
                    back_default: string
                    back_shiny: string
                    front_default: string
                    front_shiny: string
                };
                'ruby-sapphire': {
                    back_default: string
                    back_shiny: string
                    front_default: string
                    front_shiny: string
                };
            };
            'generation-iv': {
                'diamond-pearl': {
                    back_default: string
                    back_female: string | null;
                    back_shiny: string
                    back_shiny_female: string | null;
                    front_default: string
                    front_female: string | null;
                    front_shiny: string
                    front_shiny_female: string | null;
                };
                'heartgold-soulsilver': {
                    back_default: string
                    back_female: string | null;
                    back_shiny: string
                    back_shiny_female: string | null;
                    front_default: string
                    front_female: string | null;
                    front_shiny: string
                    front_shiny_female: string | null;
                };
                platinum: {
                    back_default: string
                    back_female: string | null;
                    back_shiny: string
                    back_shiny_female: string | null;
                    front_default: string
                    front_female: string | null;
                    front_shiny: string
                    front_shiny_female: string | null;
                };
            };
            'generation-v': {
                'black-white': {
                    animated: {
                        back_default: string
                        back_female: string | null;
                        back_shiny: string
                        back_shiny_female: string | null;
                        front_default: string
                        front_female: string | null;
                        front_shiny: string
                        front_shiny_female: string | null;
                    };
                    back_default: string
                    back_female: string | null;
                    back_shiny: string
                    back_shiny_female: string | null;
                    front_default: string
                    front_female: string | null;
                    front_shiny: string
                    front_shiny_female: string | null;
                };
            };
            'generation-vi': {
                'omegaruby-alphasapphire': {
                    front_default: string
                    front_female: string | null;
                    front_shiny: string
                    front_shiny_female: string | null;
                };
                'x-y': {
                    front_default: string
                    front_female: string | null;
                    front_shiny: string
                    front_shiny_female: string | null;
                };
            };
            'generation-vii': {
                icons: {
                    front_default: string
                    front_female: string | null;
                };
                'ultra-sun-ultra-moon': {
                    front_default: string
                    front_female: string | null;
                    front_shiny: string
                    front_shiny_female: string | null;
                };
            };
            'generation-viii': {
                icons: {
                    front_default: string
                    front_female: string | null;
                };
            };
        };
    };
    stats: Stats[]
    types: Type[]
    past_types: {
        generation: BasicName;
        types: [
            {
                slot: number
                type: {
                    name: string
                    url: string
                };
            }
        ];
    }[]
}
