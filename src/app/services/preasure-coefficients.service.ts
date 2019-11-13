import { Injectable } from '@angular/core';
import RoofPressureCoefficients, { RoofPressureInternalCoefficients } from '../model/roof-pressure-coefficients.model';

@Injectable({
  providedIn: 'root'
})
export class PreasureCoefficientsService {


  private coefficients90: RoofPressureCoefficients[];
  private coefficients0: RoofPressureCoefficients[];

  constructor() {
    this.coefficients90 = [
      this.rpc(-45, this.rpic(-1.4, -2.0), this.rpic(-1.2, -2.0), this.rpic(-1.0, -1.3), this.rpic(-0.9, -1.2)),
      this.rpc(-30, this.rpic(-1.5, -2.1), this.rpic(-1.2, -2.0), this.rpic(-1.0, -1.3), this.rpic(-0.9, -1.2)),
      this.rpc(-15, this.rpic(-1.9, -2.5), this.rpic(-1.2, -2.0), this.rpic(-0.8, -1.2), this.rpic(-0.8, -1.2)),
      this.rpc(-5, this.rpic(-1.8, -2.5), this.rpic(-1.2, -2.0), this.rpic(-0.7, -1.2), this.rpic(-0.8, -1.2)),
      this.rpc(5, this.rpic(-1.6, -2.2), this.rpic(-1.3, -2.0), this.rpic(-0.7, -1.2), this.rpic(-0.6)),
      this.rpc(15, this.rpic(-1.3, -2.0), this.rpic(-1.3, -2.0), this.rpic(-0.6, -1.2), this.rpic(-0.5)),
      this.rpc(30, this.rpic(-1.1, -1.5), this.rpic(-1.4, -2.0), this.rpic(-0.8, -1.2), this.rpic(-0.5)),
      this.rpc(45, this.rpic(-1.1, -1.5), this.rpic(-1.4, -2.0), this.rpic(-0.9, -1.2), this.rpic(-0.5)),
      this.rpc(60, this.rpic(-1.1, -1.5), this.rpic(-1.2, -2.0), this.rpic(-0.8, -1.0), this.rpic(-0.5)),
      this.rpc(75, this.rpic(-1.1, -1.5), this.rpic(-1.2, -2.0), this.rpic(-0.8, -1.0), this.rpic(-0.5))
    ];
    this.coefficients0 = [
      this.rpc(-45, this.rpic(-0.6), this.rpic(-0.6), this.rpic(-0.8), this.rpic(-0.7), this.rpic(-1, -1.5)),
      this.rpc(-30, this.rpic(-1.1, -2), this.rpic(-0.8, -1.5), this.rpic(-0.8), this.rpic(-0.6), this.rpic(-0.8, -1.4)),
      this.rpc(-15, this.rpic(-2.5, -2), this.rpic(-1.3, -2.0), this.rpic(-0.9, -1.2), this.rpic(-0.5), this.rpic(-0.7, -1.2)),
      this.rpc(-5, this.rpic(-2.3, -2.5), this.rpic(-1.2, -2.0), this.rpic(-0.8, -1.2), this.rpic(0.2, 0.2, -0.6, -0.6)),
      this.rpc(5,
        this.rpic(-1.7, -2.5, 0), this.rpic(-1.2, -2.0, 0),
        this.rpic(-0.6, -1.2, 0), this.rpic(-0.6, -0.6, -0.6, -0.6), this.rpic(0.2, 0.2, -0.6, -0.6)),
      this.rpc(15,
        this.rpic(-0.9, -2.0, 0.2), this.rpic(-0.8, -1.5, 0.2),
        this.rpic(-0.3, -0.3, 0.2, 0.2), this.rpic(-0.4, -0.4, 0, 0), this.rpic(-1, -1.5, 0, 0)),
      this.rpc(30,
        this.rpic(-0.5, -1.5, 0.7, 0.7), this.rpic(-0.5, -1.5, 0.7, 0.7),
        this.rpic(-0.2, -0.2, 0.4, 0.4), this.rpic(-0.4, -0.4, 0, 0), this.rpic(-0.5, -0.5, 0, 0)),
      this.rpc(45,
        this.rpic(0, 0, 0.7, 0.7), this.rpic(0, 0, 0.7, 0.7),
        this.rpic(0, 0, 0.6, 0.6), this.rpic(-0.2, -0.2, 0, 0), this.rpic(-0.3, -0.3, 0, 0)),
      this.rpc(60, this.rpic(0.7), this.rpic(0.7), this.rpic(0.7), this.rpic(-0.2), this.rpic(-0.3)),
      this.rpc(75, this.rpic(0.8), this.rpic(0.8), this.rpic(0.8), this.rpic(-0.2), this.rpic(-0.3))
    ];

  }
  public getCoefficientsFor0(angle: number): RoofPressureCoefficients {
    return this.getEstimation(angle, this.coefficients0);
  }
  public getCoefficientsFor90(angle: number): RoofPressureCoefficients {
    return this.getEstimation(angle, this.coefficients90);
  }

  public getEstimation(angle: number, data: RoofPressureCoefficients[]): RoofPressureCoefficients {
    const limits = this.getLimits(angle, data);
    const V1 = limits[0];
    const V2 = limits[1];
    const letters = RoofPressureCoefficients.internal;
    const coefs = RoofPressureInternalCoefficients.internal;
    const result = RoofPressureCoefficients.empty(angle);
    letters.forEach(letter => {
      result[letter] = {};
      coefs.forEach(coef => {
        if (V1[letter] && V2[letter]) {
          let v1;
          let v2;
          const isCoefAdditional = coef === 'Cpe10Additional' || coef === 'Cpe1Additional';
          let coefAdditionalUsed = false;
          if (coef === 'Cpe10Additional') {
            const y1 = V1[letter][coef] || V1[letter][coef] === 0 ? V1[letter][coef] : V1[letter].Cpe10;
            const y2 = V2[letter][coef] || V2[letter][coef] === 0 ? V2[letter][coef] : V2[letter].Cpe10;
            v1 = { x: V1.angle, y: y1 };
            v2 = { x: V2.angle, y: y2 };
            coefAdditionalUsed =
              (y1 !== V1[letter].Cpe10)
              ||
              (y2 !== V2[letter].Cpe10);
          } else if (coef === 'Cpe1Additional') {
            const y1 = V1[letter][coef] || V1[letter][coef] === 0 ? V1[letter][coef] : V1[letter].Cpe1;
            const y2 = V2[letter][coef] || V2[letter][coef] === 0 ? V2[letter][coef] : V2[letter].Cpe1;
            v1 = { x: V1.angle, y: y1 };
            v2 = { x: V2.angle, y: y2 };
            coefAdditionalUsed =
              (y1 !== V1[letter].Cpe1)
              ||
              (y2 !== V2[letter].Cpe1);
          } else {
            v1 = { x: V1.angle, y: V1[letter][coef] };
            v2 = { x: V2.angle, y: V2[letter][coef] };
          }
          if (!isCoefAdditional || (isCoefAdditional && coefAdditionalUsed)) {
            result[letter][coef] = this.getY(angle, v1, v2);
          }
        }
      });
      if (Object.keys(result[letter]).length === 0) {
        delete result[letter];
      }
    });
    return result;
  }

  private getLimits(angle: number, data: RoofPressureCoefficients[]): RoofPressureCoefficients[] {
    const angleList = [...(data.map(r => r.angle)), angle].sort((a, b) => a - b);
    const posOfAngle = angleList.indexOf(angle);
    const limits = angleList.splice(posOfAngle - 1, 3);
    limits.splice(1, 1);
    return limits.map(l => data.filter(d => d.angle === l)[0]);
  }

  getY(angle: number, v1: { x: number, y: number }, v2: { x: number, y: number }): number {
    const a = (v2.y - v1.y) / (v2.x - v1.x);
    return Math.round((a * (angle - v1.x) + v1.y) * 10000) / 10000;
  }

  private rpc(angle: number,
              F: RoofPressureInternalCoefficients,
              G: RoofPressureInternalCoefficients,
              H: RoofPressureInternalCoefficients,
              I: RoofPressureInternalCoefficients,
              J?: RoofPressureInternalCoefficients) {
    return new RoofPressureCoefficients(angle, F, G, H, I, J);
  }
  private rpic(Cpe10: number,
               Cpe1?: number,
               Cpe10Additional?: number,
               Cpe1Additional?: number) {
    return new RoofPressureInternalCoefficients(Cpe10, Cpe1 || Cpe10, Cpe10Additional, Cpe1Additional || Cpe10Additional);
  }
}
