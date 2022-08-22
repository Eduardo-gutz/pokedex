import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { PokemonDetails } from 'src/app/interfaces/pokemon.inteface';
import { Specie } from 'src/app/interfaces/specie.interface';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ServiceByUrlService } from 'src/app/services/service-by-url.service';
import { backgroundColor } from 'src/app/store/background/background.action';
import { savePokemons } from 'src/app/store/pokemons/pokemon.action';
import typesColors from 'src/environments/typesColors';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  pokemonsList$: Observable<PokemonDetails[]>
  colors: string[] = [];

  pokemon: PokemonDetails | null = null;
  specie!: Specie

  constructor(
    private pokemonServ: PokemonService,
    private specieServ: ServiceByUrlService,
    private route: ActivatedRoute,
    private store: Store<{pokemon: PokemonDetails[]}>
  ) {
    this.pokemonsList$ = this.store.pipe(select('pokemon'))
  }

  ngOnInit(): void {
    window.scrollTo(0, 0)
    this.route.params.subscribe((params) => {
      this.getPokemonDetails(params['name'])
    })
  }
  
  getPokemonDetails(name: string) {
    this.pokemonsList$.pipe(take(1)).subscribe((list: PokemonDetails[]) => {
      const pokemonDetails = list.find((pokemon) => pokemon.name === name)

      if(pokemonDetails) {
        this.pokemon = pokemonDetails
        this.getSpecieDetails(pokemonDetails.species.url)
        this.getColorsByTypes()
      } else {
        this.pokemonServ.getPokemon(name).subscribe((pokemon) => {
          this.store.dispatch(savePokemons({pokemon: pokemon}))
          this.pokemon = pokemon

          this.getSpecieDetails(pokemon.species.url)
          this.getColorsByTypes()
        })
      }
    })
  }

  getSpecieDetails(url: string) {
    this.specieServ.getResponse<Specie>(url).pipe(take(1)).subscribe((specie: Specie) => {
      this.specie = {
        ...specie,
        genera: specie.genera.sort((s) => s.language.name === 'en' ? -1 : 1),
        flavor_text_entries: specie.flavor_text_entries.sort((text) => text.language.name === 'en' ? -1 : 1)
      }
    })
  }

  getColorsByTypes() {
    const colors = this.pokemon?.types.map((type) => (typesColors as any)[type.type.name]);

    this.colors = colors?? [];
    if(this.colors.length > 1) {
      this.store.dispatch(backgroundColor({background: `linear-gradient(130deg,${this.colors[0]}22,${this.colors[1]}22) border-box`}))
    } else {
      this.store.dispatch(backgroundColor({background: `${this.colors[0]}22`}))
    }
  }

}
