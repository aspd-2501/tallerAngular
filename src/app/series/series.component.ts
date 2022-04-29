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

  getSeries() {
    this.seriesService.getSeries().subscribe(series => {
      this.series = series;
    });
  }

  constructor(private seriesService: SeriesService) { }

  ngOnInit() {
    this.getSeries();
  }

}
