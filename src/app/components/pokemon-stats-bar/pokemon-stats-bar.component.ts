import { Component, Input } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { Stats } from 'src/app/interfaces/pokemon.inteface';

@Component({
  selector: 'app-pokemon-stats-bar',
  templateUrl: './pokemon-stats-bar.component.html',
  styleUrls: ['./pokemon-stats-bar.component.css']
})
export class PokemonStatsBarComponent {
  @Input() pokemonStats: Stats[] = [];
  @Input() color: string = ''

  public barChartOptions: ChartOptions = {
    responsive: true,
    backgroundColor: '#456565',
    plugins: {
      legend: {
        display: false
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: []
  }

  constructor() {}

  ngOnInit(): void {
    this.barChartData = {
      labels: this.pokemonStats.map((stat) => stat.stat.name),
      datasets: [
        {
          data: this.pokemonStats.map((stat) => stat.base_stat),
          backgroundColor: this.color + 'BB',
          hoverBackgroundColor: this.color
        }
      ]
    }
  
  }
}
