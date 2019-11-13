import { Component, OnInit } from '@angular/core';
import { RodFinderService } from 'src/app/services/rod-finder.service';
import { FormControl } from '@angular/forms';
import { RodMeasure } from 'src/app/model/rod-measure.model';

@Component({
  selector: 'app-rod-finder',
  templateUrl: './rod-finder.component.html',
  styleUrls: ['./rod-finder.component.less']
})
export class RodFinderComponent implements OnInit {

  requiredCSA = new FormControl(20);
  combinations: RodMeasure[] = [];
  dataSource;
  displayedColumns: string[] = ['count', 'diameter', 'crossSectionalArea'];

  resultsFor = '';
  constructor(private rodFinderService: RodFinderService) { }

  ngOnInit() {
    setTimeout(() => {
      this.getData();
    });
  }
  getData() {
    this.combinations = this.rodFinderService.getRodOptions(this.requiredCSA.value);
    this.dataSource = this.combinations;
    this.resultsFor = this.requiredCSA.value;
  }

}
