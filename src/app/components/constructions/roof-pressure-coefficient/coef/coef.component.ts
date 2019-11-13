import { Component, OnInit, Input } from '@angular/core';
import RoofPressureCoefficients, { RoofPressureInternalCoefficients } from 'src/app/model/roof-pressure-coefficients.model';

@Component({
  selector: 'app-coef',
  templateUrl: './coef.component.html',
  styleUrls: ['./coef.component.less']
})
export class CoefComponent implements OnInit {
  @Input()
  coef: RoofPressureCoefficients;

  letters = RoofPressureCoefficients.internal;
  coefs = RoofPressureInternalCoefficients.internal;

  constructor() { }

  ngOnInit() {
  }
  safeGet(coef, l, c) {
    if (coef) {
      if (coef[l]) {
        if (coef[l][c] || coef[l][c] === 0) {
          return coef[l][c];
        }
      }
    }
    return '';
  }
}
