import { Component, Input } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { Stats } from 'src/app/interfaces/pokemon.inteface';

@Component({
  selector: 'app-pokemon-stats',
  templateUrl: './pokemon-stats.component.html',
  styleUrls: ['./pokemon-stats.component.css']
})
export class PokemonStatsComponent {
  @Input() pokemonStats: Stats[][] = []
  @Input() color: string[] = []

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

  ngOnChanges(): void {    
    this.radarChartLabels = this.pokemonStats[0].map((stat) => stat.stat.name)

    this.radarChartData = {
      labels: this.radarChartLabels,
      datasets: this.pokemonStats.map((stats, index) => ({
          data: stats.map((stat)  => stat.base_stat),
          label: 'Stats',
          backgroundColor: this.color[index] + '55',
          hoverBackgroundColor: this.color[index] + '88',
          pointBackgroundColor: index > 0 ? '#9f3a3a' : '#3a579f' + 'AA',
          pointBorderColor: index > 0 ? '#9f3a3a' : '#3a579f' + 'AA',
          borderColor: index > 0 ? '#9f3a3a' : '#3a579f'
        })
      )
    };
  }
}
