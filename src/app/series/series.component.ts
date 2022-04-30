import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SeriesService } from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series: Array<Serie> = [];
  average = 0;

  getSeries() {
    this.seriesService.getSeries().subscribe(series => {
      series.forEach(serie => {
        this.average += serie.seasons
      })
      this.series = series;
      this.average = this.average / series.length;
    });
  }

  constructor(private seriesService: SeriesService) { }

  ngOnInit() {
    this.getSeries();
  }

}
