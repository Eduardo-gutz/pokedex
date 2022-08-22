import { Component, Input } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { Stats } from 'src/app/interfaces/pokemon.inteface';

@Component({
  selector: 'app-pokemon-stats',
  templateUrl: './pokemon-stats.component.html',
  styleUrls: ['./pokemon-stats.component.css']
})
export class PokemonStatsComponent {
  @Input() pokemonStats: Stats[] = []
  @Input() color: string = ''

  public radarChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      }
    }
  };

  public radarChartLabels: string[] = [];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [],
  };

  public radarChartType: ChartType = 'radar';

  constructor() { }

  ngOnInit(): void {
    this.radarChartLabels = this.pokemonStats.map((stat) => stat.stat.name)

    this.radarChartData = {
      labels: this.radarChartLabels,
      datasets: [
        {
          data: this.pokemonStats.map((stat)  => stat.base_stat),
          label: 'Stats',
          backgroundColor: this.color + '55',
          hoverBackgroundColor: this.color + '88',
          pointBackgroundColor: this.color + 'AA',
          pointBorderColor: this.color + 'AA',
          showLine: false
        }
      ]
    };
  }
}
