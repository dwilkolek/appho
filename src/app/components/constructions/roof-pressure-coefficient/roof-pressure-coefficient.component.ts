import { Component, OnInit } from '@angular/core';
import { PreasureCoefficientsService } from 'src/app/services/preasure-coefficients.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-roof-pressure-coefficient',
  templateUrl: './roof-pressure-coefficient.component.html',
  styleUrls: ['./roof-pressure-coefficient.component.less']
})
export class RoofPressureCoefficientComponent implements OnInit {

  constructor(private service: PreasureCoefficientsService) { }
  coef90 = null;
  coef0 = null;

  angle = new FormControl(34);

  ngOnInit() {
    setTimeout(() => {
      this.getData();
    });
  }

  getData() {
    this.coef0 = this.service.getCoefficientsFor90(this.angle.value);
    this.coef90 = this.service.getCoefficientsFor0(this.angle.value);
  }

}
